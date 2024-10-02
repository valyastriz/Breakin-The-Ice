const { gql } = require('apollo-server-express');

const thirdPartyAPISchema = gql`
  type Joke {
    id: ID!
    type: String!
    setup: String!
    punchline: String!
  }

  type Quote {
    _id: ID!
    content: String!
    author: String!
  }

  type Fact {
    id: ID!
    text: String!
  }

  type Query {
    getJokes: [Joke]!
    getQuotes: [Quote]!
    getFacts: [Fact]!
  }
`;

module.exports = thirdPartyAPISchema;