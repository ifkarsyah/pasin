import React, { useEffect, useState } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Dropdown from "react-bootstrap/Dropdown";

import { BrowserRouter as Router, Switch, Route, Link,  Redirect } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";

import Homepage from "./Pages/HomePage/Homepage";

import MyProfilePage from "./Pages/MyProfilePage/MyProfilePage";

import { getUser, authLogout } from "./API/api";
import Dashboard from "./Pages/Dashboard/Dashboard";
import LoginPage from "./Pages/LoginPage/LoginPage";

function App() {

  const logout = async e => {
    e.preventDefault();
    try {
      const response = await  authLogout();
      if(response.status==200){
        localStorage.clear();
        setAuth(false);
      }
    } catch (err) {
      setAuth(false);
    }
  };

  const checkAuthenticated = async () => {
    try {
      localStorage.token==undefined ? setIsAuthenticated(false) : setIsAuthenticated(true);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    checkAuthenticated();
    document.title = 'Pasin'
  }, []);

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const setAuth = boolean => {
    setIsAuthenticated(boolean);
  };


  return (
    <Router>

      <Container>
        <div className="wrapper">
          <Switch>
          {/* <Route path="/login" render={props =>!isAuthenticated ? ( <LoginPage {...props} setAuth={setAuth} />) : (<Redirect to="/" /> )} /> */}
            <Route exact path='/' render={props =>!isAuthenticated ? ( <LoginPage {...props} setAuth={setAuth} />) :( <Dashboard /> )} />
          </Switch>
        </div>
      </Container>
    </Router>
  );
}

export default App;
