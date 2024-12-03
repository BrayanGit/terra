import { Container, Row, Col } from 'react-bootstrap';

function Partners() {
  return (
    <Container className="py-5 mt-5">
      <h2 className="mb-4">Nuestros Partners</h2>
      <Row>
        <Col md={4} sm={6} className="mb-4">
          <img src="/img/partner1.png" alt="Partner" className="img-fluid"/>
        </Col>
      </Row>
    </Container>
  );
}

export default Partners;
