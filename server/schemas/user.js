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
    favoriteId: ID
    thirdPartyContent: String
    title: String   # Store the title for both database and third-party content
    description: String  # Store the description for both database and third-party content
  }

  # Define the Auth type for authentication responses
  type Auth {
    token: ID!
    user: User
  }

  extend type Query {
    users: [User]!
    user(userId: ID!): User
    me: User  # Fetch the logged-in user's data
    favorites(userId: ID!): [Favorite]  # Fetch the user's favorites
  }
  
  extend type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addFavorite(favoriteId: ID, thirdPartyContent: String, title: String, description: String): User
    removeFavorite(favoriteId: ID): User
  }
`;

module.exports = userSchema;