import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { List, ListItem, Typography, Container, CircularProgress } from '@mui/material';

function UsersPage() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <Container style={{ textAlign: 'center', marginTop: '20px' }}>
        <CircularProgress />
      </Container>
    );
  }

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Users
      </Typography>
      <List>
        {users.map((user) => (
          <ListItem
            button
            key={user.id}
            onClick={() => navigate(`/users/${user.id}`)}
          >
            <Typography variant="body1">{user.name}</Typography>
          </ListItem>
        ))}
      </List>
    </Container>
  );
}

export default UsersPage;