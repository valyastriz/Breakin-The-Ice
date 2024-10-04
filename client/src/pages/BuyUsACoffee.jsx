// import { useQuery } from '@apollo/client';
import React, { useState } from 'react'
import { Box,Typography, Input } from '@mui/material'
import PaymentForm from '../components/PaymentForm';
import CoffeeSelection from '../components/CoffeeSelection';
// import { QUERY_PROFILES } from '../utils/queries';

const BuyUsACoffee = () => {
  const [selectedCoffee, setSelectedCoffee] = useState(null);
  const [coffeePrice, setCoffeePrice] = useState(0);

  const handlePaymentSuccess = (PaymentMethod) => {
    console.log('Payment successful:', PaymentMethod);
    alert('Thank you for buying us coffee!');
  };

  const handleCoffeeSelect = (coffeeId) => {
    const coffee = coffeeOptions.find(coffee => coffee.id===coffeeId);
    if (coffee) {
      setCoffeePrice(coffee.price);
    }
    setSelectedCoffee(coffeeId);
  };
//   const { loading, data } = useQuery(QUERY_PROFILES);
//   const profiles = data?.profiles || [];

  return (
    <Box sx={{display:'flex', flexGrow: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minheight: '100%',
    height: '100vh', width: '100%'}}>
        <Typography variant='h3' sx={{ textAlign: 'center', width: '80%' }}>Buy Us A Coffee!</Typography>
        <CoffeeSelection selectedCoffee={selectedCoffee} setSelectedCoffee={handleCoffeeSelect}/>
        <PaymentForm onPaymentSucces={handlePaymentSuccess} coffeePrice={coffeePrice} />
    </Box>
  );
};

export default BuyUsACoffee;
