const { gql } = require('apollo-server-express');

const favoritesSchema = gql`
  type Favorite {
    _id: ID!
    userId: ID!
    lawId: ID!
  }

  extend type Query {
    favorites: [Favorite]!
  }

  extend type Mutation {
    addFavorite(userId: ID!, lawId: ID!): Favorite
    removeFavorite(favoriteId: ID!): Favorite
  }
`;

module.exports = favoritesSchema;