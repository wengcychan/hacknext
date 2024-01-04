import { Link } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Container } from 'react-bootstrap'
import logo from "../images/logo.png"
import { useState } from 'react';

const Navigation = () => {
  
  const [expanded, setExpanded] = useState(false);

  const handleNavClose = () => setExpanded(false);

  return (
  <Navbar bg="dark" expand="lg" data-bs-theme="dark" className="mb-4 py-3"       expanded={expanded}
  onToggle={() => setExpanded(!expanded)}>
    <Container>
    <Navbar.Brand>
      <img
        src={logo}
        alt="HackNext logo"
        width="auto"
        height="30"
        className="d-inline-block align-top mx-4"
      />
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
        <Nav>
          <Nav.Link href="#" as="span" className="px-3" onClick={handleNavClose}>
            <Link to="/" className="text-decoration-none text-white">
              Home
            </Link>
          </Nav.Link>
          <Nav.Link href="#" as="span" className="px-3" onClick={handleNavClose}>
            <Link to="/event" className="text-decoration-none text-white">
              Event
            </Link>
          </Nav.Link>
          <Nav.Link href="#" as="span" className="px-3" onClick={handleNavClose}>
            <Link to="/business" className="text-decoration-none text-white">
              Business
            </Link>
          </Nav.Link>
        </Nav>
    </Navbar.Collapse>
    </Container>
  </Navbar>
  );
};

export default Navigation;