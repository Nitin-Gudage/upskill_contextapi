import { Box, Button, FormGroup, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <Grid container sx={{
      height: '90vh',
      placeContent: 'center',
      backgroundImage: `url(https://images.pexels.com/photos/373076/pexels-photo-373076.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}>
      <Grid item lg={4} sx={{
        px: 5, py: 15, borderRadius: 4,
        backdropFilter: 'blur(5px)', boxShadow: '0 0 20px rgba(0,0, 0, 1)'
      }}>
        <Typography variant="h4" pb={2}>
          Login
        </Typography>
        <FormGroup onSubmit={handleSubmit}>
          <TextField
            fullWidth
            margin="normal"
            label="UserName"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            fullWidth
            margin="normal"
            label="Password"
            type="password"
            variant="outlined"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button variant="contained" color="primary" type="submit" fullWidth sx={{ mt: 2 }}>
            Login
          </Button>
        </FormGroup>
      </Grid>
    </Grid>
  );
};

export default LoginPage;
