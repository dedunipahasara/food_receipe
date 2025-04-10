import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, TextField, Button, Typography, Box } from '@mui/material';
import SignupModal from './SignupModal'; // Import the SignupModal component

const LoginModal = ({ open, onClose }) => {
  const [isSignupOpen, setIsSignupOpen] = useState(false);

  const handleSignupClick = () => {
    setIsSignupOpen(true);  // Open the SignupModal
    onClose();  // Close the LoginModal
  };

  const handleSignupClose = () => {
    setIsSignupOpen(false);  // Close the SignupModal
  };

  return (
    <>
      <Dialog
        open={open}
        onClose={onClose}
        PaperProps={{
          sx: {
            display: 'flex',
            flexDirection: 'row',
            width: 600,
            height: 400,
            borderRadius: 4,
            p: 2,
          },
        }}
      >
        {/* Left side: Image */}
        <Box
          sx={{
            flex: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            p: 1,
          }}
        >
          <img
            src="https://i.pinimg.com/736x/f4/e7/e2/f4e7e2fb70d7b293ca0c352c77c2d824.jpg"
            alt="Login Illustration"
            style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
          />
        </Box>

        {/* Right side: Form */}
        <Box
          sx={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: 2,
            p: 2,
          }}
        >
          <DialogTitle sx={{ textAlign: 'center', fontWeight: 'bold', fontSize: '1.5rem' }}>
            Login to Continue
          </DialogTitle>

          <DialogContent sx={{ display: 'flex', flexDirection: 'column', gap: 3, mt: 1 }}>
            <TextField
              label="Email"
              type="email"
              fullWidth
              variant="outlined"
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: '12px',
                  '&.Mui-focused fieldset': {
                    borderColor: '#FF5733',
                  },
                },
              }}
            />
            <TextField
              label="Password"
              type="password"
              fullWidth
              variant="outlined"
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: '12px',
                  '&.Mui-focused fieldset': {
                    borderColor: '#FF5733',
                  },
                },
              }}
            />
            <Button
              variant="contained"
              sx={{
                bgcolor: '#FF5733',
                '&:hover': { bgcolor: '#e04d2d' },
                borderRadius: '25px',
                fontWeight: 'bold',
                py: 1.2,
              }}
              onClick={onClose}
            >
              Login
            </Button>
            <Box sx={{ textAlign: 'center' }}>
              <Typography variant="body2">
                Don’t have an account?{' '}
                <span
                  onClick={handleSignupClick}
                  style={{ color: '#FF5733', cursor: 'pointer', fontWeight: 'bold' }}
                >
                  Sign up
                </span>
              </Typography>
            </Box>
          </DialogContent>
        </Box>
      </Dialog>

      {/* Render SignupModal if isSignupOpen is true */}
      <SignupModal open={isSignupOpen} onClose={handleSignupClose} />
    </>
  );
};

export default LoginModal;
