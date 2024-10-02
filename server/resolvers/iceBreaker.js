const { IceBreaker } = require('../models'); 

const resolvers = {
  Query: {
    IceBreakers: async () => {
      return IceBreaker.find();
    },
    IceBreaker: async (parent, { id }) => {
      return IceBreaker.findById(id);
    },
    getRandomIceBreakers: async (_, { limit }) => {
      const allQuestions = await IceBreaker.find({});
      return allQuestions.sort(() => 0.5 - Math.random()).slice(0, limit);
    }
  },
  
  Mutation: {
    addIceBreaker: async (parent, { question }) => {
      return IceBreaker.create({ question });
    },
    removeIceBreaker: async (parent, { id }) => {
      return IceBreaker.findByIdAndRemove(id);
    },
  },
};

module.exports = resolvers;