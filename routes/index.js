const router = require('express').Router();

router.use('/films',require('./films'));
router.use('/',require('./cards'));
router.use('/cinemas', require('./cinemas'));
router.use('/seanses', require('./seanses'));

module.exports = router;