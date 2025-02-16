import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardMedia, Typography, Grid, Container } from "@mui/material";
import UserData from "./UserData";

function UsersPage() {
  return (
    <Container sx={{ py: 4, maxWidth: "100%!important" }}>
      <Typography variant="h4" textAlign="center" gutterBottom>
        Users
      </Typography>
      <Grid container spacing={3} sx={{ margin: 0, width: "100%!important" }}>
        {UserData.map((user) => (
          <Grid item key={user.id} xs={12} sm={6} md={4} lg={3}>
            <Card sx={{ height: "100%", display: "flex", flexDirection: "column", boxShadow: 3, transition: "0.3s", "&:hover": { transform: "scale(1.05)" } }}>
              <CardMedia component="img" height="200" image={user.imgSrc} alt={user.title} sx={{ objectFit: "cover", padding: "10px" }} />
              <CardContent>
                <Typography variant="h6" component="div" sx={{ fontWeight: "bold", fontSize: "1rem", height: "50px", overflow: "hidden" }}>
                  {user.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ height: "40px", overflow: "hidden", mt: 1 }}>
                  {user.desc}
                </Typography>
                <Link to={`/users/${user.id}`} style={{ textDecoration: "none", color: "#007bff", fontWeight: "bold", display: "block", marginTop: "10px" }}>
                  View Details
                </Link>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default UsersPage;
