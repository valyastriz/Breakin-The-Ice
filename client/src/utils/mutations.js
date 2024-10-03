import { gql } from '@apollo/client';

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
        email
      }
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

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;