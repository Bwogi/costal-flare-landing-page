import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { BrowserRouter as Router, Link } from 'react-router-dom';

const Header = () => {
  return (
    <Router>
      {/* <header id="header" className="header fixed-top"> */}
      <Navbar bg="light" variant="light" className="header fixed-top">
        <Container>
          <Nav className="me-auto">
            <Link to="/">
              <Nav.Link>About the Brace</Nav.Link>
            </Link>
            <Link to="/buy">
              <Nav.Link>What is a Rib Flare Condition</Nav.Link>
            </Link>
          </Nav>
          <Link to="/">
            <Navbar.Brand>
              <span style={{ fontWeight: 'bold' }}>Balloon Brace&reg;</span> for Costal Flare
            </Navbar.Brand>
          </Link>
          <Nav className="me-auto">
            <Link to="/pricing">
              <Nav.Link>What they are saying</Nav.Link>
            </Link>
          </Nav>
          <Link to="/">
            <Button variant="success">Order Now</Button>{' '}
          </Link>
        </Container>
      </Navbar>
    </Router>
  );
};

export default Header;
