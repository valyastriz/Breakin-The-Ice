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

// export const ADD_FAVORITE = gql`
//   mutation AddFavorite($userId: ID!, $favorite: String!) {
//     addFavorite(userId: $userId, favorite: $favorite) {
//       _id
//       name
//       favorites
//     }
//   }
// `;

export const ADD_FAVORITE = gql`
  mutation AddFavorite($favoriteId: ID, $thirdPartyContent: String, $title: String!, $description: String!) {
    addFavorite(favoriteId: $favoriteId, thirdPartyContent: $thirdPartyContent, title: $title, description: $description) {
      _id
      savedFavorites {
        favoriteId
        title
        description
      }
    }
  }
`;

export const REMOVE_FAVORITE = gql`
  mutation RemoveFavorite($favoriteId: ID!) {
    removeFavorite(favoriteId: $favoriteId) {
      _id
      savedFavorites {
        favoriteId
        title
        description
      }
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