import './App.css';
import { Col, Container, Row } from 'react-bootstrap';

function App() {
  return (
    <Container fluid className="bg-primary"  style={{
      height: "100vh"
      
    }}>
    <Row className='h-100 align-items-center justify-content-center' >
      <Col >
      <Container className='container-xl bg-secondary'>
Test
      </Container>
      </Col>
    </Row>
    </Container>
  );
}

export default App;
