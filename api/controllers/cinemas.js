const mongoose = require('mongoose');
Cinema = mongoose.model('Cinema');


async function listCinemas(req, res) {
  await Cinema.find()
    .then(cinemas => res.send(cinemas))
    .catch(error => {
      res.status(500).send({
        message: error.message
      });
    });
};

async function addCinema(req, res) {
  const newCinema = await new Cinema(req.body);
  newCinema.save()
    .then(cinema => res.send(cinema))
    .catch(error => {
      res.status(500).send({
        message: error.message
      });
      res.send(error);
    });
};

async function searchCinema(req, res) {
  await Cinema.findById(req.params.id)
    .then(cinema => res.send(cinema))
    .catch(error => {
      res.status(500).send({
        message: error.message
      });
      res.send(error);
    });
};

module.exports = {
  listCinemas,
  addCinema,
  searchCinema
}
