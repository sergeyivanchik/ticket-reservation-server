const router = require('express').Router();
const movieController = require('../controllers/movies.js');


router.route("/")
  .get(movieController.listMovies)
  .post(movieController.addMovie)

router.route("/:id")
  .get(movieController.searchMovie)
  .delete(movieController.deleteMovie)
  .put(movieController.updateMovie)

module.exports = router;
