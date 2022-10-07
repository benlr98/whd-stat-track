import React from "react";

import LiveGameStat from "./LiveGameStat";

import { Container } from "react-bootstrap";


// Build a list of live game stat components to feed to the display stat component
const LiveStatList = (props) => { // props ==> an array of stat objects
    if (props.gameStatList){
        const liveGameStatList = props.gameStatList.map((statObject, index) => {
            const { id, name, stat, tracking, team, pointValue } = statObject;
    
            return (
                <LiveGameStat handleRemoveStat={props.handleRemoveStat} key={index} id={id} team={team} pointValue={pointValue} name={name} stat={stat} tracking={tracking}/>
            )
        })
        return liveGameStatList;
    } else {
        const liveGameStatList = {};
        return liveGameStatList;
    }

}

const GameStats = (props) => {

    



    return (
        <>
            <Container>
                <h5 className="mt-4">Live Game Stats</h5>
                <hr />
                <LiveStatList handleRemoveStat={props.handleRemoveStat} gameStatList={props.statList}/>
            </Container>
        </>
    )
}

export default GameStats;