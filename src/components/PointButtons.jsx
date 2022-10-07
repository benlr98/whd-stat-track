import React from "react";

import OffCavas from './StatButton';
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';

const PointButtons = (props) => {

    
    
    const [home, away] = props.gameDetails;

    const handleClick = (stat) => {
        props.onStatButtonClick(stat);
    }

    
    
    return (
        <Container>
            <Row>
                <Col>
                    <Stack gap={3}>
                        <Button id="2ptMade" value="2" onClick={() => handleClick("oreb")} variant="primary">2pt</Button>
                        <Button id="2ptMiss" variant="primary">2pt</Button>
                    </Stack>
                </Col>
                <Col>
                    <Stack gap={3}>
                        <Button variant="primary">1pt</Button>
                        <Button variant="primary">1pt</Button>
                    </Stack>
                </Col>
                <Button className="mt-2" variant="primary">Dunk</Button>
                <OffCavas />
            </Row>
        </Container>
    );
}

export default PointButtons;