import React, { Component } from "react";
import ReactDOM from 'react-dom';
import Home from "../Pages/Home";
import About from "../Pages/About";
import Authors from "../Pages/Authors";

import {
  Button,
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
} from "react-bootstrap";

import logo from "./logo192.png";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
} from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <>
        <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="/">
              <img
                src={logo}
                height="30"
                width="30"
                className="d-inline-block align-top"
                alt="logo"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/"> Home </Nav.Link>
                <Nav.Link href="/authors"> Authors </Nav.Link>
                <Nav.Link href="/about"> About us </Nav.Link>
              </Nav>
              <Form inline>
                <FormControl
                  type="text"
                  placeholder="Search"
                  className="me-sm-2"
                />
              </Form>
              <Button variant="outline-info">Search</Button>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/authors" component={Authors} />
            <Route exact path="/about" component={About} />
          </Switch>
        </Router>

      </>
    );
  }
}

export default Header;