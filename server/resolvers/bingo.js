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
      return allItems.sort(() => 0.5 - Math.random()).slice(0, limit);
    }
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