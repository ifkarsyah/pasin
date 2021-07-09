import React from 'react';
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import CreateStudent from "./Components/createStudent";
import StudentList from "./Components/studentList";

import Homepage from "./Pages/HomePage/Homepage";
import ProductDetail from './Pages/ProductDetailPage/ProductDetailPage';

function App() {
  return (
    <Router>

      {/* navbar */}
      <Navbar bg="primary" variant="dark">
        <Container>

          <Navbar.Brand>
            <Link to={"/"} className="nav-link text-white">
              Pasin
            </Link>
          </Navbar.Brand>

          <Nav className="justify-content-end">
            <Nav>
              <Link to={"/profile"} className="nav-link">
                My Profile
              </Link>
            </Nav>

          </Nav>

        </Container>
      </Navbar>

      <Container>
        <div className="wrapper">
          <Switch>
            <Route exact path='/' component={Homepage} />
            <Route path="/create-student" component={CreateStudent} />
            <Route path="/products/:product_id" component={ProductDetail} />
            <Route path="/student-list" component={StudentList} />
          </Switch>
        </div>
      </Container>
    </Router>
  );
}

export default App;