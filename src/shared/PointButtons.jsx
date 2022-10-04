import React from "react";

import OffCavas from './Offcanvas';
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';

const PointButtons = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <Stack gap={3}>
                        <Button variant="primary">2pt</Button>
                        <Button variant="primary">2pt</Button>
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