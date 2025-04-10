import React, { useState, useEffect } from 'react';
import {
  Box, Typography, Button, Stack, Modal, TextField, MenuItem, Card, CardContent, CardActions,
  Grid, IconButton, Dialog, DialogTitle, DialogContent, DialogContentText
} from '@mui/material';
import { FaPlus, FaTrashAlt, FaEdit, FaSearch, FaIceCream } from 'react-icons/fa';
import { GiCakeSlice } from 'react-icons/gi';
import { LuDessert } from 'react-icons/lu';
import { MdOutlineEmojiFoodBeverage } from 'react-icons/md';
import { FaBowlRice } from 'react-icons/fa6';
import { CiBowlNoodles } from 'react-icons/ci';
import { PiBreadFill } from "react-icons/pi";

const categories = [
  { name: 'Meals', icon: <FaBowlRice /> },
  { name: 'Noodles', icon: <CiBowlNoodles /> },
  { name: 'Buns', icon: <PiBreadFill /> },
  { name: 'Cakes', icon: <GiCakeSlice /> },
  { name: 'Beverages', icon: <MdOutlineEmojiFoodBeverage /> },
  { name: 'Desserts', icon: <LuDessert /> },
  { name: 'Ice Creams', icon: <FaIceCream /> }
];

const Receipe = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [openAddModal, setOpenAddModal] = useState(false);
  const [recipes, setRecipes] = useState([]);
  const [newRecipe, setNewRecipe] = useState({ name: '', category: '', image: null, content: '' });
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [openUpdateModal, setOpenUpdateModal] = useState(false);
  const [updateRecipeData, setUpdateRecipeData] = useState({ name: '', content: '' });
  const [updateRecipeIndex, setUpdateRecipeIndex] = useState(null);
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('recipes')) || [];
    setRecipes(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem('recipes', JSON.stringify(recipes));
  }, [recipes]);

  const handleAddRecipe = () => {
    setRecipes([...recipes, newRecipe]);
    setNewRecipe({ name: '', category: '', image: null, content: '' });
    setOpenAddModal(false);
  };

  const handleImageChange = (e) => {
    setNewRecipe({ ...newRecipe, image: e.target.files[0] });
  };

  const handleDelete = (i) => {
    const updated = recipes.filter((_, index) => index !== i);
    setRecipes(updated);
  };

  const handleUpdate = (index, recipe) => {
    setUpdateRecipeIndex(index);
    setUpdateRecipeData({ name: recipe.name, content: recipe.content });
    setOpenUpdateModal(true);
  };

  const handleSaveUpdate = () => {
    const updated = [...recipes];
    updated[updateRecipeIndex].name = updateRecipeData.name;
    updated[updateRecipeIndex].content = updateRecipeData.content;
    setRecipes(updated);
    setOpenUpdateModal(false);
  };

  return (
    <Box
      sx={{
        bgcolor: '#FFF3EC',
        minHeight: '100vh',
        pt: { xs: 6, md: 10 },
        px: 2
      }}
    >
      <Box
        sx={{
          maxWidth: '1300px',
          mx: 'auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        <Typography variant="h4" fontWeight="bold" textAlign="center" mb={1}>
          Our Recipes
        </Typography>

        <Stack direction="row" spacing={2} justifyContent="center" mb={4}>
          <Button
            variant="contained"
            startIcon={<FaPlus />}
            onClick={() => setOpenAddModal(true)}
            sx={{
              borderRadius: 30,
              bgcolor: '#FF5733',
              color: 'white',
              '&:hover': { bgcolor: '#e04d2d' }
            }}
          >
            Add Recipe
          </Button>
          <Button
            variant="contained"
            startIcon={<FaSearch />}
            onClick={() => setShowSearch(prev => !prev)}
            sx={{
              borderRadius: 30,
              bgcolor: '#FF5733',
              color: 'white',
              '&:hover': { bgcolor: '#e04d2d' }
            }}
          >
            Search Recipe
          </Button>
        </Stack>

        {showSearch && (
          <Box display="flex" justifyContent="center" mb={3}>
            <TextField
              label="Search by name"
              variant="outlined"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              sx={{ width: '300px' }}
            />
          </Box>
        )}

        <Stack direction="row" flexWrap="wrap" spacing={2} justifyContent="center" mb={4}>
          <Button
            onClick={() => setActiveCategory('All')}
            variant={activeCategory === 'All' ? 'contained' : 'outlined'}
            sx={{
              borderRadius: 30,
              fontWeight: 'bold',
              borderColor: '#FF5733',
              color: activeCategory === 'All' ? 'white' : '#FF5733',
              bgcolor: activeCategory === 'All' ? '#FF5733' : 'transparent',
              '&:hover': {
                bgcolor: activeCategory === 'All' ? '#e04d2d' : '#FFF3EC'
              }
            }}
          >
            All
          </Button>
          {categories.map(cat => (
            <Button
              key={cat.name}
              onClick={() => setActiveCategory(cat.name)}
              startIcon={cat.icon}
              variant={activeCategory === cat.name ? 'contained' : 'outlined'}
              sx={{
                borderRadius: 30,
                fontWeight: 'bold',
                borderColor: '#FF5733',
                color: activeCategory === cat.name ? 'white' : '#FF5733',
                bgcolor: activeCategory === cat.name ? '#FF5733' : 'transparent',
                '&:hover': {
                  bgcolor: activeCategory === cat.name ? '#e04d2d' : '#FFF3EC'
                }
              }}
            >
              {cat.name}
            </Button>
          ))}
        </Stack>

        <Grid container spacing={2} justifyContent="center">
          {recipes
            .filter(r =>
              (activeCategory === 'All' || r.category === activeCategory) &&
              r.name.toLowerCase().includes(searchQuery.toLowerCase())
            )
            .map((r, i) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={i}>
                <Card
                  sx={{
                    borderRadius: '20px',
                    '&:hover': { backgroundColor: '#FFB0B0' }
                  }}
                >
                  <CardContent>
                    <Typography
                      variant="h6"
                      fontWeight="bold"
                      onClick={() => setSelectedRecipe(r)}
                      sx={{ cursor: 'pointer' }}
                    >
                      {r.name}
                    </Typography>
                    {r.image && (
                      <img
                        src={
                          typeof r.image === 'string'
                            ? r.image
                            : URL.createObjectURL(r.image)
                        }
                        alt={r.name}
                        style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                      />
                    )}
                  </CardContent>
                  <CardActions sx={{ justifyContent: 'center' }}>
                    <Button
                      variant="contained"
                      onClick={() => setSelectedRecipe(r)}
                      fullWidth
                    >
                      View Details
                    </Button>
                    <IconButton color="success" onClick={() => handleUpdate(i, r)}>
                      <FaEdit />
                    </IconButton>
                    <IconButton color="error" onClick={() => handleDelete(i)}>
                      <FaTrashAlt />
                    </IconButton>
                  </CardActions>
                </Card>
              </Grid>
            ))}
        </Grid>
      </Box>

      {/* Add Recipe Modal */}
      <Modal open={openAddModal} onClose={() => setOpenAddModal(false)}>
        <Box p={4} bgcolor="white" borderRadius={2} mx="auto" mt={10} maxWidth={400}>
          <Typography variant="h6" mb={2}>Add New Recipe</Typography>
          <TextField
            label="Name"
            fullWidth
            value={newRecipe.name}
            onChange={e => setNewRecipe({ ...newRecipe, name: e.target.value })}
            margin="normal"
          />
          <TextField
            label="Category"
            select
            fullWidth
            value={newRecipe.category}
            onChange={e => setNewRecipe({ ...newRecipe, category: e.target.value })}
            margin="normal"
          >
            {categories.map(c => <MenuItem key={c.name} value={c.name}>{c.name}</MenuItem>)}
          </TextField>
          <TextField
            label="Content"
            fullWidth
            multiline
            rows={3}
            value={newRecipe.content}
            onChange={e => setNewRecipe({ ...newRecipe, content: e.target.value })}
            margin="normal"
          />
          <input type="file" onChange={handleImageChange} />
          <Button
            variant="contained"
            onClick={handleAddRecipe}
            fullWidth
            sx={{ mt: 2, bgcolor: '#FF5733', '&:hover': { bgcolor: '#e04d2d' } }}
          >
            Save
          </Button>
        </Box>
      </Modal>

      {/* Update Recipe Modal */}
      <Modal open={openUpdateModal} onClose={() => setOpenUpdateModal(false)}>
        <Box p={4} bgcolor="white" borderRadius={2} mx="auto" mt={10} maxWidth={400}>
          <Typography variant="h6" mb={2}>Update Recipe</Typography>
          <TextField
            label="Name"
            fullWidth
            value={updateRecipeData.name}
            onChange={e => setUpdateRecipeData({ ...updateRecipeData, name: e.target.value })}
            margin="normal"
          />
          <TextField
            label="Content"
            fullWidth
            multiline
            rows={3}
            value={updateRecipeData.content}
            onChange={e => setUpdateRecipeData({ ...updateRecipeData, content: e.target.value })}
            margin="normal"
          />
          <Button
            variant="contained"
            onClick={handleSaveUpdate}
            fullWidth
            sx={{ mt: 2, bgcolor: '#FF5733', '&:hover': { bgcolor: '#e04d2d' } }}
          >
            Update
          </Button>
        </Box>
      </Modal>

      {/* View Recipe Modal */}
      <Dialog open={Boolean(selectedRecipe)} onClose={() => setSelectedRecipe(null)} maxWidth="sm" fullWidth>
        <DialogTitle>{selectedRecipe?.name}</DialogTitle>
        <DialogContent>
          {selectedRecipe?.image && (
            <Box mb={2} textAlign="center">
              <img
                src={typeof selectedRecipe.image === 'string' ? selectedRecipe.image : URL.createObjectURL(selectedRecipe.image)}
                alt={selectedRecipe.name}
                style={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: '12px' }}
              />
            </Box>
          )}
          <DialogContentText>{selectedRecipe?.content}</DialogContentText>
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default Receipe;
