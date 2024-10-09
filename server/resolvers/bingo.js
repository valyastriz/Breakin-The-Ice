const { Bingo } = require('../models'); 

const resolvers = {
  Query: {
    Bingos: async () => {
      return Bingo.find();
    },
    Bingo: async (parent, { id }) => {
      return Bingo.findById(id);
    },
    getRandomBingos: async (_, { limit }) => {
      const allItems = await Bingo.find({});
      if (!allItems.length) {
        throw new Error('No Bingo items found');
      }
      return allItems.sort(() => 0.5 - Math.random()).slice(0, limit); // Return random bingo prompts
    },
  },
  
  Mutation: {
    addBingo: async (parent, { content }) => {
      return Bingo.create({ content });
    },
    removeBingo: async (parent, { id }) => {
      return Bingo.findByIdAndRemove(id);
    },
  },
};

module.exports = resolvers;