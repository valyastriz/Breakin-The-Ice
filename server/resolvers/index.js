const lawResolvers = require('./law');
const favoritesResolvers = require('./favorites');
const wouldYouRatherResolvers = require('./wouldYouRather');
const userResolvers = require('./user');
const getRandomWouldYouRathers = require('./wouldYouRather');

const resolvers = {
  Query: {
    ...favoritesResolvers.Query,
    ...lawResolvers.Query,
    ...wouldYouRatherResolvers.Query,
    ...userResolvers.Query,
  },
  Mutation: {
    ...favoritesResolvers.Mutation,
    ...lawResolvers.Mutation,
    ...wouldYouRatherResolvers.Mutation,
    ...userResolvers.Mutation,
  }
};

module.exports = resolvers;