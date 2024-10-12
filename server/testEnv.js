require('dotenv').config();
console.log('Stripe Key:', process.env.STRIPE_SECRET_KEY);
console.log('Environment:', process.env.NODE_ENV);