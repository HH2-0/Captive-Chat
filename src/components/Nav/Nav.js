import React from 'react';
import { Navbar, Container, Nav} from 'react-bootstrap';
import './Nav.css'

function Navs() {
  return (
    <Navbar bg="light" expand="lg">
        <Container>
            <Navbar.Brand to="/">C-Chat</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link to = '/' className='first'>Contact</Nav.Link>
                    <Nav.Link to =''>Login</Nav.Link>
                    <Nav.Link to= ''>Registration</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  );
}

export default Navs;