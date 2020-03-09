const router = require('express').Router();
const hallController = require('../controllers/halls.js');
const passport = require('passport');


router.route("/")
  .post(hallController.addHall)

router.route("/:id/:cinemaId")  
  .get(passport.authenticate('jwt', { session: false }), hallController.hallByCinema)

module.exports = router;
