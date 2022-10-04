import React from "react";

import LiveGameStat from "./LiveGameStat";

import { Container, Row, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid} from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used





const DisplayStats = () => {
    return (
        <>
            <Row >
                <Col className="h5">Cheerios</Col>
                <Col>10</Col>
            </Row>
            <Row>
                <Col className="h5">Lucky Charms</Col>
                <Col>10</Col>
            </Row>
            <Container>
                <h5 className="mt-4">Live Game Stats</h5>
                <hr />
                <Row>
                    <Col><span className="fw-semibold">OREB</span> - Ben Rich - (5) </Col>
                    <Col><Button size="sm" variant="danger"><FontAwesomeIcon icon={solid('x')} /></Button></Col>
                </Row>
                <LiveGameStat name="Larry Bird" stat="2PT" tracking="4"/>
            </Container>
        </>
    )
}

export default DisplayStats;