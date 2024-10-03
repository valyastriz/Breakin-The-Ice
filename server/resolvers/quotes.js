const axios = require('axios');
const { v4: uuidv4 } = require('uuid');  // Generate unique IDs
require('dotenv').config();  // Load environment variables

const resolvers = {
  Query: {
    async getQuotes() {
      console.log("API Key:", process.env.RANDOM_QUOTES_API_KEY);  // This should log in the server terminal

      try {
        const quotesResponse = await axios.get('https://api.api-ninjas.com/v1/quotes', {
          headers: { 'X-Api-Key': process.env.RANDOM_QUOTES_API_KEY },  // Use the API key from .env
        });

        console.log("API Response:", quotesResponse.data);  // Log the entire response

        // Extract the first quote from the array
        const quote = quotesResponse.data[0];  

        console.log("Extracted Quote:", quote);  // Log the extracted quote

        return [{
          _id: uuidv4(),  // Generate a unique ID for the quote
          content: `${quote.quote} - ${quote.author}`,  // Combine quote and author into content
          __typename: 'Quote'  // Match with your schema's type
        }];
      } catch (error) {
        console.error("Error fetching quote:", error.message);
        throw new Error('Failed to fetch random quote.');
      }
    }
  }
};

module.exports = resolvers;