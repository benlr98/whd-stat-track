import React from "react";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const GameScore = (props) => {
    const home = props.teams.home;
    const away = props.teams.away;

    // console.log(props.score);


    return (
        <>
            <Row>
                <Col className="h5">{home.teamname}</Col>
                <Col>{props.score.home}</Col>
            </Row>
            <Row>
                <Col className="h5">{away.teamname}</Col>
                <Col>{props.score.away}</Col>
            </Row>
        </>
    )
}

export default GameScore;