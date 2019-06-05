const router = require('express').Router();
const cinemaController = require('../controllers/cinemas.js');


router.route("/")
  .get(cinemaController.listCinemas)
  .post(cinemaController.addCinema)

router.route("/:id")
  .get(cinemaController.searchCinema)

module.exports = router;
