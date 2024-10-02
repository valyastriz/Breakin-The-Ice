const axios = require('axios');

const resolvers = {
  Query: {
    async getJokes() {
      const jokesResponse = await axios.get('https://official-joke-api.appspot.com/jokes/random/10');
      return jokesResponse.data;  // Return the array of jokes directly
    }
  }
};

module.exports = resolvers;