import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const coffeeOptions = [
    { id: 'coffee', name: 'Add Coffee to Cart', price: 500 },
];

const CoffeeSelection = ({ selectedCoffee, setSelectedCoffee }) => {
    const theme = useTheme(); // Access the theme
    return (
        <Box display="flex" flexDirection="column" alignItems="center"> {/* Centering the buttons */}
            <Typography variant="h6" sx={{ marginBottom: 2, color: theme.text.primary}}>
                (Feel free to change the amount at checkout)
            </Typography>
            {coffeeOptions.map(coffee => (
                <Button
                    key={coffee.id}
                    variant={selectedCoffee === coffee.id ? 'contained' : 'outlined'}
                    onClick={() => setSelectedCoffee(coffee.id)}
                    sx={{ margin: 1 }} // Centered without width 100%
                >
                    {coffee.name} - ${coffee.price / 100}
                </Button>
            ))}
        </Box>
    );
};

export default CoffeeSelection;