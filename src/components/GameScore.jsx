import React from "react";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const GameScore = (props) => {
    const { home, away } = props.teams;

    


    // console.log(props.score);


    return (
        <>
            <Row>
                <Col className="h5">{home}</Col>
                <Col>{props.score.home}</Col>
            </Row>
            <Row>
                <Col className="h5">{away}</Col>
                <Col>{props.score.away}</Col>
            </Row>
        </>
    )
}

export default GameScore;