const router = require('express').Router();
const boughtSeatController = require('../controllers/boughtSeats.js');
const passport = require('passport');


router.route("/")
  .put(passport.authenticate('jwt', { session: false }), boughtSeatController.addBoughtSeat)

router.route("/:sessionId/:cinemaId/:hallId/:movieId")
  .get(passport.authenticate('jwt', { session: false }), boughtSeatController.listSessionBoughtSeats)

router.route("/:userId")
  .get(passport.authenticate('jwt', { session: false }), boughtSeatController.listBoughtSeatsByUser)

module.exports = router;
