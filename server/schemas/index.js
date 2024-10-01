const lawSchema = require('./law');
const wouldYouRatherSchema = require('./wouldYouRather');
const userSchema = require('./user'); 
const favoritesSchema = require('./favorites'); 
const { gql } = require('apollo-server-express');

const rootSchema = gql`
  type Query {
    _: Boolean
  }

  type Mutation {
    _: Boolean
  }
`;

module.exports = [rootSchema, favoritesSchema, lawSchema, wouldYouRatherSchema, userSchema];