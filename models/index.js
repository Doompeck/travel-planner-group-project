const Location = require('./Location');
const Trips = require('./Trips');
const Traveller = require('./Traveller');

Location.belongsToMany(Traveller, {
   through: {
     model:'trips',
     unique: false 
  },
  
  as: 'location_travellers'
});

Traveller.belongsToMany(Location, {
  through: {
    model:'trips',
    unique: false
 },

 as: 'planned_trips'
});

module.exports = { Location, Trips, Traveller };
