import { gql } from '@apollo/client';

export const GET_USERS = gql`
  query GetUsers {
    users {
      _id
      name
      favorites
    }
  }
`;

export const GET_USER = gql`
  query GetUser($userId: ID!) {
    user(userId: $userId) {
      _id
      name
      favorites
    }
  }
`;

export const GET_LAWS = gql`
  query GetLaws {
    laws {
      _id
      description
      location
    }
  }
`;

export const GET_LAW = gql`
  query GetLaw($lawId: ID!) {
    law(lawId: $lawId) {
      _id
      description
      location
    }
  }
`;

export const GET_FAVORITES = gql`
  query GetFavorites($userId: ID!) {
    favorites(userId: $userId) {
      _id
      description
    }
  }
`;

export const GET_ICEBREAKER_QUESTIONS = gql`
  query GetIcebreakerQuestions {
    icebreakerQuestions {
      id
      title
      description
    }
  }
`;

export const GET_JOKES = gql`
  query GetJokes {
    jokes {
      id
      title
      description
    }
  }
`;

export const GET_WOULD_YOU_RATHERS = gql`
  query getWouldYouRathers {
    wouldYouRathers {
      _id
      question
    }
  }
`;

export const GET_WOULD_YOU_RATHER = gql`
  query getWouldYouRather($id: ID!) {
    wouldYouRather(id: $id) {
      _id
      question
    }
  }
`;

export const GET_RANDOM_WOULD_YOU_RATHERS = gql`
    query GetRandomWouldYouRathers($limit: Int!) {
        getRandomWouldYouRathers(limit: $limit) {
            _id
            question
            __typename
        }
    }
`;