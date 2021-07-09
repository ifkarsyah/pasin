import React from 'react';
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Dropdown from "react-bootstrap/Dropdown";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";

import CreateStudent from "./Pages/ProductDetailPage/ChooseSizeForm";
import StudentList from "./Components/studentList";

import Homepage from "./Pages/HomePage/Homepage";
import ProductDetailPage from "./Pages/ProductDetailPage/ProductDetailPage";

function App() {
  return (
    <Router>

      {/* navbar */}
      <Navbar bg="primary" fixed="top" className="mb-2">

        <Container className="px-5">

          <Navbar.Brand href="/">
            <strong>pasin</strong>
          </Navbar.Brand>

          <Nav className="col-xs-5">
            <Form inline >
              <FormControl name="search" type="text" placeholder="Search" />
            </Form>
          </Nav>

          <Nav className="ml-auto">
            <Dropdown>
              <Dropdown.Toggle variant="primary" id="dropdown-basic">
                username
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
            <Route path="/create-student" component={CreateStudent} />
            <Route path="/products/:productId" component={ProductDetailPage} />
            <Route path="/student-list" component={StudentList} />
          </Switch>
        </div>
      </Container>
    </Router>
  );
}

export default App;