import React, { useState } from "react";

import LiveGameStat from "./LiveGameStat";

import { Container, Row, Col, Button } from "react-bootstrap";


// Build a list of live game stat components to feed to the display stat component
const LiveStatList = (props) => { // props ==> an array of stat objects
    const liveGameStatList = props.gameStatList.map((statObject, index) => {
        const { name, stat, tracking } = statObject;

        return (
            <LiveGameStat key={index} name={name} stat={stat} tracking={tracking}/>
        )
    })

    return <>{liveGameStatList}</>
}

const DisplayStats = () => {

    const initialList = [{name: "MJ", stat: "DUNK", tracking: "4"}]

    const [statList, setStatList] = useState(initialList);

    const handleClick = () => {
        console.log('test click');
    }

    return (
        <>
            <button onClick={() => setStatList([{name: "testBen", stat: "2PT", tracking: "6"}, ...statList])}>Add stat</button>
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
                <LiveStatList gameStatList={statList}/>
            </Container>
        </>
    )
}

export default DisplayStats;