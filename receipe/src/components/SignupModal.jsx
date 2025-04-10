import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  Button,
  Typography,
  Box
} from '@mui/material';
import sushi from "../assets/sandwich.png"; 

const SignupModal = ({ open, onClose, onLoginClick }) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          display: 'flex',
          flexDirection: 'row',
          width: 700,
          height: 600,
          borderRadius: 4,
          p: 2,
        },
      }}
    >
      {/* Left side: Input fields and buttons */}
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
          Create a New Account
        </DialogTitle>
        <DialogContent sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          <TextField
            label="Full Name"
            fullWidth
            sx={{
              '& .MuiOutlinedInput-root': {
                borderRadius: '20px',
              },
            }}
          />
          <TextField
            label="Email"
            type="email"
            fullWidth
            sx={{
              '& .MuiOutlinedInput-root': {
                borderRadius: '20px',
              },
            }}
          />
          <TextField
            label="Password"
            type="password"
            fullWidth
            sx={{
              '& .MuiOutlinedInput-root': {
                borderRadius: '20px',
              },
            }}
          />
          <TextField
            label="Confirm Password"
            type="password"
            fullWidth
            sx={{
              '& .MuiOutlinedInput-root': {
                borderRadius: '20px',
              },
            }}
          />
          <Button
            variant="contained"
            sx={{
              bgcolor: '#FF5733',
              '&:hover': { bgcolor: '#e04d2d' },
              borderRadius: '20px',
              fontWeight: 'bold',
              py: 1.2,
            }}
            onClick={onClose}
          >
            Sign up
          </Button>
          <Box sx={{ mt: 2, textAlign: 'center' }}>
            <Typography variant="body2">
              Already have an account?{' '}
              <span
                onClick={onLoginClick}
                style={{ color: '#FF5733', cursor: 'pointer', fontWeight: 'bold' }}
              >
                Login
              </span>
            </Typography>
          </Box>
        </DialogContent>
      </Box>

      {/* Right side: Image */}
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
          src={sushi}
          alt="Signup Illustration"
          style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
        />
      </Box>
    </Dialog>
  );
};

export default SignupModal;
