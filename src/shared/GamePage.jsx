import React, { useState } from 'react';
import PointButtons from './PointButtons';
import StatButtons from './StatButtons';
import DisplayStats from './DisplayStats';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function GamePage() {

  const initialList = [{name: "MJ", stat: "DUNK", tracking: "4"}]

  const [statList, setStatList] = useState(initialList);

  const handleClick = (name, stat, tracking) => {
    console.log(name, stat, tracking, 'Stat button clicked and now shown on GamePage');
    setStatList([{name: name, stat: stat, tracking: tracking}, ...statList]);
}

  return (
    <Container fluid>
      <Row>
        <Col className='bg-secondary'> <PointButtons /> </Col>
        <Col className="text-center" sm={6}><DisplayStats statList={statList} /></Col>
        <Col className='bg-secondary'> <StatButtons onStatButtonClick={handleClick} /> </Col>
      </Row>
    </Container>
  );
}

export default GamePage;