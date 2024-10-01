const { WouldYouRather } = require('../models'); 

const resolvers = {
  Query: {
    wouldYouRathers: async () => {
      return WouldYouRather.find();
    },
    wouldYouRather: async (parent, { id }) => {
      return WouldYouRather.findById(id);
    },
  },

  Mutation: {
    addWouldYouRather: async (parent, { question }) => {
      return WouldYouRather.create({ question });
    },
    removeWouldYouRather: async (parent, { id }) => {
      return WouldYouRather.findByIdAndRemove(id);
    },
  },
};

module.exports = resolvers;