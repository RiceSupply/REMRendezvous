const router = require('express').Router();
const sleepCycleRoutes = require('./sleepCycleRoutes');
const userRoutes = require('./userRoutes');

// /api/homeRoutes
router.use('/sleepCycle', sleepCycleRoutes);
router.use('/user', userRoutes);

module.exports = router;