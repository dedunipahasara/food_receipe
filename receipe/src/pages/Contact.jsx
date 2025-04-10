import React from 'react';
import {
  Card,
  CardMedia,
  Grid,
  Typography,
  TextField,
  Button,
  Divider,
  Paper,
} from '@mui/material';

const Contact = () => {
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      style={{
        minHeight: '95vh',
        backgroundColor: '#fff3e0', // Food-like soft beige background
        padding: '20px',
      }}
    >
      {/* Left Image Card */}
      <Grid item xs={12} md={7}>
        <Card
          sx={{
            backgroundColor: '#a0522d', // Chocolate brown
            height: '100%',
            display: 'flex',
            borderRadius: 3,
            boxShadow: 4,
          }}
        >
          <CardMedia
            component="img"
            sx={{ width: '100%', height: '60vh', objectFit: 'cover', borderRadius: 3 }}
            image="https://i.pinimg.com/736x/a0/7f/23/a07f23b783e05f5c6f353250695b5cb1.jpg"
            alt="Delicious Dish"
          />
        </Card>
      </Grid>

      {/* Right Info & Form Card */}
      <Grid item xs={12} md={4} sx={{ ml: { md: 3 }, mt: { xs: 4, md: 0 } }}>
        <Paper elevation={6} sx={{ p: 3, borderRadius: 3, backgroundColor: '#fff8e1' }}>
          <Typography variant="h4" gutterBottom sx={{ color: '#d84315' }}>
            Contact Flavor Exchange
          </Typography>
          <Typography variant="body1" paragraph sx={{ color: '#4e342e' }}>
            Got a recipe idea or question? We'd love to hear from you! Fill out the form or reach out using the contact below.
          </Typography>

          <Divider sx={{ my: 2, backgroundColor: '#ffcc80' }} />

          <Typography variant="h6" gutterBottom sx={{ color: '#ff7043' }}>
            Recipe Support
          </Typography>
          <Typography variant="body2" sx={{ color: '#5d4037' }}>
            For help with recipes or kitchen tips:
            <br />
            <strong>support@flavorexchange.com</strong>
            <br />
            1-800-FLAVOR-HELP
          </Typography>

          <Divider sx={{ my: 2, backgroundColor: '#ffcc80' }} />

          <Typography variant="h6" gutterBottom sx={{ color: '#ff7043' }}>
            General Inquiries & Submissions
          </Typography>
          <TextField
            label="Full Name"
            fullWidth
            margin="normal"
            variant="outlined"
            sx={{
              backgroundColor: 'white',
              borderRadius: 1,
            }}
          />
          <TextField
            label="Email"
            fullWidth
            margin="normal"
            variant="outlined"
            sx={{
              backgroundColor: 'white',
              borderRadius: 1,
            }}
          />
          <TextField
            label="Message"
            fullWidth
            multiline
            rows={4}
            margin="normal"
            variant="outlined"
            sx={{
              backgroundColor: 'white',
              borderRadius: 1,
            }}
          />
          <Button
            variant="contained"
            sx={{
              mt: 2,
              borderRadius: '50px',
              bgcolor: '#ff9800',
              color: 'white',
              '&:hover': {
                bgcolor: '#f57c00',
              },
            }}
          >
            Send Message
          </Button>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Contact;
