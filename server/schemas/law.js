const { gql } = require('apollo-server-express');

const lawSchema = gql`
  type Law {
    _id: ID!
    description: String!
    location: String!
  }

  extend type Query {
    laws: [Law]!
    law(lawId: ID!): Law
  }

  extend type Mutation {
    addLaw(description: String!, location: String!): Law
    removeLaw(lawId: ID!): Law
  }
`;

module.exports = lawSchema;