const lawSchema = require('./law');
const wouldYouRatherSchema = require('./wouldYouRather');
const iceBreakerSchema = require('./iceBreaker');
const bingoSchema = require('./bingo');
const userSchema = require('./user'); 
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

module.exports = [rootSchema, bingoSchema, iceBreakerSchema, lawSchema, wouldYouRatherSchema, userSchema, thirdPartyAPISchema];