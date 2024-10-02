const { gql } = require('apollo-server-express');

const wouldYouRatherSchema = gql`
  type WouldYouRather {
    _id: ID!
    content: String!
  }

  extend type Query {
    wouldYouRathers: [WouldYouRather]!
    wouldYouRather(id: ID!): WouldYouRather
    getRandomWouldYouRathers(limit: Int!): [WouldYouRather]
  }

  extend type Mutation {
    addWouldYouRather(content: String!): WouldYouRather
    removeWouldYouRather(id: ID!): WouldYouRather
  }
`;

module.exports = wouldYouRatherSchema;