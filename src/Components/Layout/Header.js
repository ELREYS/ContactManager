import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { FaHome } from "react-icons/fa";
import { MdAdd } from "react-icons/md";
import { FaQuestion } from "react-icons/fa";

const Header = ({ title }) => {
  return (
    <Navbar bg="danger" expand="sm" variant="dark" className="mb-3 py-0">
      <Navbar.Brand href="/">{title}</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" />
      <Nav className="mr-auto "></Nav>
      <Nav.Item>
        <Nav.Link style={{ color: "#FFF" }} href="/">
          <FaHome style={{ marginTop: "-4", marginRight: "2" }}></FaHome>
          Home
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link style={{ color: "#FFF" }} href="/contact/add">
          <MdAdd style={{ marginTop: "-4", marginRight: "2" }}></MdAdd>
          Add
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link style={{ color: "#FFF" }} href="/about">
          <FaQuestion
            style={{ marginTop: "-4", marginRight: "2" }}
          ></FaQuestion>
          About
        </Nav.Link>
      </Nav.Item>
    </Navbar>
  );
};

export default Header;
