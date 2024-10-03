import { Modal, Box, Typography, Button } from '@mui/material';

const LoginPromptModal = ({ open, handleClose }) => (
    <Modal open={open} onClose={handleClose}>
        <Box sx={{
            position: 'absolute', 
            top: '50%', 
            left: '50%', 
            transform: 'translate(-50%, -50%)', 
            width: 400, 
            bgcolor: 'background.paper', 
            border: '2px solid #000', 
            boxShadow: 24, 
            p: 4 
        }}>
            <Typography variant="h6" component="h2">
                Please Log In
            </Typography>
            <Typography sx={{ mt: 2 }}>
                You must be logged in to add icebreakers to your favorites.
            </Typography>
            <Button variant="contained" sx={{ mt: 2 }} href="/login">
                Log In
            </Button>
        </Box>
    </Modal>
);

export default LoginPromptModal;