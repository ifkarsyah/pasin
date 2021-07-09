import React from "react";
import { Button, Form } from "react-bootstrap";
import { useHistory } from "react-router";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import cookies from "../../Utils/Cookies";

function LoginPage() {
  let history = useHistory();
  const handleSubmit = async jsonBody => {
    let data = await fetch('/api/user/login', 'POST', jsonBody);
    if (data.isUserExists) {
      cookies.set('token', data.token, { path: '/' });
      history.push("/home");
    }
  };

  return (
    <Container fluid={true} style={{ paddingTop: "70px" }}>
      <Card>
        <Card.Body>
          <Card.Title>Login Page</Card.Title>
          <Form onSubmit={handleSubmit}>

            <Form.Group controlId="Username">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" />
            </Form.Group>

            <Form.Group controlId="Password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" />
            </Form.Group>

          </Form>
          <div className="m-5">

          </div>
          <Button variant="primary" block>Login</Button>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default LoginPage;
