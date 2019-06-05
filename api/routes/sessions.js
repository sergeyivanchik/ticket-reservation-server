const router = require('express').Router();
const sessionController = require('../controllers/sessions.js');


router.route("/")
  .get(sessionController.listSessions)
  .post(sessionController.addSession)

router.route("/:id")
  .put(sessionController.addSelectedSeats)

module.exports = router;  
