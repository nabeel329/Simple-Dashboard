import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { List, ListItem, Typography, Container, CircularProgress } from '@mui/material';

function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
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
        Products
      </Typography>
      <List>
        {products.map((product) => (
          <ListItem
            button
            key={product.id}
            onClick={() => navigate(`/products/${product.id}`)}
          >
            <Typography variant="body1">{product.title}</Typography>
          </ListItem>
        ))}
      </List>
    </Container>
  );
}

export default ProductsPage;