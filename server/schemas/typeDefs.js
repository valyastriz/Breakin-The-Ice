const typeDefs = `
  type User {
    _id: ID
    name: String
    favorites: [String]!
  }

  type Query {
    users: [User]!
    user(userId: ID!): User
  }

  type Mutation {
    addUser(name: String!): User
    addFavorite(userId: ID!, favorite: String!): User
    removeFavorite(userId: ID!, favorite: String!): User
  }
`;

module.exports = typeDefs;
