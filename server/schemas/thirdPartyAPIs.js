const { gql } = require('apollo-server-express');

const thirdPartyAPISchema = gql`
  type Joke {
    id: ID!
    content: String! 
  }

  type Quote {
    _id: ID!
    content: String!
  }

  type Fact {
    id: ID!
    content: String!
  }

  type Query {
    getJokes: [Joke]!
    getQuotes: [Quote]!
    getFacts: [Fact]!
  }
`;

module.exports = thirdPartyAPISchema;