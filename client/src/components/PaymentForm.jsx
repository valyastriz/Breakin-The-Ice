import React from 'react';
import { Button, Box } from '@mui/material';

const PaymentForm = ({ onPaymentSuccess, coffeePrice }) => {
    const apiUrl = process.env.REACT_APP_API_URL; // Get the URL from the .env file

    return (
        <form action={`${apiUrl}/create-checkout-session`} method="POST">
            <Box mt={2}>
                <Button 
                    type="submit" 
                    variant="contained" 
                    color="primary" 
                    // disabled={!stripe || coffeePrice <= 0}
                >
                    Checkout
                </Button>
            </Box>
        </form>
    );
};

export default PaymentForm;