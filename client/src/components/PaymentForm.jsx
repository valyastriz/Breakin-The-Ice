import React from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { Button, Box } from '@mui/material';

const PaymentForm = ({ onPaymentSucces, coffeePrice }) => {
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const cardElement = elements.getElement(CardElement);

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement,
        });

        if (error) {
            console.error(error);
            alert(error.message);
        } else {
            console.log('Payment Method:', paymentMethod);
            onPaymentSucces(paymentMethod);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <CardElement />
            <Box mt={2}>
                <Button 
                    type="submit" 
                    variant="contained" 
                    color="primary" 
                    disabled={!stripe || coffeePrice <= 0}
                >
                    Buy Coffee for ${coffeePrice / 100}
                </Button>
            </Box>
        </form>
    );
};

export default PaymentForm;
