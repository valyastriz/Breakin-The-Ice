const { Law } = require('../models'); // Ensure Law model is correctly defined

const resolvers = {
  Query: {
    laws: async () => {
      return Law.find();
    },
    law: async (parent, { lawId }) => {
      return Law.findById(lawId);
    },
    getRandomLaws: async (parent, { limit }) => {
      const allLaws = await Law.find({});
      return allLaws.sort(() => 0.5 - Math.random()).slice(0, limit); // Return random limited number of laws
    },
  },

  Mutation: {
    addLaw: async (parent, { description }) => {
      return Law.create({ content: description });
    },
    removeLaw: async (parent, { lawId }) => {
      return Law.findByIdAndRemove(lawId);
    },
  },
};

module.exports = resolvers;