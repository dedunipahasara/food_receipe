import React from 'react';
import { Button, Box, Typography } from '@mui/material';
import { Link as ScrollLink } from 'react-scroll';
import homeImage from '../assets/home1.png';  // Make sure to import your image

const Home = () => {
  return (
    <div>
      <Box 
        sx={{ 
          height: '85vh', 
          display: 'flex', 
          flexDirection: 'row',  
          padding: '2rem',
          alignItems: 'center',  
          color: 'black', 
        }}
      >
       
        <Box sx={{ flex: 1, textAlign: 'left', paddingLeft: '4rem' }}> {/* Add padding-left to move the text to the right */}
          <Typography variant="h3" gutterBottom sx={{ 
            fontWeight: 700, 
            fontSize: '3.5rem', 
            fontFamily: 'Georgia, serif', 
            lineHeight: '1.3', 
            color: '#FF5733', 
          }}>
            Discover the Joy of <span style={{ color: '#FF9800' }}>Delicious Recipes</span>
          </Typography>
          <Typography variant="body1" paragraph sx={{ 
            fontSize: '1.25rem', 
            fontFamily: 'Georgia, serif',
            color: '#333', 
            maxWidth: '800px', 
            lineHeight: '1.7', 
          }}>
            Explore simple, tasty recipes that anyone can make. From quick snacks to delicious desserts, we help you create meals that are easy to follow and full of flavor. No matter your cooking experience, you'll love how easy it is to make these mouthwatering dishes.
          </Typography>
          
          {/* Recipe Section */}
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '1rem' }}>
            <Button 
              variant="contained" 
              sx={{
                bgcolor: '#FF9800',  
                color: 'white', 
                borderRadius: '30px',
                padding: '12px 24px', 
                fontWeight: 600, 
                fontSize: '1.2rem', 
                textTransform: 'none', 
                boxShadow: 'none', 
                '&:hover': {
                  bgcolor: '#FFB74D', 
                },
              }}
            >
              Start Cooking Today
            </Button>
          </Box>
        </Box>

        
        <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
          <img 
            src={homeImage} 
            alt="Flavor Exchange" 
            style={{ 
              maxWidth: '100%', 
              height: 'auto', 
              borderRadius: '15px', 
            }} 
          />
        </Box>
      </Box>
       <About/>
    <Receipe/>
    {/* <Reviews/>
    <Contact/> */}
    </div>
  );
}

export default Home;
