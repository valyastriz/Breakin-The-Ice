const db = require('../config/connection');
const { WouldYouRather, IceBreaker, User, Law, Bingo } = require('../models');
const wouldYouRatherSeeds = require('./wouldYouRatherSeeds.json');
const iceBreakerSeeds = require('./iceBreakerSeeds.json');
const bingoSeeds = require('./bingoSeeds.json');
const userSeeds = require('./userSeeds.json');
const lawSeeds = require('./lawSeeds.json');

const seedData = async (Model, seeds) => {
  for (const seed of seeds) {
    const exists = await Model.findOne({ where: { content: seed.content } });
    if (!exists) {
      await Model.create(seed);
    }
  }
};

db.once('open', async () => {
  try {
    // Clean and seed WouldYouRather
    await cleanDB('WouldYouRather', 'wouldYouRather');
    await seedData(WouldYouRather, wouldYouRatherSeeds);

    // Clean and seed Bingo
    await cleanDB('Bingo', 'bingo');
    await seedData(Bingo, bingoSeeds);

    // Clean and seed IceBreaker
    await cleanDB('IceBreaker', 'iceBreaker');
    await seedData(IceBreaker, iceBreakerSeeds);

    // Clean and seed Users
    await cleanDB('User', 'user');
    await seedData(User, userSeeds);

    // Clean and seed Laws
    await cleanDB('Law', 'lawSeeds');
    await seedData(Law, lawSeeds);

    console.log('All done!');
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    process.exit(0);
  }
});