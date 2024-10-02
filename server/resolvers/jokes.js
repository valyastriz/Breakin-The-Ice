const axios = require('axios');

const resolvers = {
  Query: {
    async getJokes() {
      const jokesResponse = await axios.get('https://official-joke-api.appspot.com/jokes/random/10');
      // Map the jokes to combine setup and punchline into a single 'content' field
      return jokesResponse.data.map(joke => ({
        id: joke.id,
        content: `${joke.setup} ${joke.punchline}`, // Combine setup and punchline into 'content'
        __typename: 'Joke'
      }));
    }
  }
};

module.exports = resolvers;