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
  query getRandomLaws($limit: Int!) {
    getRandomLaws(limit: $limit) {
      _id
      content
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
      favoriteId
      title
      description
      thirdPartyContent
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
    getJokes {
      id
      content
      __typename
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
            content
            __typename
        }
    }
`;

export const GET_RANDOM_ICEBREAKERS = gql`
  query getRandomIceBreakers($limit: Int!) {
    getRandomIceBreakers(limit: $limit) {
      _id
      content
      __typename
    }
  }
`;

export const GET_FACTS = gql`
  query GetFacts {
    getFacts {
      id
      content
      __typename
    }
  }
`;

export const GET_QUOTES = gql`
  query GetQuotes {
    getQuotes {
      _id
      content
      __typename
    }
  }
`;

export const GET_BINGO_PROMPTS = gql`
  query GetRandomBingos($limit: Int!) {
    getRandomBingos(limit: $limit) {
      content
    }
  }
`;