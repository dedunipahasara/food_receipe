import React from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Avatar,
  Stack,
  Rating,
} from '@mui/material';

const reviewData = [
  {
    username: 'Alice',
    recipeName: 'Chocolate Cake',
    image: 'https://i.pinimg.com/736x/d5/47/c4/d547c40e75cb17f062b683b88ee422b3.jpg',
    review: 'Absolutely delicious! Perfect texture and rich flavor.',
    rating: 5,
  },
  {
    username: 'Bob',
    recipeName: 'Spaghetti',
    image: 'https://i.pinimg.com/736x/a3/af/f3/a3aff3c83cd6a010767a63e932819cef.jpg',
    review: 'Tastes just like home. Loved the sauce!',
    rating: 4.5,
  },
  {
    username: 'Carla',
    recipeName: 'Fruit Tart',
    image: 'https://i.pinimg.com/736x/51/67/9c/51679c03f2e7680d655df536850ed070.jpg',
    review: 'Very refreshing. A bit sweet for my taste but still great!',
    rating: 4,
  },
  {
    username: 'Dan',
    recipeName: 'Green Salad',
    image: 'https://i.pinimg.com/736x/56/36/94/5636945ac54fad2ec472d6d9f6f8fad3.jpg',
    review: 'Crisp and fresh. Dressing was tangy and perfect!',
    rating: 4.8,
  },
  {
    username: 'Eva',
    recipeName: 'Biryani',
    image: 'https://i.pinimg.com/736x/12/8d/25/128d257e22b417cc11766b5e8e272c95.jpg',
    review: 'Spicy and flavorful. Just how I like it.',
    rating: 5,
  },
  {
    username: 'Frank',
    recipeName: 'Ice Cream Sundae',
    image: 'https://i.pinimg.com/736x/e1/52/ba/e152ba1b4b0ffcccd434242dbabdfc16.jpg',
    review: 'Heaven in a bowl! Creamy and delightful.',
    rating: 4.7,
  },
  {
    username: 'Grace',
    recipeName: 'Cheese Pizza',
    image: 'https://i.pinimg.com/236x/1d/28/c5/1d28c51cfab73dfcd0e3fad6824f4e86.jpg',
    review: 'Cheesy and satisfying. Will try again!',
    rating: 4.3,
  }
];

const popularItems = [
  {
    recipeName: 'Pancakes',
    image: 'https://i.pinimg.com/236x/98/6e/80/986e8020d901fe1c313e9460495ec5c3.jpg',
    description: 'Fluffy and golden, a morning favorite!',
  },
  {
    recipeName: 'Tacos',
    image: 'https://i.pinimg.com/736x/c9/4e/48/c94e4868af6c7806773e444ccbc5804b.jpg',
    description: 'Spicy, crunchy, and full of flavor.',
  },
  {
    recipeName: 'Momos',
    image: 'https://i.pinimg.com/236x/e8/35/ed/e835ed89023c2a6d2d1933321d59efc4.jpg',
    description: 'Steamed to perfection with spicy chutney.',
  },
  {
    recipeName: 'Sushi',
    image: 'https://i.pinimg.com/236x/f3/2c/00/f32c005b726ad8b06fd9fcdeb1e0269c.jpg',
    description: 'Fresh and delicate rolls of happiness.',
  },
  {
    recipeName: 'Pasta Carbonara',
    image: 'https://i.pinimg.com/236x/0d/7f/83/0d7f831ad3e7a6ee3b65927f72783cb4.jpg',
    description: 'Creamy and rich Italian classic.',
  },
  {
    recipeName: 'Burger',
    image: 'https://i.pinimg.com/236x/8b/36/9f/8b369fefca44952ef36cc09f830c00e7.jpg',
    description: 'Juicy and delicious, the perfect meal.',
  },
  {
    recipeName: 'Salad',
    image: 'https://i.pinimg.com/236x/04/44/31/044431c8343b5801ff75f4b493fd6a24.jpg',
    description: 'Crisp, fresh, and full of vitamins.',
  }
];

const Reviews = () => {
  return (
    <Box p={4} bgcolor="#fff3ec">
      {/* Reviews Section */}
      <Typography variant="h4" fontWeight="bold" mb={3} textAlign="center">
        Recipe Reviews
      </Typography>
      <Box
        display="flex"
        overflow="auto"
        gap={3}
        py={2}
        px={1}
        sx={{
          scrollSnapType: 'x mandatory',
          '&::-webkit-scrollbar': { height: '8px' },
          '&::-webkit-scrollbar-thumb': { background: '#ccc', borderRadius: '4px' }
        }}
      >
        {reviewData.map((review, index) => (
          <Card
            key={index}
            sx={{
              minWidth: 300,
              maxWidth: 300,
              flex: '0 0 auto',
              scrollSnapAlign: 'start',
              borderRadius: 4,
              boxShadow: 3,
              transition: 'background-color 0.3s ease',
              '&:hover': {
                backgroundColor: '#FFDDAB',
              },
            }}
          >
            <CardMedia
              component="img"
              height="160"
              image={review.image}
              alt={review.recipeName}
            />
            <CardContent>
              <Stack direction="row" spacing={1} alignItems="center" mb={1}>
                <Avatar>{review.username[0]}</Avatar>
                <Typography fontWeight="bold">{review.username}</Typography>
              </Stack>
              <Typography variant="subtitle1" color="text.secondary" fontWeight="bold">
                {review.recipeName}
              </Typography>
              <Typography variant="body2" mt={1} mb={1}>
                "{review.review}"
              </Typography>
              <Rating value={review.rating} precision={0.5} readOnly sx={{ color: '#ff9800' }} />
            </CardContent>
          </Card>
        ))}
      </Box>

      {/* Popular Items Section */}
      <Typography variant="h4" fontWeight="bold" mt={6} mb={3} textAlign="center">
        Popular Items
      </Typography>
      <Box
        display="flex"
        overflowX="auto"
        gap={3}
        justifyContent="center"
        py={2}
        px={1}
        sx={{
          scrollSnapType: 'x mandatory',
          '&::-webkit-scrollbar': { height: '8px' },
          '&::-webkit-scrollbar-thumb': { background: '#ccc', borderRadius: '4px' }
        }}
      >
        {popularItems.map((item, index) => (
          <Card
            key={index}
            sx={{
              width: 260,
              borderRadius: 4,
              boxShadow: 3,
              transition: 'background-color 0.3s ease',
              '&:hover': {
                backgroundColor: '#FFDDAB',
              },
            }}
          >
            <CardMedia
              component="img"
              height="140"
              image={item.image}
              alt={item.recipeName}
            />
            <CardContent>
              <Typography fontWeight="bold">{item.recipeName}</Typography>
              <Typography variant="body2" mt={1} color="text.secondary">
                {item.description}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default Reviews;
