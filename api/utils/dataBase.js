const connectionString = require('../configs/dataBase').dbConnectionString;
const mongoose = require('mongoose');

function setUpConnection() {
  mongoose.connect(connectionString, { useNewUrlParser: true })
   .then(() => mongoose.connection)
   .catch(error => console.log(error))
}

module.exports = {
  setUpConnection
}
