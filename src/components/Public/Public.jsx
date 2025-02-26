import React from "react";
import { Container, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const PublicPage = () => {
  const navigate = useNavigate();

  return (
    <Container maxWidth="xs" sx={{ textAlign: "center", display: "flex", flexDirection: "column", gap: 2 }}>
      <Typography variant="h4">Welcome</Typography>
      <Button variant="contained" onClick={() => navigate("/login")}>Log In</Button>
      <Button variant="outlined" onClick={() => navigate("/register")}>Sign Up</Button>
    </Container>
  );
};

export default PublicPage;
