import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Typography, Container, Box } from '@mui/material';

function MainPage() {
  const navigate = useNavigate();

  return (
    <Container>
      <Box textAlign="center" mt={5}>
        <Typography variant="h3" gutterBottom>
          Dashboard
        </Typography>
        <Box mt={3}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => navigate('/products')}
            style={{ margin: '10px' }}
          >
            Products
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => navigate('/users')}
            style={{ margin: '10px' }}
          >
            Users
          </Button>
          <Button
            variant="contained"
            color="success"
            onClick={() => navigate('/github')}
            style={{ margin: '10px' }}
          >
            GitHub User Finder
          </Button>
        </Box>
      </Box>
    </Container>
  );
}

export default MainPage;