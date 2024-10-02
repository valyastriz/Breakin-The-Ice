const axios = require('axios');

const resolvers = {
  Query: {
    async getFacts() {  // Changed to getFacts
      const factsResponse = await axios.get('https://uselessfacts.jsph.pl/random.json?language=en');
      return [factsResponse.data];  // Wrap in an array if needed for consistency
    }
  }
};

module.exports = resolvers;