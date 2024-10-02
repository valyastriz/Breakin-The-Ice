const { gql } = require('apollo-server-express');

const wouldYouRatherSchema = gql`
  type WouldYouRather {
    _id: ID!
    question: String!
  }

  extend type Query {
    wouldYouRathers: [WouldYouRather]!
    wouldYouRather(id: ID!): WouldYouRather
    getRandomWouldYouRathers(limit: Int!): [WouldYouRather]
  }

  extend type Mutation {
    addWouldYouRather(question: String!): WouldYouRather
    removeWouldYouRather(id: ID!): WouldYouRather
  }
`;

module.exports = wouldYouRatherSchema;