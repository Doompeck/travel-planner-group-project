const router = require('express').Router();
const { Location, Traveller, Trips } = require('../../models');

// GET all drivers
router.get('/', async (req, res) => {
  try {
    const locationData = await location.findAll({
    });
    res.status(200).json(locationData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET a single driver
router.get('/:id', async (req, res) => {
  try {
    const locationData = await location.findByPk(req.params.id, {
    });

    if (!locationData) {
      res.status(404).json({ message: 'No driver found with that id!' });
      return;
    }

    res.status(200).json(locationData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
