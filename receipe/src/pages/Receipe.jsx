import React from 'react';
import { Box, Typography, Button, Stack, Grid } from '@mui/material';
import { GiCakeSlice } from 'react-icons/gi';
import { LuDessert } from 'react-icons/lu';
import { MdOutlineEmojiFoodBeverage } from 'react-icons/md';
import { FaBowlRice } from 'react-icons/fa6';
import { CiBowlNoodles } from 'react-icons/ci';
import { FaIceCream } from 'react-icons/fa';
import { FaPlus, FaTrashAlt, FaEdit, FaSearch } from 'react-icons/fa';

const categories = [
  { label: 'Meals', icon: <FaBowlRice size={20} /> },
  { label: 'Noodles', icon: <CiBowlNoodles size={20} /> },
  { label: 'Buns', icon: <GiCakeSlice size={20} /> },
  { label: 'Cakes', icon: <GiCakeSlice size={20} /> },
  { label: 'Beverages', icon: <MdOutlineEmojiFoodBeverage size={20} /> },
  { label: 'Desserts', icon: <LuDessert size={20} /> },
  { label: 'Ice Creams', icon: <FaIceCream size={20} /> },
];

const actions = [
  { label: 'Add Recipe', icon: <FaPlus size={16} /> },
  { label: 'Delete Recipe', icon: <FaTrashAlt size={16} /> },
  { label: 'Update Recipe', icon: <FaEdit size={16} /> },
  { label: 'Search Recipe', icon: <FaSearch size={16} /> },
];

const Receipe = () => {
  return (
    <Box p={4}>
      <Typography variant="h4" fontWeight="bold" mb={3} textAlign="center">
        Our Recipes
      </Typography>

     
      <Stack
        direction="row"
        spacing={2}
        flexWrap="wrap"
        justifyContent="center"
        mb={4}
      >
        {actions.map((action) => (
          <Button
            key={action.label}
            variant="contained"
            startIcon={action.icon}
            sx={{
              borderRadius: '30px',
              textTransform: 'none',
              fontWeight: 'bold',
              bgcolor: '#FF5733',
              color: 'white',
              '&:hover': {
                bgcolor: '#e04d2d',
              },
            }}
          >
            {action.label}
          </Button>
        ))}
      </Stack>

      
      <Stack
        direction="row"
        flexWrap="wrap"
        spacing={2}
        justifyContent="center"
        mb={4}
      >
        {categories.map((cat) => (
          <Button
            key={cat.label}
            variant="outlined"
            startIcon={cat.icon}
            sx={{
              borderRadius: '30px',
              textTransform: 'none',
              fontWeight: 'bold',
              color: '#FF5733',
              borderColor: '#FF5733',
              '&:hover': {
                bgcolor: '#FFF3EC',
                borderColor: '#FF5733',
              },
            }}
          >
            {cat.label}
          </Button>
        ))}
      </Stack>

      
      <Typography variant="body1" textAlign="center" color="text.secondary">
        Select an action or category above to manage recipes.
      </Typography>
    </Box>
  );
};

export default Receipe;
