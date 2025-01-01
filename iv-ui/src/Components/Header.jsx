import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from "../assets/images/logo.png";

const Header = () => {
  return (
    <Navbar expand="lg" sticky="top" className="shadow-sm header">
      <Container>
        {/* Logo */}
        <Navbar.Brand href="/" className="fw-bold text-primary">
        <img 
      src={logo}
      alt="Beauty, wellness and iv therapy store" 
      style={{ width: "200px", height: "auto" }}
    />
        </Navbar.Brand>

        {/* Hamburger Toggle */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* Navigation Links */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" className="mx-2">Home</Nav.Link>
            <Nav.Link as={Link} to="/book" className="mx-2">Book Now</Nav.Link>
            <Nav.Link as={Link} to="/contact" className="mx-2">Contact Us</Nav.Link>
          </Nav>

          {/* "Book Now" Button */}
          <Button as={Link} to="/book" variant="" className="ms-3 custom-button">
            Book Now
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
