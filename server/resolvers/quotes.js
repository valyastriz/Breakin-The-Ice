const axios = require('axios');

const resolvers = {
  Query: {
    async getQuotes() {
      const quotesResponse = await axios.get('https://api.quotable.io/random');
      return [quotesResponse.data];  // Wrap the single quote in an array if necessary for consistency
    }
  }
};

module.exports = resolvers;