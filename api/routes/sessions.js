const router = require('express').Router();
const sessionController = require('../controllers/sessions.js');
const passport = require('passport');


router.route("/")
  .get(sessionController.listSessions)
  .post(sessionController.addSession)

router.route("/:id")
  .put(passport.authenticate('jwt', { session: false }), sessionController.addSelectedSeats)

router.route("/:movieId")
  .get(sessionController.listSessionsByMovie)

module.exports = router;  
