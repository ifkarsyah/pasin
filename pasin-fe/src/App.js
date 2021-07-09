import React from 'react';
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import CreateStudent from "./Components/createStudent";
import EditStudent from "./Components/editStudent";
import StudentList from "./Components/studentList";

import Homepage from "./Pages/HomePage/Homepage";

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
              <Link to={"/create-student"} className="nav-link">
                Create Student
              </Link>
            </Nav>

            <Nav>
              <Link to={"/student-list"} className="nav-link">
                Student List
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
            <Route path="/edit-student/:id" component={EditStudent} />
            <Route path="/student-list" component={StudentList} />
          </Switch>
        </div>
      </Container>
    </Router>
  );
}

export default App;