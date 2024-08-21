import React from 'react';
import { Navbar, Container, Nav, Form, Button } from 'react-bootstrap';
import styled, { keyframes } from 'styled-components';

const pastelPink = '#F7C6C7'; 

const CustomNavbar = styled(Navbar)`
  background-color: ${pastelPink};

  @media (max-width: 768px) {
    background-color: #F9B8B2; // Slightly darker pastel pink for mobile
  }
`;

const NavLink = styled(Nav.Link)`
  color: #333;
  margin: 0 10px;

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    color: #333; // Darker color for mobile
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const CustomNavbarBrand = styled(Navbar.Brand)`
  color: #333;
  font-size: 2rem;
  font-family: 'Dancing Script', cursive;
  animation: ${fadeIn} 1.5s ease-in-out;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    color: #333; // Darker color for mobile
  }
`;

function NavbarComponent() {
  return (
    <CustomNavbar expand="lg">
      <Container fluid>
        <CustomNavbarBrand href="#">The Glow Studio</CustomNavbarBrand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" navbarScroll>
            <NavLink href="/">Home</NavLink>
            <NavLink href="/services">Services</NavLink>
            <NavLink href="/stylists">Stylists</NavLink>
            <NavLink href="/appointment">Appointment</NavLink>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-dark">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </CustomNavbar>
  );
}

export default NavbarComponent;
