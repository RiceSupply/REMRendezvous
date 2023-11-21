const router = require('express').Router();
const homeRoutes = require('./homeRoutes');
const sleepCycleRoutes = require('./sleepCycleRoutes');
const userRoutes = require('./userRoutes');

router.use('/homeRoutes', homeRoutes);
router.use('/sleepCycleRoutes', sleepCycleRoutes);
router.use('/userRoutes', userRoutes);


module.exports = router;