import React from 'react';
import { Button, Box, Typography } from '@mui/material';
import { Link as ScrollLink } from 'react-scroll';
import homeImage from '../assets/home1.png';  // Make sure to import your image

const Home = () => {
  return (
    <div>
      {/* Home Section */}
      <Box 
        sx={{ 
          height: '85vh',   // Full viewport height
          display: 'flex', 
          flexDirection: 'row',  // Arrange items horizontally
          padding: '2rem',
          alignItems: 'center',   // Center items vertically
          color: 'black', // Set default text color to black for the Box
        }}
      >
        {/* Left Side (Text) */}
        <Box sx={{ flex: 1, textAlign: 'left', paddingLeft: '4rem' }}> {/* Add padding-left to move the text to the right */}
          <Typography variant="h3" gutterBottom sx={{ 
            fontWeight: 700, 
            fontSize: '3.5rem', 
            fontFamily: 'Georgia, serif', 
            lineHeight: '1.3', // Improved line spacing for readability
            color: '#FF5733', // Use a warm color for a more inviting tone
          }}>
            Discover the Joy of <span style={{ color: '#FF9800' }}>Delicious Recipes</span>
          </Typography>
          <Typography variant="body1" paragraph sx={{ 
            fontSize: '1.25rem', 
            fontFamily: 'Georgia, serif',
            color: '#333', // Softer dark color for better contrast
            maxWidth: '800px', // Increased the width for more space
            lineHeight: '1.7', // Improved line spacing for readability
          }}>
            Explore simple, tasty recipes that anyone can make. From quick snacks to delicious desserts, we help you create meals that are easy to follow and full of flavor. No matter your cooking experience, you'll love how easy it is to make these mouthwatering dishes.
          </Typography>
          
          {/* Recipe Section */}
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '1rem' }}>
            <Button 
              variant="contained" 
              sx={{
                bgcolor: '#FF9800',  // Match the button color
                color: 'white', // Set button text color to white
                borderRadius: '30px', // Rounded corners for a more stylish button
                padding: '12px 24px', // Adjust padding for a better button size
                fontWeight: 600, // Make the text bold
                fontSize: '1.2rem', // Adjust font size
                textTransform: 'none', // Prevent uppercase transform
                boxShadow: 'none', // Remove shadow for a cleaner look
                '&:hover': {
                  bgcolor: '#FFB74D', // Adjust hover color
                },
              }}
            >
              Start Cooking Today
            </Button>
          </Box>
        </Box>

        {/* Right Side (Image) */}
        <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
          <img 
            src={homeImage} 
            alt="Flavor Exchange" 
            style={{ 
              maxWidth: '100%', 
              height: 'auto', 
              borderRadius: '15px', // Rounded corners for a more polished look
            }} 
          />
        </Box>
      </Box>
    </div>
  );
}

export default Home;
