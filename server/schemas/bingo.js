const { gql } = require('apollo-server-express');

const BingoSchema = gql`
  type Bingo {
    _id: ID!
    content: String!
  }

  extend type Query {
    Bingos: [Bingo]!
    Bingo(id: ID!): Bingo
    getRandomBingos(limit: Int!): [Bingo]
  }

  extend type Mutation {
    addBingo(content: String!): Bingo
    removeBingo(id: ID!): Bingo
  }
`;

module.exports = BingoSchema;