import React from "react";

import { Row, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid} from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used

const LiveGameStat = (props) => {

    return (
        <Row>
            <Col><span className="fw-semibold">{props.stat}</span> - {props.name} - ({props.tracking}) </Col>
            <Col><Button size="sm" variant="danger"><FontAwesomeIcon icon={solid('x')} /></Button></Col>
        </Row>
    )
}

export default LiveGameStat;