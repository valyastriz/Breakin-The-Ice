const express = require('express');
require('dotenv').config();
const { ApolloServer } = require('apollo-server-express');
const path = require('path');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const typeDefs = require('./schemas');
const resolvers = require('./resolvers');
const db = require('./config/connection');
const { authMiddleware } = require('./utils/auth');

const PORT = process.env.PORT || 3001;
const app = express();

// Apollo Server setup with GraphQL schema
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => authMiddleware({ req }),
  formatError: (error) => {
    console.log(error);
    return error;
  },
});

const startApolloServer = async () => {
  await server.start();

  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());

  // Stripe payment API routes
  app.post('/create-payment-intent', async (req, res) => {
    const { amount } = req.body;

    try {
      const paymentIntent = await stripe.paymentIntents.create({
        amount,
        currency: 'usd',
      });
      res.json({ clientSecret: paymentIntent.client_secret });
    } catch (error) {
      console.error(error);
      res.status(400).json({ error: error.message });
    }
  });

  app.get('/hello', (req, res) => {
    res.json('Hello world');
  });

  // Set YOUR_DOMAIN based on environment
  const YOUR_DOMAIN =
    process.env.NODE_ENV === 'production'
      ? process.env.REACT_APP_PRODUCTION_URL // Use the domain from .env for production
      : 'http://localhost:3001'; // For development

  // Stripe checkout session route
  app.post('/create-checkout-session', async (req, res) => {
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price: 'price_1Q7QnCJxeDwsAPSISGggPBvS',
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${YOUR_DOMAIN}/success`,
      cancel_url: `${YOUR_DOMAIN}/buyusacoffee`,
    });

    res.redirect(303, session.url);
  });

  // Apply Apollo middleware
  server.applyMiddleware({ app, path: '/graphql' });

  // Serve static files from the React app if in production
  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));

    // Serve the index.html file for all non-API requests
    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, '../client/build/index.html'));
    });
  }

  // Database connection and start the server
  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`🚀 API server running on port ${PORT}!`);
      console.log(`🚀 Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
    });
  });
};

// Start the Apollo server
startApolloServer();