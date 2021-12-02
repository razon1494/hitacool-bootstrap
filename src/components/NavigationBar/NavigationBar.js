import React from 'react';
import './NavigationBar.css';

import {Navbar, Container, Nav} from 'react-bootstrap'
import logo from '../../images/logo3.png';
import {Link} from 'react-router-dom/cjs/react-router-dom.min';

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
                <Link className='nav-items fs-5 px-5  py-2 fw-bold text-dark' to="/home">Home</Link>
                <Link className='nav-items fs-5 px-5  py-2 fw-bold text-dark' to="/products">Products</Link>
                <Link className='nav-items fs-5 px-5  py-2 fw-bold text-dark' to="/about">About</Link>
      <Link className='nav-items fs-5 px-5  py-2 fw-bold text-dark' to="/Office">Office</Link>
      <Link className='nav-items fs-5 px-5  py-2 fw-bold text-dark' to="/management">Management</Link>

    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
</div>

    );
};

export default NavigationBar;