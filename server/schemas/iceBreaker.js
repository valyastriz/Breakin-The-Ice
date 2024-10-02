const { gql } = require('apollo-server-express');

const IceBreakerSchema = gql`
  type IceBreaker {
    _id: ID!
    content: String!
  }

  extend type Query {
    IceBreakers: [IceBreaker]!
    IceBreaker(id: ID!): IceBreaker
    getRandomIceBreakers(limit: Int!): [IceBreaker]
  }

  extend type Mutation {
    addIceBreaker(content: String!): IceBreaker
    removeIceBreaker(id: ID!): IceBreaker
  }
`;

module.exports = IceBreakerSchema;