const mongoose = require('mongoose');
BoughtSeat = mongoose.model('BoughtSeat');
const deleteBoughtSeats = require('./selectedSeats').deleteBoughtsSeats


async function addBoughtSeat(req, res) {
  await req.body.seats.map(seatInfo => {
    const newBoughtSeat = new BoughtSeat({
      additionalServices: seatInfo.additionalServices,
      user: seatInfo.user,
      session: seatInfo.session.id,
      cinema: seatInfo.cinema.id,
      hall: seatInfo.hall.id,
      movie: seatInfo.movie.id,
      row: seatInfo.row,
      seat: seatInfo.seat,
      cost: seatInfo.cost
    });
  newBoughtSeat.save()
    .then(boughtSeat => {
      deleteBoughtSeats(
        seatInfo.user,
        seatInfo.session.id,
        seatInfo.cinema.id,
        seatInfo.hall.id,
        seatInfo.movie.id,
        seatInfo.row,
        seatInfo.seat,
        seatInfo.cost
      );
      res.send(boughtSeat)
    })
    .catch(error => {
      res.status(500).send({
        message: error.message
      });
      res.send(error);
    });
  })
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
