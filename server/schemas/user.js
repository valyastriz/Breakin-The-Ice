const { gql } = require('apollo-server-express');

const userSchema = gql`
  # Define the User type that will be returned in queries
  type User {
    _id: ID!
    username: String!
    email: String!
    savedFavorites: [Favorite]  # Reference to the Favorite type
    favoriteCount: Int  # Virtual field for the count of favorites
  }

  # Define the Favorite type for handling both database favorites and third-party content
  type Favorite {
    favoriteId: ID  # For database-stored favorites
    thirdPartyContent: String  # For third-party API content
  }

  # Define the Auth type for authentication responses
  type Auth {
    token: ID!
    user: User
  }

  # Extend the Query type for fetching users
  extend type Query {
    users: [User]!
    user(userId: ID!): User
    me: User  # Fetch the logged-in user's data
  }

  # Extend the Mutation type for adding users, login, and handling favorites
  extend type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addFavorite(favoriteId: ID, thirdPartyContent: String): User  # Adds a favorite
    removeFavorite(favoriteId: ID): User  # Removes a favorite by ID
  }
`;

module.exports = userSchema;