const mongoose = require('mongoose');
Session = mongoose.model('Session');


async function listSessions(req, res) {
  await Session.find()
    .populate('cinema')
    .populate('hall')
    .populate('movie')
    .then(sessions => res.send(sessions))
    .catch(error => {
      res.status(500).send({
        message: error.message
      });
    });
}

async function listSessionsByMovie(req, res) {
  await Session.find({movie: req.params.movieId})
    .populate('cinema')
    .populate('hall')
    .populate('movie')
    .then(sessions => res.send(sessions))
    .catch(error => {
      res.status(500).send({
        message: error.message
      });
    });
}

async function addSession(req, res) {
  const newSession = await new Session(req.body);
  newSession.save()
    .then(session => res.send(session))
    .catch(error => {
      res.status(500).send({
        message: error.message
      });
      res.send(error);
    });
};

async function addSelectedSeats(req, res) {
  await Session.findByIdAndUpdate(req.params.id,{$push :{selectedSeats: {
        row: req.body.row,
        seat: req.body.seat,
        price: req.body.price
      }}})
    .then(selectedSeats => res.send(selectedSeats))
    .catch(error => {
      res.status(500).send({
        message: error.message
      });
      res.send(error);
    });
};

module.exports = {
  listSessions,
  addSession,
  addSelectedSeats,
  listSessionsByMovie
}
