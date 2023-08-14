import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Form, Button } from 'react-bootstrap';

function SignupForm() {
  const handleSubmit = (event) => {
    event.preventDefault();
//FORM LOGIC
};

  return (
    <Container>
      <div className="signup d-flex justify-content-center">
        <Form onSubmit={handleSubmit}>
          <h2 className="text-2xl">SIGN UP</h2>

          <Form.Group className="mb-3 input">
            <Form.Control
              type="email"
              placeholder="Email address"
              required
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            />
            <Form.Control.Feedback type="invalid">
              Please enter a valid email address.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control
              type="password"
              placeholder="Password"
              required
              minLength="8"
            />
            <Form.Control.Feedback type="invalid">
              Password must be at least 8 characters long.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3 input">
            <Form.Control type="text" placeholder="First Name" required />
          </Form.Group>

          <Form.Group className="mb-3 input">
            <Form.Control type="text" placeholder="Last Name" required />
          </Form.Group>

          <Button type="submit" className="btn px-4 m-3 btn-primary">
            SUBMIT
          </Button>
        </Form>
      </div>
    </Container>
  );
}

export default SignupForm;
