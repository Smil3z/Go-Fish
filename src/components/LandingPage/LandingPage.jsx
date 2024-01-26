import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './LandingPage.css';
import { Button, Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import Container from '@mui/material';

// CUSTOM COMPONENTS
import RegisterForm from '../RegisterForm/RegisterForm';

function LandingPage() {
  const [heading, setHeading] = useState('Welcome');
  const history = useHistory();

  const onLogin = (event) => {
    history.push('/login');
  };

  return (
    <div className="container">
      <h2>{heading}</h2>
        <RegisterForm />
        <Box
          component="form"
          noValidate
          sx={{
            mt: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'right',
          }}
        >
          <Typography sx={{mt: 3, mb: 2, textAlign: 'center'}}> Already a Member? </Typography>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={onLogin}
          >
            Login
          </Button>
        </Box>
    </div>
  );
}

export default LandingPage;
