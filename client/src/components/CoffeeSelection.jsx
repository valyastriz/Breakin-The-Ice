import React from 'react';
import { Box, Button, Typography } from '@mui/material';

const coffeeOptions = [
    { id: 'drip', name: 'Drip Coffee', price: 195 },
    { id: 'cold', name: 'Cold Brew', price: 295 },
    { id: 'latte', name: 'Latte', price: 295 },
    { id: 'expresso', name: "Espresso", price: 300 },
    { id: 'cappuccino', name: 'Cappuccino', price: 350 },
];

const CoffeeSelection = ({ selectedCoffee, setSelectedCoffee }) => {
    return (
        <Box>
            <Typography variant="h5" sx={{ marginBottom: 2}}>Select Your Coffee:</Typography>
            {coffeeOptions.map(coffee => {
                <Button
                key={coffee.id}
                variant={selectedCoffee === coffee.id ? 'contained' : 'outlined'}
                onClick={() => selectedCoffee(coffee.id)}
                sx={{ margin: 1 }}
            >
                {coffee.name} - ${coffee.price / 100}
            </Button>
            })}
        </Box>
    );
};

export default CoffeeSelection;
