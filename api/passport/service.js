const bcrypt = require('bcryptjs');


function createHash(password){
  return bcrypt.hashSync(password, bcrypt.genSaltSync(10), null);
};

var isValidPassword = function(user, password){
  return bcrypt.compareSync(password, user.password);
}

module.exports = {
  createHash,
  isValidPassword
}