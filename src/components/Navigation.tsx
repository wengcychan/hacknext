import { NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Container } from 'react-bootstrap'
import logo from "../assets/logo.png"
import { useState } from 'react';


const Navigation = () => {
  
  const [expanded, setExpanded] = useState(false);

  const handleNavClose = () => setExpanded(false);

  return (
  <Navbar bg="dark" expand="lg" data-bs-theme="dark" className="mb-4 py-3" expanded={expanded} onToggle={() => setExpanded(!expanded)}>
    <Container>
    <Navbar.Brand>
      <img
        src={logo}
        alt="HackNext logo"
        width="173"
        height="30"
        className="d-inline-block align-top mx-4"
      />
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
        <Nav>
          <NavLink to="/" onClick={handleNavClose} className="nav-link" style={({ isActive }) => (isActive ? {color: '#72e0ff'}: {})}>
            Home
          </NavLink>
          <NavLink to="/event" onClick={handleNavClose} className="nav-link" style={({ isActive }) => (isActive ? {color: '#72e0ff'}: {})}>
            Event
          </NavLink>
          <NavLink to="/business" onClick={handleNavClose} className="nav-link" style={({ isActive }) => (isActive ? {color: '#72e0ff'}: {})}>
            Business
          </NavLink>
        </Nav>
    </Navbar.Collapse>
    </Container>
  </Navbar>
  );
};

export default Navigation;