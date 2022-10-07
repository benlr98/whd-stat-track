import React, { useState } from "react";

import LiveGameStat from "./LiveGameStat";

import { Container, Row, Col, Button } from "react-bootstrap";


// Build a list of live game stat components to feed to the display stat component
const LiveStatList = (props) => { // props ==> an array of stat objects
    if (props.gameStatList){
        const liveGameStatList = props.gameStatList.map((statObject, index) => {
            const { name, stat, tracking } = statObject;
    
            return (
                <LiveGameStat key={index} name={name} stat={stat} tracking={tracking}/>
            )
        })
        return liveGameStatList;
    } else {
        const liveGameStatList = {};
        return liveGameStatList;
    }

}

const GameStats = (props) => {

    // const [home, away] = props.gameDetails;


    return (
        <>
            {/* <button onClick={() => setStatList(handleClick)}>Add stat</button> */}
            
            <Container>
                <h5 className="mt-4">Live Game Stats</h5>
                <hr />
                <LiveStatList gameStatList={props.statList}/>
            </Container>
        </>
    )
}

export default GameStats;