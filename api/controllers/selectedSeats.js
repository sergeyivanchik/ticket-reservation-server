const mongoose = require('mongoose');
SelectedSeats = mongoose.model('SelectedSeat');


async function addSelectedSeat(req, res) {
  const seat = await SelectedSeats.findOne({
    user: req.body.user.user,
    session: req.body.user.session,
    cinema: req.body.user.cinema,
    hall: req.body.user.hall,
    movie: req.body.user.movie,
    row: req.body.user.row,
    seat: req.body.user.seat,
    cost: req.body.user.cost
  })
  if(!seat) {
    const newSelectedSeat = await new SelectedSeats(req.body.user);
    newSelectedSeat.save()
      .then(selectedSeat => res.send(selectedSeat))
      .catch(error => {
        res.status(500).send({
          message: error.message
        });
        res.send(error);
      });
  } else {
    await SelectedSeats.findOneAndDelete({
      user: req.body.user.user,
      session: req.body.user.session,
      cinema: req.body.user.cinema,
      hall: req.body.user.hall,
      movie: req.body.user.movie,
      row: req.body.user.row,
      seat: req.body.user.seat,
      cost: req.body.user.cost
    })
      .then(deleteSeat => res.send(deleteSeat))
      .catch(error => {
        res.status(500).send({
          message: error.message
        });
        res.send(error);
      });
  }
};

async function listSelectedSeats(req, res) {
    await SelectedSeats.find({
      session: req.params.sessionId, 
      cinema: req.params.cinemaId,
      hall: req.params.hallId,
      movie: req.params.movieId, 
    })
      .then(selectedSeats => res.send(selectedSeats))
      .catch(error => {
        res.status(500).send({
          message: error.message
        });
      });
};

module.exports = {
  addSelectedSeat,
  listSelectedSeats
}