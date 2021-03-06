import { Col, Container, Row } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className="text-center py-3">
            Copyright &copy; 2021 <strong>Balloon Brace&reg;</strong> for Costal Flare
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
