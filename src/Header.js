// import axios from "axios";
// import { Route } from "react-router-dom";
// import { useHistory } from "react-router-dom";
// import { useState, useEffect, useContext } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

const Header = () => {
  return (
    <>
      <h1>Hey I am header</h1>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">Home</Navbar.Brand>
          <Nav.Link href="/Info" style={{ color: "var(--color-light)" }}>
            Info
          </Nav.Link>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
