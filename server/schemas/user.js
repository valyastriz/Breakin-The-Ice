const { gql } = require('apollo-server-express');

const userSchema = gql`
  type User {
    _id: ID!
    name: String!
    email: String!
    favorites: [String] 
  }

  extend type Query {
    users: [User]!
    user(userId: ID!): User
  }

  extend type Mutation {
    addUser(name: String!, email: String!): User
    removeUser(userId: ID!): User
  }
`;

module.exports = userSchema;