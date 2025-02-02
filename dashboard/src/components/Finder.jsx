import React, { useState } from 'react';
import { TextField, Button, Typography, Container, Box, CircularProgress } from '@mui/material';

function Finder() {
  const [username, setUsername] = useState('');
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchUser = () => {
    setLoading(true);
    fetch(`https://api.github.com/users/${username}`)
      .then((response) => response.json())
      .then((data) => {
        setUser(data);
        setLoading(false);
      });
  };

  return (
    <Container>
      <Box textAlign="center" mt={5}>
        <Typography variant="h4" gutterBottom>
          GitHub User Finder
        </Typography>
        <Box mt={3}>
          <TextField
            label="Enter GitHub username"
            variant="outlined"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={fetchUser}
            style={{ marginLeft: '10px' }}
          >
            Search
          </Button>
        </Box>
        {loading && (
          <Box mt={3}>
            <CircularProgress />
          </Box>
        )}
        {user && (
          <Box mt={3}>
            <Typography variant="h5">{user.name}</Typography>
            <Typography variant="body1">{user.bio}</Typography>
            <img src={user.avatar_url} alt="User Avatar" width="100" />
          </Box>
        )}
      </Box>
    </Container>
  );
}

export default Finder;