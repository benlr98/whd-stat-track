import React from 'react';
import PointButtons from './PointButtons';
import StatButtons from './StatButtons';
import DisplayStats from './DisplayStats';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function GamePage() {
  return (
    <Container fluid>
      <Row>
        <Col className='bg-secondary'> <PointButtons /> </Col>
        <Col className="text-center" sm={6}><DisplayStats /></Col>
        <Col className='bg-secondary'> <StatButtons /> </Col>
      </Row>
    </Container>
  );
}

export default GamePage;