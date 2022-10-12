import React, { useState } from 'react';
import GameStats from '../components/GameStats';
import GameScore from '../components/GameScore';
import StatButton from '../components/StatButton';

import * as Constants from '../constants';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function GamePage() {
  
  const [statList, setStatList] = useState([]);
  const [score, setScore] = useState({home: 0, away: 0});
  const [players, setPlayers] = useState();
  
  /** 
   * Potential future states to create.
   **********************
  const [liveStat, setLiveStat] = useState();
  const [gameDetails, setGameDetails] = useState(initialGameDetails);
  const [playerStat, setPlayerStat] = [Constants.testInitialPlayerStats];
   */

  const handleAddStat = (playername, buttonData, team) => {
    const point = buttonData.pointValue;

    setStatList(prevState => {
      const length = prevState.length - 1;
      const id = length >= 0 ? prevState[0].id + 1 : 1;
      return [
        {
          id: id, 
          name: playername, 
          stat: buttonData.displayName, 
          tracking: 0, 
          pointValue: point,
          team: team,
        },
         ...prevState
      ]
    })

    if (point) {
        setScore(prevState => {
        return {...prevState, [team]: prevState[team] + point};
      })
    }
  }

  const handleRemoveStat = (statId, pointValue, team) => {
    setStatList(prevState => {
      return [...prevState.filter((statObject) => statObject.id !== statId)]
    })

    if (pointValue) {
      setScore(prevState => {
      return {...prevState, [team]: prevState[team] - pointValue};
    })
  }

  }

  return (
    <Container fluid>
      <Row>
        <Col className="text-center" sm={6}>
          <GameScore teams={Constants.TESTteamName} score={score} />
          <GameStats handleRemoveStat={handleRemoveStat} statList={statList} />
        </Col>
        <Col className='bg-secondary'>
          <Container className='text-center'>
              <Row>
                <Col sm={7}>
                  <StatButton buttonData={Constants.BUTTONS.pointButtons.twoMade} handleAddStat={handleAddStat}/>
                  <StatButton buttonData={Constants.BUTTONS.pointButtons.oneMade} handleAddStat={handleAddStat}/>
                  <StatButton buttonData={Constants.BUTTONS.pointButtons.dunk} handleAddStat={handleAddStat}/>
                </Col>
                <Col>
                  <StatButton buttonData={Constants.BUTTONS.pointButtons.twoMiss} handleAddStat={handleAddStat}/>
                  <StatButton buttonData={Constants.BUTTONS.pointButtons.oneMiss} handleAddStat={handleAddStat}/>
                </Col>
              </Row>
              <Row className="p-4">
                {Constants.BUTTONS.testButtons.map((button, index) => {
                  return (
                    <Col key={index}><StatButton buttonData={button} handleAddStat={handleAddStat} /> </Col>
                  )
                })}
              </Row>
              <Row>
                <div>Future Navigation</div>
              </Row>
            </Container>
        </Col>
      </Row>
    </Container>
  );
}

export default GamePage;


