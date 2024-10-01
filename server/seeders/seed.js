const db = require('../config/connection');
const { WouldYouRather } = require('../models'); 
const wouldYouRatherSeeds = require('./wouldYouRatherSeeds.json');
const cleanDB = require('./cleanDB');

db.once('open', async () => {
  try {

    await cleanDB('WouldYouRather', 'wouldYouRather');


    await WouldYouRather.create(wouldYouRatherSeeds); 

    console.log('All done!');
  } catch (error) {
    console.error('Error seeding database:', error); 
  } finally {
    process.exit(0); 
  }
});