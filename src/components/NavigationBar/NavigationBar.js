import React from 'react';
import './NavigationBar.css';

import {Navbar, Container, Nav} from 'react-bootstrap'
import logo from '../../images/logo3.png';

const NavigationBar = () => {
    return (
        <div>
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
  <Container>
  <Navbar.Brand className='logo' href="#home">
                <img src={logo} alt="" />
            </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
    </Nav>
    <Nav>
      <Nav.Link className='nav-items fs-5 px-5  py-2 fw-bold text-dark' href="#home">Home</Nav.Link>
      <Nav.Link className='nav-items fs-5 px-5  py-2 fw-bold text-dark' href="#Office">Office</Nav.Link>
      <Nav.Link className='nav-items fs-5 px-5  py-2 fw-bold text-dark' href="#management">Management</Nav.Link>
      <Nav.Link className='nav-items fs-5 px-5  py-2 fw-bold text-dark' href="#products">Products</Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
</div>

    );
};

export default NavigationBar;