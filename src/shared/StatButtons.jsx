import React from "react";

import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';

const StatButtons = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <Stack gap={3}>
                        <Button variant="primary">oreb</Button>
                        <Button variant="primary">to</Button>
                        <Button variant="primary">asst</Button>
                    </Stack>
                </Col>
                <Col>
                    <Stack gap={3}>
                        <Button variant="primary">dreb</Button>
                        <Button variant="primary">stl</Button>
                        <Button variant="primary">blk</Button>
                    </Stack>
                </Col>
            </Row>
        </Container>
    );
}

export default StatButtons;