const router = require('express').Router();

router.use('/movies',require('./movies'));
router.use('/',require('./cards'));
router.use('/cinemas', require('./cinemas'));
router.use('/sessions', require('./sessions'));
router.use('/users', require('./users'));

module.exports = router;