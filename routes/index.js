const router = require('express').Router();

router.use('/films',require('./films'));
router.use('/',require('./cards'));

module.exports = router;