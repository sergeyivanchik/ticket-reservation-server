const router = require('express').Router();

router.use('/movies',require('./movies'));
router.use('/cinemas', require('./cinemas'));
router.use('/sessions', require('./sessions'));
router.use('/users', require('./users'));
router.use('/halls', require('./halls'));
router.use('/boughtSeats', require('./boughtSeats'));
router.use('/selectedSeats', require('./selectedSeats'));
router.use('/payment', require('./payment'));

module.exports = router;
