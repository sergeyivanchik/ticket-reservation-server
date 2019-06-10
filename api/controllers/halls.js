const mongoose = require('mongoose');
Hall = mongoose.model('Hall');


async function addHall(req, res) {
  const newHall = await new Hall(req.body);
  newHall.save()
    .then(hall => res.send(hall))
    .catch(error => {
      res.status(500).send({
        message: error.message
      });
      res.send(error);
    });
};

module.exports = {
  addHall
}
