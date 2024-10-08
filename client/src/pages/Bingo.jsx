import { Box, Typography } from '@mui/material';
import { useState } from 'react';
import BingoPlayingCard from '../components/BingoPlayingCard';
import { useQuery } from '@apollo/client';
import { GET_BINGO_PROMPTS } from '../utils/queries';

const Bingo = () => {
  const [selectedCards, setSelectedCards] = useState([]); // To track selected card indices
  const { data, loading, error } = useQuery(GET_BINGO_PROMPTS, {
    variables: { limit: 25 }, // Fetch 25 random Bingo prompts
  });

  const prompts = data ? data.getRandomBingos : [];

  // Handle card selection/deselection
  const toggleCard = (index) => {
    setSelectedCards((prevSelected) =>
      prevSelected.includes(index)
        ? prevSelected.filter((card) => card !== index)
        : [...prevSelected, index]
    );
  };

  if (loading) return <Typography>Loading...</Typography>;
  if (error) return <Typography>Error: {error.message}</Typography>;

  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(5, 1fr)',
        gap: 2,
        justifyContent: 'center',
        padding: 4,
      }}
    >
      {prompts.map((prompt, index) => (
        <BingoPlayingCard
          key={index}
          content={prompt.content}
          isSelected={selectedCards.includes(index)}
          onClick={() => toggleCard(index)}
        />
      ))}
    </Box>
  );
};

export default Bingo;