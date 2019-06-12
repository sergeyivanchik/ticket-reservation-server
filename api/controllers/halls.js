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

async function hallByCinema(req, res) {
  await Hall.find({_id: req.params.id ,cinema: req.params.cinemaId})
    .then(hall => res.send(hall))
    .catch(error => {
      res.status(500).send({
        message: error.message
      });
    });
};

module.exports = {
  addHall,
  hallByCinema
}
