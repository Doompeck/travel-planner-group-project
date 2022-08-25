const Location = require('./Location');
const Trips = require('./Trips');
const Traveller = require('./Traveler');

Location.belongsToMany(Traveller, {
   through: {
     model:'Trips',
     unique: false 
  }});

Traveller.belongsToMany(Location, { through: 'Trips' });

module.exports = { Location, Trips, Traveller };
