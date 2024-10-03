const db = require('../config/connection');
const { WouldYouRather, IceBreaker, User, Law } = require('../models'); 
const wouldYouRatherSeeds = require('./wouldYouRatherSeeds.json');
const iceBreakerSeeds = require('./iceBreakerSeeds.json');
const cleanDB = require('./cleanDB');
const userSeeds = require('./userSeeds.json');
const lawSeeds = require('./lawSeeds.json');


db.once('open', async () => {
  try {

    await cleanDB('WouldYouRather', 'wouldYouRather');


    await WouldYouRather.create(wouldYouRatherSeeds); 



    await cleanDB('IceBreaker', 'iceBreaker');

    await IceBreaker.create(iceBreakerSeeds);

    await cleanDB('User', 'user');

    await User.create(userSeeds);

    await cleanDB('Law', 'lawSeeds');

    await Law.create(lawSeeds);

    console.log('All done!');
  } catch (error) {
    console.error('Error seeding database:', error); 
  } finally {
    process.exit(0); 
  }
});