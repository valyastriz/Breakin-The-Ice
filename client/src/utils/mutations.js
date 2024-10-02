import { gql } from '@apollo/client';

export const ADD_USER = gql`
  mutation AddUser($name: String!) {
    addUser(name: $name) {
      _id
      name
      favorites
    }
  }
`;

export const ADD_FAVORITE = gql`
  mutation AddFavorite($userId: ID!, $favorite: String!) {
    addFavorite(userId: $userId, favorite: $favorite) {
      _id
      name
      favorites
    }
  }
`;

export const REMOVE_FAVORITE = gql`
  mutation RemoveFavorite($userId: ID!, $favorite: String!) {
    removeFavorite(userId: $userId, favorite: $favorite) {
      _id
      name
      favorites
    }
  }
`;