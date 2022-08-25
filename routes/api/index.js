const router = require('express').Router();
const driverRoutes = require('./travellerRoutes');

router.use('/drivers', driverRoutes);

module.exports = router;
