const { Law } = require('../models'); // Ensure Law model is correctly defined

const resolvers = {
  Query: {
    laws: async () => {
      return Law.find();
    },
    law: async (parent, { lawId }) => {
      return Law.findById(lawId);
    },
  },

  Mutation: {
    addLaw: async (parent, { description, location }) => {
      return Law.create({ description, location });
    },
    removeLaw: async (parent, { lawId }) => {
      return Law.findByIdAndRemove(lawId);
    },
  },
};

module.exports = resolvers;