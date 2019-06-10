const mongoose = require('mongoose');
Movie = mongoose.model('Movie');


async function listMovies(req, res) {
  await Movie.find()
    .then(movies => res.send(movies))
    .catch(error => {
      res.status(500).send({
        message: error.message
      });
    });
};

async function addMovie(req, res) {
  const newMovie = await new Movie(req.body);
  newMovie.save()
    .then(movie => res.send(movie))
    .catch(error => {
      res.status(500).send({
        message: error.message
      });
      res.send(error);
    });
};

async function searchMovie(req, res) {
  await Movie.findById(req.params.id)
    .then(movie => res.send(movie))
    .catch(error => {
      res.status(500).send({
        message: error.message
      });
      res.send(error);
    });
};

async function deleteMovie(req, res) {
  await Movie.findByIdAndDelete(req.params.id)
    .then(movie => res.send(movie))
    .catch(error => {
      res.status(500).send({
        message: error.message
      });
      res.send(error);
    });
};

async function updateMovie(req, res) {
  await Movie.findByIdAndUpdate(req.params.id, req.body, { upsert: true })
    .then(movie => res.send(movie))
    .catch(error => {
      res.status(500).send({
        message: error.message
      });
      res.send(error);
    });
};

module.exports = {
  listMovies,
  addMovie,
  searchMovie,
  deleteMovie,
  updateMovie
}
