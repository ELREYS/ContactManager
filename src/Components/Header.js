import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";

const Header = ({ title }) => {
  return (
    <Navbar bg="danger" expand="sm" variant="dark" className="mb-3 py-0">
      <Container>
        <Navbar.Brand href="/">{title}</Navbar.Brand>
      </Container>
      <Nav className="mr-auto">
        <Nav.Item href="/">
          <Nav.Link>Home</Nav.Link>
        </Nav.Item>
      </Nav>
    </Navbar>
  );
};

export default Header;
