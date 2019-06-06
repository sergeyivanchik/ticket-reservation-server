const router = require('express').Router();

router.use('/movies',require('./movies'));
router.use('/cinemas', require('./cinemas'));
router.use('/sessions', require('./sessions'));
router.use('/', require('./users'));

module.exports = router;
