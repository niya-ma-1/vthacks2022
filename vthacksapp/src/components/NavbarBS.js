import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../assets/logo.png';
import AnimCursor from '../components/AnimatedCursor';

function NavbarBootstrap() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">
            <img src={logo} style={{width:50, marginTop: -7}} />
            Shrüming
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/Map">Map</Nav.Link>
            <NavDropdown title="Resources" id="basic-nav-dropdown">
              <NavDropdown.Item href="/Sustainability">Sustainability</NavDropdown.Item>
              <NavDropdown.Item href="/Recipe">
                Recipes
              </NavDropdown.Item>
              <NavDropdown.Item href="/Diy">DIY Mushroom Crafts</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/Plant">
                Plant your own
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <AnimCursor>
      </AnimCursor>  
    </Navbar>
    
  );
}

export default NavbarBootstrap;
