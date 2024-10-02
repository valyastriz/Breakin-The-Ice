const { WouldYouRather } = require('../models'); 

const resolvers = {
  Query: {
    wouldYouRathers: async () => {
      return WouldYouRather.find();
    },
    wouldYouRather: async (parent, { id }) => {
      return WouldYouRather.findById(id);
    },
    getRandomWouldYouRathers: async (_, { limit }) => {
      const allQuestions = await WouldYouRather.find({});
      return allQuestions.sort(() => 0.5 - Math.random()).slice(0, limit);
    }
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