import React, { useState } from 'react';
import { Container, TextField, Button, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  // ... your existing styles
}));

function SignupForm() {
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const handleEmailChange = (event) => {
    const newEmail = event.target.value;
    setEmail(newEmail);

    if (!validateEmail(newEmail)) {
      setEmailError('Invalid email address');
    } else {
      setEmailError('');
    }
  };

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!emailError) {
      // Perform form submission or other actions
    } else {
      // Handle error or display a message
    }
  };

  return (
    <Container className={classes.container}>
      <div className={classes.formContainer}>
        <Typography variant="h2" className="text-2xl">
          SIGN UP
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            className={classes.inputField}
            type="email"
            id="inputEmail"
            label="Email address"
            variant="outlined"
            value={email}
            onChange={handleEmailChange}
            error={Boolean(emailError)}
            helperText={emailError}
          />
          {/* Other input fields */}
          <Button
            className={`${classes.submitButton} btn-primary`}
            type="submit"
            variant="contained"
            disabled={Boolean(emailError)}
          >
            SUBMIT
          </Button>
        </form>
      </div>
    </Container>
  );
}

export default SignupForm;
