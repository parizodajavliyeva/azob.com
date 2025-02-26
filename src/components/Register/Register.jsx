import React, { useState } from "react";
import { Container, TextField, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [userData, setUserData] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      await axios.post("https://nazorat-ishi-4998f-default-rtdb.firebaseio.com/users.json", userData);
      navigate("/");
    } catch (error) {
      console.error("Registration failed:", error);
    }
  };

  return (
    <Container maxWidth="xs">
      <Typography variant="h4" align="center">Sign Up</Typography>
      <TextField label="Username" fullWidth onChange={(e) => setUserData({ ...userData, username: e.target.value })} />
      <TextField label="Password" type="password" fullWidth onChange={(e) => setUserData({ ...userData, password: e.target.value })} />
      <Button variant="contained" fullWidth onClick={handleRegister}>Register</Button>
    </Container>
  );
};

export default Register;
