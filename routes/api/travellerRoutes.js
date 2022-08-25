const router = require('express').Router();
const { Location, Traveller, Trips } = require('../../models');

// GET all drivers
router.get('/', async (req, res) => {
  try {
    const travellerData = await Traveller.findAll({
      include: [{ model: License }, { model: Car }],
    });
    res.status(200).json(driverData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET a single driver
router.get('/:id', async (req, res) => {
  try {
    const travellerData = await traveller.findByPk(req.params.id, {
      include: [{ model: License }, { model: Car }],
    });

    if (!travellerData) {
      res.status(404).json({ message: 'No driver found with that id!' });
      return;
    }

    res.status(200).json(travellerData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;