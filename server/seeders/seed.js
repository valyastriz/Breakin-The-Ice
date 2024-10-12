const db = require('../config/connection');
const { WouldYouRather, IceBreaker, User, Law, Bingo } = require('../models'); 
const wouldYouRatherSeeds = require('./wouldYouRatherSeeds.json');
const iceBreakerSeeds = require('./iceBreakerSeeds.json');
const bingoSeeds = require('./bingoSeeds.json');
const userSeeds = require('./userSeeds.json');
const lawSeeds = require('./lawSeeds.json');

async function seedData(model, seeds, uniqueField) {
  for (let seed of seeds) {
    // Check if the entry already exists by looking for the unique field
    const existingEntry = await model.findOne({ [uniqueField]: seed[uniqueField] });

    if (!existingEntry) {
      // If no existing entry, create a new document
      await model.create(seed);
      console.log(`Added new entry: ${seed[uniqueField]}`);
    } else {
      console.log(`Skipping duplicate entry: ${seed[uniqueField]}`);
    }
  }
}

db.once('open', async () => {
  try {
    // Seed 'Would You Rather' data
    await seedData(WouldYouRather, wouldYouRatherSeeds, 'content');

    // Seed 'Bingo' data
    await seedData(Bingo, bingoSeeds, 'content');

    // Seed 'IceBreaker' data
    await seedData(IceBreaker, iceBreakerSeeds, 'content');

    // Seed 'User' data, checking by 'email' to avoid duplicates
    await seedData(User, userSeeds, 'email');

    // Seed 'Law' data
    await seedData(Law, lawSeeds, 'content');

    console.log('All done!');
  } catch (error) {
    console.error('Error seeding database:', error); 
  } finally {
    process.exit(0); 
  }
});