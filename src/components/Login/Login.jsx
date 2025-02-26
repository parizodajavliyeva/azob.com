import React, { useState } from "react";
import { Container, TextField, Button, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { signIn } from "../../slices/authSlice";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const { data } = await axios.get("https://nazorat-ishi-default-rtdb.firebaseio.com/users.json");
      const users = Object.values(data || {});
      const isValidUser = users.some((user) => user.username === credentials.username && user.password === credentials.password);

      if (isValidUser) {
        dispatch(signIn());
        navigate("/private");
      } else {
        console.error("Invalid login credentials");
      }
    } catch {
      console.error("Login request failed");
    }
  };

  return (
    <Container maxWidth="xs">
      <Typography variant="h4">Log In</Typography>
      <TextField label="Username" fullWidth onChange={(e) => setCredentials({ ...credentials, username: e.target.value })} />
      <TextField label="Password" type="password" fullWidth onChange={(e) => setCredentials({ ...credentials, password: e.target.value })} />
      <Button variant="contained" fullWidth onClick={handleLogin}>Log In</Button>
    </Container>
  );
};

export default Login;
