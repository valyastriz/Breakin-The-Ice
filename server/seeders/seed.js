const db = require('../config/connection');
const { WouldYouRather, IceBreaker } = require('../models'); 
const wouldYouRatherSeeds = require('./wouldYouRatherSeeds.json');
const iceBreakerSeeds = require('./iceBreakerSeeds.json');
const cleanDB = require('./cleanDB');

db.once('open', async () => {
  try {

    await cleanDB('WouldYouRather', 'wouldYouRather');


    await WouldYouRather.create(wouldYouRatherSeeds); 



    await cleanDB('IceBreaker', 'iceBreaker');

    await IceBreaker.create(iceBreakerSeeds);

    console.log('All done!');
  } catch (error) {
    console.error('Error seeding database:', error); 
  } finally {
    process.exit(0); 
  }
});