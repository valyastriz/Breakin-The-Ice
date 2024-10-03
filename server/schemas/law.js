const { gql } = require('apollo-server-express');

const lawSchema = gql`
  type Law {
    _id: ID!
    content: String!
  }

  extend type Query {
    laws: [Law]!
    law(lawId: ID!): Law
    getRandomLaws(limit: Int!): [Law]  
  }

  extend type Mutation {
    addLaw(description: String!): Law
    removeLaw(lawId: ID!): Law
  }
`;

module.exports = lawSchema;