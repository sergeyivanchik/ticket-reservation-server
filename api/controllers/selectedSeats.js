const mongoose = require('mongoose');
SelectedSeats = mongoose.model('SelectedSeat');


let timer = '';
const timerTime = 120000;

async function addSelectedSeat(req, res) {
  const seat = await SelectedSeats.findOne({
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
      .then(selectedSeat => {
        timer = setTimeout(() => {SelectedSeats.deleteMany({user: req.body.user.user})
        .then(result => { 
              res.send(result);
            })
        .catch(error => {
              res.send(error);
            });
        }, timerTime);
        res.send(selectedSeat);
      })
      .catch(error => {
        res.status(500).send({
          message: error.message
        });
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

async function listSelectedSeatsByUser(req, res) {
  await SelectedSeats.find({
    user: req.params.userId,
    session: req.params.sessionId, 
    cinema: req.params.cinemaId,
    hall: req.params.hallId,
    movie: req.params.movieId, 
  })
    .populate('session')
    .populate('hall')
    .populate('movie')
    .populate('cinema')
    .then(selectedSeats => res.send(selectedSeats))
    .catch(error => {
      res.status(500).send({
        message: error.message
      });
    });
};

async function addAdditionalService(req, res) {
  const service = await SelectedSeats.findOne({
    user: req.body.user.user,
    session: req.body.user.session,
    cinema: req.body.user.cinema,
    hall: req.body.user.hall,
    movie: req.body.user.movie,
    row: req.body.user.row,
    seat: req.body.user.seat,
    cost: req.body.user.cost,
    additionalServices:{ $elemMatch:  req.body.user.service}
  })
  if(!service) {
     const newService = await SelectedSeats.findOneAndUpdate({
      user: req.body.user.user,
      session: req.body.user.session,
      cinema: req.body.user.cinema,
      hall: req.body.user.hall,
      movie: req.body.user.movie,
      row: req.body.user.row,
      seat: req.body.user.seat,
      cost: req.body.user.cost
    },
    {$push: { additionalServices: req.body.user.service }}
    )
      .then(selectedSeat => {
        console.log(selectedSeat)
        res.send(selectedSeat);
      })
      .catch(error => {
        res.status(500).send({
          message: error.message
        });
        res.send(error);
      }); 
  } else {
    await SelectedSeats.updateOne({
      user: req.body.user.user,
      session: req.body.user.session,
      cinema: req.body.user.cinema,
      hall: req.body.user.hall,
      movie: req.body.user.movie,
      row: req.body.user.row,
      seat: req.body.user.seat,
      cost: req.body.user.cost
    },
    {
      $pull: {additionalServices: req.body.user.service}
    })
      .then(deletedService => res.send(deletedService))
      .catch(error => {
        res.status(500).send({
          message: error.message
        });
        res.send(error);
      });
  }
};

async function deleteAllAdditionalServices(req, res) {
  await SelectedSeats.updateMany({
    user: req.params.userId,
    session: req.params.sessionId, 
    cinema: req.params.cinemaId,
    hall: req.params.hallId,
    movie: req.params.movieId, 
  }, 
  {
    $pull: {additionalServices: {$exists: true}}
  })
  .then(deletedServices => res.send(deletedServices))
  .catch(error => {
    res.status(500).send({
      message: error.message
    });
    res.send(error);
  }); 
}

async function deleteBoughtsSeats(user, session, cinema, hall, movie, row, seat, cost) {
  await SelectedSeats.findOneAndDelete({
    user: user,
    session: session, 
    cinema: cinema,
    hall: hall,
    movie: movie,
    row: row,
    seat: seat,
    cost: cost 
  }) 
}

module.exports = {
  addSelectedSeat,
  listSelectedSeats,
  listSelectedSeatsByUser,
  addAdditionalService,
  deleteAllAdditionalServices,
  deleteBoughtsSeats
}