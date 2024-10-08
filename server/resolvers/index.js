const lawResolvers = require('./law');
const wouldYouRatherResolvers = require('./wouldYouRather');
const iceBreakerResolvers = require('./iceBreaker');
const bingoResolvers = require('./bingo');
const userResolvers = require('./user');
const jokesResolvers = require('./jokes');
const factsResolvers = require('./facts');
const quotesResolvers = require('./quotes');

const resolvers = {
  Query: {
    ...lawResolvers.Query,
    ...wouldYouRatherResolvers.Query,
    ...iceBreakerResolvers.Query,
    ...bingoResolvers.Query,
    ...userResolvers.Query,
    ...jokesResolvers.Query,
    ...factsResolvers.Query,
    ...quotesResolvers.Query,
  },
  Mutation: {
    ...lawResolvers.Mutation,
    ...wouldYouRatherResolvers.Mutation,
    ...userResolvers.Mutation,
  }
};

module.exports = resolvers;