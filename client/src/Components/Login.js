import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { Container, Form, Button } from 'react-bootstrap';

function LoginForm() {
  const handleSubmit = (event) => {
    event.preventDefault();
//submit logic
  };

  return (
    <Container>
      <div className="login d-flex justify-content-center">
        <Form onSubmit={handleSubmit}>
          <h2 className="text-2xl">LOGIN</h2>

          <Form.Group className="mb-3">
            <Form.Control
              type="email"
              placeholder="Email address"
              id="inputEmail"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control
              type="password"
              placeholder="Password"
              id="inputPassword"
            />
          </Form.Group>

          <Button type="submit" className="btn btn-primary px-4 m-3">
            SUBMIT
          </Button>
        </Form>
      </div>
    </Container>
  );
}

export default LoginForm;
