const lawResolvers = require('./law');
const favoritesResolvers = require('./favorites');
const wouldYouRatherResolvers = require('./wouldYouRather');
const userResolvers = require('./user');

const resolvers = {
  Query: {
    ...favoritesResolvers.Query,
    ...lawResolvers.Query,
    ...wouldYouRatherResolvers.Query,
    ...userResolvers.Query,
    ...lawResolvers.Query,
    ...wouldYouRatherResolvers.Query,
  },
  Mutation: {
    ...favoritesResolvers.Mutation,
    ...lawResolvers.Mutation,
    ...wouldYouRatherResolvers.Mutation,
    ...userResolvers.Mutation,
    ...lawResolvers.Mutation,
    ...wouldYouRatherResolvers.Mutation,
  }
};

module.exports = resolvers;