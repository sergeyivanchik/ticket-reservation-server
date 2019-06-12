const mongoose = require('mongoose');
BoughtSeat = mongoose.model('BoughtSeat');


async function addBoughtSeat(req, res) {
  const newBoughtSeat = await new BoughtSeat(req.body);
  newBoughtSeat.save()
    .then(boughtSeat => res.send(boughtSeat))
    .catch(error => {
      res.status(500).send({
        message: error.message
      });
      res.send(error);
    });
};

async function listSessionBoughtSeats(req, res) {
    await BoughtSeat.find({
      session: req.params.sessionId, 
      cinema: req.params.cinemaId,
      hall: req.params.hallId,
      movie: req.params.movieId
    })
      .then(sessions => res.send(sessions))
      .catch(error => {
        res.status(500).send({
          message: error.message
        });
      });
  };

module.exports = {
  addBoughtSeat,
  listSessionBoughtSeats
}
