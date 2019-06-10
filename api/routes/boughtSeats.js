const router = require('express').Router();
const boughtSeatController = require('../controllers/boughtSeats.js');


router.route("/")
  .post(boughtSeatController.addBoughtSeat)

module.exports = router;
