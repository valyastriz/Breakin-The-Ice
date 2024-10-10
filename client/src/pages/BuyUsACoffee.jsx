// import { useQuery } from '@apollo/client';
import React, { useState } from 'react'
import { Box, Typography } from '@mui/material'
//import { Elements } from '@stripe/react-stripe-js';
//import { loadStripe } from '@stripe/stripe-js';
import PaymentForm from '../components/PaymentForm';
import CoffeeSelection from '../components/CoffeeSelection';
import { useTheme } from '@mui/material/styles';
// import { QUERY_PROFILES } from '../utils/queries';

const coffeeOptions = [
  { id: 'drip', name: 'Drip Coffee', price: 500 },

];

//const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_SECRET_KEY);
//console.log('Stripe Secret Key:', process.env.REACT_APP_STRIPE_SECRET_KEY);


const BuyUsACoffee = () => {
  const theme = useTheme(); // Access the theme
  console.log(theme);
  const [selectedCoffee, setSelectedCoffee] = useState(null);
  const [coffeePrice, setCoffeePrice] = useState(0);

  const handlePaymentSuccess = (PaymentMethod) => {
    console.log('Payment successful:', PaymentMethod);
    alert('Thank you for buying us coffee!');
  };

  const handleCoffeeSelect = (coffeeId) => {
    console.log('Selected Coffee ID:', coffeeId);
    const coffee = coffeeOptions.find(coffee => coffee.id===coffeeId);
    if (coffee) {
      setCoffeePrice(coffee.price);
      console.log('Coffee Price Set To:', coffee.price);
    }
    setSelectedCoffee(coffeeId);
  };
//   const { loading, data } = useQuery(QUERY_PROFILES);
//   const profiles = data?.profiles || [];

  return (
   // <Elements stripe={stripePromise}>
      <Box sx={{display:'flex', flexGrow: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '80vh', padding: '15px', width: '100%', backgroundColor: theme.background.default}}>
          <Typography variant='h3' sx={{ textAlign: 'center', width: '80%', color: theme.text.primary }}>Buy Us A Coffee!</Typography>
          <CoffeeSelection selectedCoffee={selectedCoffee} setSelectedCoffee={handleCoffeeSelect}/>
          <PaymentForm onPaymentSuccess={handlePaymentSuccess} coffeePrice={coffeePrice} />
      </Box>
    //</Elements>
  );
};

export default BuyUsACoffee;
