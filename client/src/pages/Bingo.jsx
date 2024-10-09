import { Box, Typography, Button } from '@mui/material';
import { useState } from 'react';
import BingoPlayingCard from '../components/BingoPlayingCard';
import { useQuery } from '@apollo/client';
import { GET_BINGO_PROMPTS } from '../utils/queries';

const Bingo = () => {
  const [selectedCards, setSelectedCards] = useState([12]); // Pre-select the center square (index 12)
  const { data, loading, error, refetch } = useQuery(GET_BINGO_PROMPTS, {
    variables: { limit: 24 }, // Fetch 24 random Bingo prompts (excluding the center free space)
  });

  const prompts = data ? data.getRandomBingos : [];

  // Handle card selection/deselection
  const toggleCard = (index) => {
    if (index === 12) return; // Don't allow toggling the center free space
    setSelectedCards((prevSelected) =>
      prevSelected.includes(index)
        ? prevSelected.filter((card) => card !== index)
        : [...prevSelected, index]
    );
  };

  const handleNewBoard = () => {
    setSelectedCards([12]); // Reset the selection with center square pre-selected
    refetch(); // Fetch new prompts
  };

  if (loading) return <Typography>Loading...</Typography>;
  if (error) return <Typography>Error: {error.message}</Typography>;

  // Create an array of Bingo prompts with "Free Space" at index 12
  const bingoBoard = [
    ...prompts.slice(0, 12),        // First 12 prompts
    { content: "Free Space" },      // Free space at index 12
    ...prompts.slice(12),           // Remaining prompts after the free space
  ];

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh', // Ensure the full height is used
        padding: '20px 10px',  // Add padding to prevent overlap with the header
        boxSizing: 'border-box',
        gap: '10px', // Reduce gap between elements
      }}
    >
      {/* Title and Instructions */}
      <Typography 
        variant="h4" 
        align="center" 
        gutterBottom 
        sx={{ marginBottom: '10px', paddingTop: '20px' }} // Padding on top to ensure space from header
      >
        Bingo Game
      </Typography>
      <Typography variant="body1" align="center" sx={{ marginBottom: '20px' }}>
        Mingle with your peers and click on a box to color it when you find someone who fits the criteria. Try to get a full row, column, or diagonal to win!
      </Typography>

      {/* Bingo Board */}
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(5, 1fr)', // 5 equally sized columns
          gap: '10px', // Set equal gap between rows and columns
          width: '80vw',  // Adjust to take up more of the screen width
          maxWidth: '600px',  // Max width of the board for larger screens
          height: 'auto',
        }}
      >
        {bingoBoard.map((prompt, index) => (
          <BingoPlayingCard
            key={index}
            content={prompt.content}
            isSelected={selectedCards.includes(index)}
            onClick={() => toggleCard(index)}
            sx={{
              aspectRatio: '1 / 1', // Ensure the cards are always square
              minWidth: '80px',
              minHeight: '80px',
              width: '100%', 
              margin: 'auto',
            }}
          />
        ))}
      </Box>

      {/* Button to Generate New Board */}
      <Button
        variant="contained"
        onClick={handleNewBoard}
        sx={{
          mt: '10px',  // Reduce the margin between the button and the board
          backgroundColor: 'primary.main',
          color: '#fff',
          width: '100%',
          maxWidth: '300px', // Limit the button width
        }}
      >
        Generate a New Board
      </Button>
    </Box>
  );
};

export default Bingo;