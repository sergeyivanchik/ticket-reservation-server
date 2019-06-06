const mongoose = require('mongoose');
User = mongoose.model('User');
var jwt = require('jsonwebtoken');
var config = require('../../config.js');


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
        password: req.body.password,
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
  } else if(user.password !== req.body.password){
    res.status(401).send({ message: 'Wrong password.' });
  } else {
    const token = jwt.sign({id: user.id, expiresIn: '1d'}, config.secretKey);
    req.body.token = 'bearer '+ token;
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
