const router = require('express').Router();
const selectedSetController = require('../controllers/selectedSeats.js');
const passport = require('passport');


router.route("/")
  .put(selectedSetController.addSelectedSeat)
  .get(selectedSetController.listSelectedSeats)

router.route("/:sessionId/:cinemaId/:hallId/:movieId")
  .get(passport.authenticate('jwt', { session: false }), selectedSetController.listSelectedSeats)

router.route("/:userId/:sessionId/:cinemaId/:hallId/:movieId")
  .get(passport.authenticate('jwt', { session: false }), selectedSetController.listSelectedSeatsByUser)

router.route("/addService")
  .put(passport.authenticate('jwt', { session: false }), selectedSetController.addAdditionalService)

router.route("/deleteServices/:userId/:sessionId/:cinemaId/:hallId/:movieId")
  .delete(passport.authenticate('jwt', { session: false }), selectedSetController.deleteAllAdditionalServices)

module.exports = router; 
