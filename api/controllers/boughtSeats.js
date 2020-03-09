const mongoose = require('mongoose');
BoughtSeat = mongoose.model('BoughtSeat');
const deleteBoughtSeats = require('./selectedSeats').deleteBoughtsSeats


async function addBoughtSeat(req, res) {
  const newBoughtSeat = await new BoughtSeat(req.body);
  newBoughtSeat.save()
    .then(boughtSeat => {
      deleteBoughtSeats(
        req.body.user,
        req.body.session,
        req.body.cinema,
        req.body.hall,
        req.body.movie,
        req.body.row,
        req.body.seat,
        req.body.cost
      );
      res.send(boughtSeat)
    })
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

async function listBoughtSeatsByUser(req, res) {
  await BoughtSeat.find({
    user: req.params.userId
  })
    .populate('cinema')
    .populate('movie')
    .populate('hall')
    .populate('session')
    .then(sessions => res.send(sessions))
    .catch(error => {
      res.status(500).send({
        message: error.message
      });
    });
}

module.exports = {
  addBoughtSeat,
  listSessionBoughtSeats,
  listBoughtSeatsByUser
}
