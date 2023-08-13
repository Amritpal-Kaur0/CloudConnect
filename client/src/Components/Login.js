import React from 'react';
import { Container, TextField, Button, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(3),
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
  },
  inputField: {
    marginBottom: theme.spacing(3),
  },
  submitButton: {
    margin: theme.spacing(2),
  },
}));

function LoginForm() {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <div className={classes.formContainer}>
        <Typography variant="h2" className="text-2xl">
          LOGIN
        </Typography>
        <form>
          <TextField
            className={classes.inputField}
            type="email"
            id="inputEmail"
            label="Email address"
            variant="outlined"
          />
          <TextField
            className={classes.inputField}
            type="password"
            id="inputPassword"
            label="Password"
            variant="outlined"
          />
          <Button
            className={`${classes.submitButton} btn-primary`}
            type="submit"
            variant="contained"
            color="primary"
          >
            SUBMIT
          </Button>
        </form>
      </div>
    </Container>
  );
}

export default LoginForm;
