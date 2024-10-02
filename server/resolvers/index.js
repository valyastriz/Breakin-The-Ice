const lawResolvers = require('./law');
const favoritesResolvers = require('./favorites');
const wouldYouRatherResolvers = require('./wouldYouRather');
const userResolvers = require('./user');
const jokesResolvers = require('./jokes');
const factsResolvers = require('./facts');
const quotesResolvers = require('./quotes');

const resolvers = {
  Query: {
    ...favoritesResolvers.Query,
    ...lawResolvers.Query,
    ...wouldYouRatherResolvers.Query,
    ...userResolvers.Query,
    ...jokesResolvers.Query,
    ...factsResolvers.Query,
    ...quotesResolvers.Query,
  },
  Mutation: {
    ...favoritesResolvers.Mutation,
    ...lawResolvers.Mutation,
    ...wouldYouRatherResolvers.Mutation,
    ...userResolvers.Mutation,
  }
};

module.exports = resolvers;