const { gql } = require('apollo-server-express');

const userSchema = gql`
  type User {
    _id: ID!
    name: String!
    email: String!
    favorites: [String] 
  }
  type Auth {
    token: ID!
    user: User
  }

  extend type Query {
    users: [User]!
    user(userId: ID!): User
  }

  extend type Mutation {
    addUser(name: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
  

    addFavorite(userId: ID!, favorites: String!): User
    removeFavorite(favorites: String!): User
  }
`;

module.exports = userSchema;