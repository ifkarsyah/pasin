import React, { useEffect, useState } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Dropdown from "react-bootstrap/Dropdown";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";

import Homepage from "./Pages/HomePage/Homepage";
import ProductDetailPage from "./Pages/ProductDetailPage/ProductDetailPage";
import MyProfilePage from "./Pages/MyProfilePage/MyProfilePage";

import { getUser } from "./API/api";

function App() {

  const navBarStyle = {
    backgroundColor: '#ffffff',
    boxShadow: "0 2px 2px -2px rgba(0,0,0,.2)"
  };

  const dropDownstyle = {
    backgroundColor: '#4f9d4d',
  };


  const [username, setUsername] = useState('defaultuser');
  useEffect(() => {
    let mounted = true;
    getUser()
      .then(results => {
        if (mounted) {
          setUsername(results.data[0]["username"])
        }
      })
    return () => mounted = false;
  }, [])

  return (
    <Router>

      {/* navbar */}
      <Navbar style={navBarStyle} fixed="top" className="mb-2">

        <Container className="px-2">

          <Navbar.Brand href="/">
            <img src="https://i.ibb.co/DrjsQYM/pasin-removebg-preview.png" width="90"></img>
          </Navbar.Brand>

          <Nav className="col-xs-5">
            <Form inline >
              <FormControl name="search" type="text" placeholder="Search" />
            </Form>
          </Nav>

          <Nav className="ml-auto">
            <Dropdown>
              <Dropdown.Toggle style={dropDownstyle} id="dropdown-basic">
                {username}
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="/profile">My Profile</Dropdown.Item>
                <Dropdown.Item href="/logout">Logout</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Container>
      </Navbar>

      <Container>
        <div className="wrapper">
          <Switch>
            <Route exact path='/' component={Homepage} />
            <Route path="/products/:productId" component={ProductDetailPage} />
            <Route path="/profile" component={MyProfilePage} />
          </Switch>
        </div>
      </Container>
    </Router>
  );
}

export default App;