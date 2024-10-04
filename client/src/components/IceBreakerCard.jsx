import React, { useState } from 'react';
import { Card, CardContent, Typography, Divider, CardActionArea, IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AuthService from '../utils/auth';  // Assuming you have AuthService for login check
import LoginPromptModal from './LoginPromptModal';  // Import your LoginPromptModal

const IceBreakerCard = ({ title, description, showHeart, onClick, onFavoriteClick, isFavorited }) => {
    const [loginModalOpen, setLoginModalOpen] = useState(false);

    const handleFavoriteClick = () => {
        if (!AuthService.loggedIn()) {
            setLoginModalOpen(true);  // Open login modal if the user is not logged in
        } else {
            onFavoriteClick();  // Call the existing favorite function if logged in
        }
    };

    const handleCloseModal = () => setLoginModalOpen(false);

    return (
        <Card sx={{ minWidth: 275, maxWidth: 300, margin: 2 }}>
            <CardActionArea onClick={onClick}>
                <CardContent>
                    <Typography variant="h5" component="div">
                        {title}
                    </Typography>
                    <Divider sx={{ 
                        my: 1,
                        borderBottomWidth: 1,
                        width: '100%',
                        mx: 'auto',
                        borderColor: 'white'
                    }} />
                    <Typography variant="body2">
                        {description}
                    </Typography>

                    {/* Conditionally render the heart icon */}
                    {showHeart && (
                        <IconButton
                            onClick={(e) => {
                                e.stopPropagation(); // Prevent triggering the card click when clicking the heart
                                handleFavoriteClick();  // Use the new handler for favorite click
                            }}
                            aria-label="add to favorites"
                        >
                            <FavoriteIcon color={isFavorited ? 'error' : 'default'} />
                        </IconButton>
                    )}
                </CardContent>
            </CardActionArea>

            {/* Login prompt modal */}
            <LoginPromptModal open={loginModalOpen} handleClose={handleCloseModal} />
        </Card>
    );
};

export default IceBreakerCard;