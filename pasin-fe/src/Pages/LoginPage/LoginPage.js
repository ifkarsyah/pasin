import React from "react";
import { Button, Form } from "react-bootstrap";
import { useHistory } from "react-router";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import {  useState } from "react";
import { authLogin } from "../../API/api";
import cookies from "../../Utils/Cookies";

function LoginPage({ setAuth }) {
<<<<<<< HEAD
  const logInStyle = {
    marginTop: '1rem',
    backgroundColor: '#4f9d4d',
  };

  const cardStyle = {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '30rem',
  };

=======
>>>>>>> 12e7f32bdc61368a052057fe49b28c5672ad5ae9
  let history = useHistory();

  const [inputs, setInputs] = useState({
    username: "",
    password: ""
  });

  const { username, password } = inputs;

  const onChange = e =>{
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  }
    
  
  const handleSubmit = async e => {
    e.preventDefault();

      const response =  await authLogin(username, password);
      if(response.status==200){
        const token = response.data[0].token;
        localStorage.setItem("token", token);
        window.location.href = "/";
        // setAuth(true);
      }else{
        setAuth(false);
      }
      // const response = await fetch(
      //   "/api/user/login",
      //   {
      //     method: "POST",
      //     headers: {
      //       "Content-type": "application/json"
      //     },
      //     body: JSON.stringify(jsonBody)
      //   }
      // );S
    // console.log(jsonBody)
    // // let data = await fetch('/api/user/login', 'POST', jsonBody);
    // // if (data.isUserExists) {
    // //   cookies.set('token', data.token, { path: '/' });
    // //   history.push("/home");
    // // }
  };

  return (
    <Container fluid={true} style={{ paddingTop: "70px" }}>
      <Card style={cardStyle}>
        <Card.Body>
          <Card.Title>Login Page</Card.Title>
          <Form>

            <Form.Group controlId="Username">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" name="username"  value={username} onChange={e => onChange(e)} />
            </Form.Group>

            <Form.Group controlId="Password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" name="password"  value={password} onChange={e => onChange(e)}/>
            </Form.Group>
<<<<<<< HEAD
            <Button style={logInStyle} type="submit" onClick={handleSubmit}>Login</Button>
=======
            <Button variant="primary" type="submit" onClick={handleSubmit}>Login</Button>
>>>>>>> 12e7f32bdc61368a052057fe49b28c5672ad5ae9
          </Form>
          <div className="m-5">

          </div>

        </Card.Body>
      </Card>
    </Container>
  );
}

export default LoginPage;
