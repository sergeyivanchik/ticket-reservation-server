const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('../../config.js');


function createHash(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(10), null);
};

function isValidPassword(user, password) {
  return bcrypt.compareSync(password, user.password);
}

function createToken(userId) {
  const token = jwt.sign({
    userId,
    expiresIn: '1d'
  }, config.secretKey);
    return 'bearer '+ token;
}

module.exports = {
  createHash,
  isValidPassword,
  createToken
}