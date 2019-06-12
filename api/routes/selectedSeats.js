const router = require('express').Router();
const selectedSetController = require('../controllers/selectedSeats.js');
const passport = require('passport');


router.route("/")
  .put(selectedSetController.addSelectedSeat)
  .get(selectedSetController.listSelectedSeats)

router.route("/:userId/:sessionId/:cinemaId/:hallId/:movieId")
  .get(passport.authenticate('jwt', { session: false }), selectedSetController.listSelectedSeats)

module.exports = router; 
