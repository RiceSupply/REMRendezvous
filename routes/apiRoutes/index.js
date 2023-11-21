const router = require('express').Router();

const homeRoutes = require('./homeRoutes');
const sleepCycleRoutes = require('./sleepCycleRoutes');
const userRoutes = require('./userRoutes');

router.use('/home', homeRoutes);
router.use('/sleepCycle', sleepCycleRoutes);
router.use('/user', userRoutes);

module.exports = router;
