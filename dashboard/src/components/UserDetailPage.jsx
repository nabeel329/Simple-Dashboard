import React from "react";
import { useParams } from "react-router-dom";
import { Card, CardContent, CardMedia, Typography, Container } from "@mui/material";
import UserData from "./UserData";

function UserDetailPage() {
  const { id } = useParams();
  const user = UserData.find((user) => user.id === parseInt(id));

  if (!user) {
    return <Typography variant="h5" textAlign="center">User not found</Typography>;
  }

  return (
    <Container sx={{ py: 4, maxWidth: "600px" }}>
      <Card sx={{ boxShadow: 3 }}>
        <CardMedia component="img" height="300" image={user.imgSrc} alt={user.title} sx={{ objectFit: "cover" }} />
        <CardContent>
          <Typography variant="h5" component="div" sx={{ fontWeight: "bold" }}>
            {user.title}
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mt: 1 }}>
            {user.desc} This user is known for their outstanding contributions in their field. Passionate about technology and innovation, they have worked on various high-impact projects. Their expertise spans multiple domains, and they are highly regarded for their problem-solving skills and leadership abilities. When not working, they enjoy exploring new ideas, networking with like-minded professionals, and contributing to open-source communities.
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
}

export default UserDetailPage;
