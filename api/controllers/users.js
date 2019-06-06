const mongoose = require('mongoose');
User = mongoose.model('User');
const service = require('../passport/service.js');


async function signup(req, res) {
  if (!req.body.username || !req.body.password) {
    res.json({ message: 'Please pass username and password.' });
  } else {
    const user = await User.findOne({ username: req.body.username });
    if (user) {
      return res.status(500).json({ error: "User already exists." });
    } else {
      const newUser = new User({
        username: req.body.username,
        password: service.createHash(req.body.password),
        email: req.body.email
      });
      await newUser.save()
        .then(user => res.send(user))
        .catch(error => {
          res.status(500).send({
            message: error.message
          });
          res.send(error);
        })
    }
  }
};

async function login(req, res) {
  const user = await User.findOne({ username: req.body.username });
  if (!user) {
    res.status(401).send({ message: 'Username not found.' });
  } else if(!service.isValidPassword(user, req.body.password)){
    res.status(401).send({ message: 'Wrong password.' });
  } else {
    req.body.token = service.createToken(user.id);
    res.send({ token: req.body.token });
  }
}

function getToken(headers) {
  if (headers && headers.authorization) {
    return headers.authorization;
  } else {
    return null;
  }
};

module.exports = {
  signup,
  login,
  getToken
}
