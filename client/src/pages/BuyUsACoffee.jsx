// import { useQuery } from '@apollo/client';
import React, { useState } from 'react'
import { Box, Typography } from '@mui/material'
//import { Elements } from '@stripe/react-stripe-js';
//import { loadStripe } from '@stripe/stripe-js';
import PaymentForm from '../components/PaymentForm';
import CoffeeSelection from '../components/CoffeeSelection';
// import { QUERY_PROFILES } from '../utils/queries';

const coffeeOptions = [
  { id: 'drip', name: 'Drip Coffee', price: 195 },
  { id: 'cold', name: 'Cold Brew', price: 295 },
  { id: 'latte', name: 'Latte', price: 295 },
  { id: 'expresso', name: "Espresso", price: 300 },
  { id: 'cappuccino', name: 'Cappuccino', price: 350 },
];

//const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_SECRET_KEY);
//console.log('Stripe Secret Key:', process.env.REACT_APP_STRIPE_SECRET_KEY);


const BuyUsACoffee = () => {
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
      <Box sx={{display:'flex', flexGrow: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minheight: '100%',
        height: '100vh', width: '100%'}}>
          <Typography variant='h3' sx={{ textAlign: 'center', width: '80%' }}>Buy Us A Coffee!</Typography>
          <CoffeeSelection selectedCoffee={selectedCoffee} setSelectedCoffee={handleCoffeeSelect}/>
          <PaymentForm onPaymentSuccess={handlePaymentSuccess} coffeePrice={coffeePrice} />
      </Box>
    //</Elements>
  );
};

export default BuyUsACoffee;
