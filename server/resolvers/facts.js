const axios = require('axios');

const resolvers = {
  Query: {
    async getFacts() {
      const factsResponse = await axios.get('https://uselessfacts.jsph.pl/random.json?language=en');
      
      // Return a single fact with the 'content' field
      return [{
        id: factsResponse.data.id,       // Keep the ID from the response
        content: factsResponse.data.text, // Map 'text' to 'content'
        __typename: 'Useless Facts'               // Add __typename for Apollo cache management
      }];
    }
  }
};

module.exports = resolvers;