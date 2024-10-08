import { Box, Typography, Button } from '@mui/material';
import { useState } from 'react';
import BingoPlayingCard from '../components/BingoPlayingCard';
import { useQuery } from '@apollo/client';
import { GET_BINGO_PROMPTS } from '../utils/queries';
import { usePage } from '../Context/RefreshContext'; // Use the RefreshContext for refreshing the page

const Bingo = () => {
  const [selectedCards, setSelectedCards] = useState([12]); // Pre-select the center square (index 12)
  const { data, loading, error, refetch } = useQuery(GET_BINGO_PROMPTS, {
    variables: { limit: 24 }, // Fetch 24 random Bingo prompts (excluding the center free space)
  });
  
  const { refreshPage } = usePage(); // Use the refreshPage function from the context

  const prompts = data ? data.getRandomBingos : [];
  console.log('Bingo Prompts:', prompts);

  // Handle card selection/deselection
  const toggleCard = (index) => {
    // Don't allow toggling the center free space
    if (index === 12) return;
    setSelectedCards((prevSelected) =>
      prevSelected.includes(index)
        ? prevSelected.filter((card) => card !== index)
        : [...prevSelected, index]
    );
  };

  if (loading) return <Typography>Loading...</Typography>;
  if (error) return <Typography>Error: {error.message}</Typography>;

  // Create an array of Bingo prompts with "Free Space" at index 12
  const bingoBoard = [
    ...prompts.slice(0, 12),        // First 12 prompts
    { content: "Free Space" },      // Free space at index 12
    ...prompts.slice(12),           // Remaining prompts after the free space
  ];

  const handleGenerateNewBoard = () => {
    setSelectedCards([12]); // Reset selected cards, keeping the center free space selected
    refetch(); // Refetch the prompts to generate a new board
    refreshPage(); // This can be used for resetting any additional page-level state
  };

  return (
    <Box sx={{ padding: 4 }}>
      {/* Title and Instructions */}
      <Typography variant="h3" align="center" gutterBottom>
        Bingo Game
      </Typography>
      <Typography variant="h6" align="center" sx={{ mb: 4 }}>
        Mingle with your peers and click on a box to color it when you find someone who fits the criteria. Try to get a full row, column, or diagonal filled row to win!
      </Typography>

      {/* Bingo Board */}
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(5, 1fr)',
          gap: 2,
          justifyContent: 'center',
        }}
      >
        {bingoBoard.map((prompt, index) => (
          <BingoPlayingCard
            key={index}
            content={prompt.content}
            isSelected={selectedCards.includes(index)}
            onClick={() => toggleCard(index)}
          />
        ))}
      </Box>

      {/* Generate New Board Button */}
      <Box sx={{ textAlign: 'center', mt: 4 }}>
        <Button
          variant="contained"
          onClick={handleGenerateNewBoard}
          sx={{ backgroundColor: 'primary.main', color: '#fff' }}
        >
          Generate New Board
        </Button>
      </Box>
    </Box>
  );
};

export default Bingo;