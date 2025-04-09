import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Box, Drawer, List, ListItem, ListItemText, Button } from '@mui/material';
import { SiCodechef } from 'react-icons/si';
import { FaBars, FaTimes, FaHome, FaInfoCircle, FaClipboardList, FaStar, FaPhoneAlt } from 'react-icons/fa'; // Importing icons
import { Link } from 'react-router-dom';  // Use Link from react-router-dom for routing

const navItems = [
  { id: 'home', label: 'Home', path: '/', icon: <FaHome /> },
  { id: 'about', label: 'About Us', path: '/about', icon: <FaInfoCircle /> },
  { id: 'receipe', label: 'Receipe', path: '/receipe', icon: <FaClipboardList /> },
  { id: 'review', label: 'Reviews', path: '/reviews', icon: <FaStar /> },
  { id: 'contact', label: 'Contact Us', path: '/contact', icon: <FaPhoneAlt /> },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box sx={{ width: 250, bgcolor: '#FFEFD5' }} role="presentation" onClick={handleDrawerToggle}>
      <List>
        {navItems.map((item) => (
          <ListItem button key={item.id}>
            <Link 
              to={item.path}  // Change to Link for routing
              style={{
                width: '100%',
                textDecoration: 'none',
                color: 'black',
                display: 'flex', 
                alignItems: 'center', // Center the icons with text
              }}
            >
              <Box sx={{ marginRight: '10px' }}>{item.icon}</Box> {/* Add Icon */}
              <ListItemText primary={item.label} />
            </Link>
          </ListItem>
        ))}
        <Box sx={{ pl: 2, pt: 1 }}>
          <Button
            variant="contained"
            sx={{
              bgcolor: '#FF5733',
              color: 'white',
              borderRadius: '20px',
              '&:hover': {
                bgcolor: '#e04d2d',
                color: 'white',
              },
            }}
          >
            Login
          </Button>
        </Box>
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="sticky"
        elevation={4}
        sx={{
          background: 'linear-gradient(to right, #FCB454, #FF9B17)',
          color: 'black',
          margin: 0, // Remove margin
          padding: 0, // Remove padding
          boxSizing: 'border-box', // Ensure padding/borders are included in width/height
        }}
      >
        <Toolbar sx={{ justifyContent: 'flex-end' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, cursor: 'pointer', flexGrow: 1 }}>
            <SiCodechef size={28} />
            <Typography variant="h6" component="div">
              Flavor Exchange
            </Typography>
          </Box>

          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 4 }}>
            {navItems.map((item) => (
              <Link 
                key={item.id} 
                to={item.path}  // Change to Link for routing
                style={{
                  cursor: 'pointer',
                  color: 'black',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center', // Center icons with text
                }}
              >
                <Box sx={{ marginRight: '10px' }}>{item.icon}</Box> {/* Add Icon */}
                <Typography variant="body1" sx={{
                  '&:hover': {
                    color: 'white', // Set hover color to white
                  },
                }}>
                  {item.label}
                </Typography>
              </Link>
            ))}
          </Box>

          <Box sx={{ display: { xs: 'none', md: 'block' }, marginLeft: 2 }}>
            <Button
              variant="contained"
              sx={{
                bgcolor: '#FF5733',
                color: 'white',
                borderRadius: '20px',
                '&:hover': {
                  bgcolor: '#e04d2d',
                  color: 'white',
                },
                width: '120px', // Adjusted width
              }}
            >
              Login
            </Button>
          </Box>

          <Box sx={{ display: { xs: 'block', md: 'none' } }}>
            <IconButton edge="end" color="inherit" onClick={handleDrawerToggle}>
              {mobileOpen ? <FaTimes /> : <FaBars />}
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer anchor="right" open={mobileOpen} onClose={handleDrawerToggle}>
        {drawer}
      </Drawer>
    </>
  );
};

export default Navbar;
