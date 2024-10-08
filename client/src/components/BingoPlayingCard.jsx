import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';

const BingoPlayingCard = ({ content, isSelected, onClick }) => {
  return (
    <Card
      onClick={onClick}
      sx={{
        minWidth: 150,
        minHeight: 150,
        backgroundColor: isSelected ? 'lightgreen' : 'white', // Toggle background color
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
        '&:hover': {
          backgroundColor: isSelected ? 'green' : 'lightgray',
        },
      }}
    >
      <CardContent>
        <Typography variant="h6" textAlign="center">
          {content}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default BingoPlayingCard;