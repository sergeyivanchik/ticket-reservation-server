const router = require('express').Router();
const sessionController = require('../controllers/sessions.js');
const passport = require('passport');


router.route("/")
  .get(sessionController.listSessions)
  .post(passport.authenticate('jwt', { session: false }),sessionController.addSession)

router.route("/:id")
  .put(passport.authenticate('jwt', { session: false }), sessionController.addSelectedSeats)

module.exports = router;  
