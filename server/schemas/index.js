const lawSchema = require('./law');
const wouldYouRatherSchema = require('./wouldYouRather');
const iceBreakerSchema = require('./iceBreaker');
const userSchema = require('./user'); 
const favoritesSchema = require('./favorites'); 
const { gql } = require('apollo-server-express');
const thirdPartyAPISchema = require('./thirdPartyAPIs'); 

const rootSchema = gql`
  type Query {
    _: Boolean
  }

  type Mutation {
    _: Boolean
  }
`;

module.exports = [rootSchema, iceBreakerSchema, favoritesSchema, lawSchema, wouldYouRatherSchema, userSchema, thirdPartyAPISchema];