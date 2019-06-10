const router = require('express').Router();
const hallController = require('../controllers/halls.js');


router.route("/")
  .post(hallController.addHall)

module.exports = router;