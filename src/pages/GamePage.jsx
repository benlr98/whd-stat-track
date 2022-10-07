import React, { useState } from 'react';
import GameStats from '../components/GameStats';
import GameScore from '../components/GameScore';
import StatButton from '../components/StatButton';

import * as Constants from '../constants';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function GamePage() {
  
  const initialStatList = []
  const [statList, setStatList] = useState(initialStatList);
  const [score, setScore] = useState({home: 0, away: 0});
  
  /** 
   * Potential future states to create.
   **********************
  const [liveStat, setLiveStat] = useState();
  const [gameDetails, setGameDetails] = useState(initialGameDetails);
  const [player, setPlayer] = useState();
  const [playerStat, setPlayerStat] = [Constants.testInitialPlayerStats];
   */

  const handleStatClick = (playername, buttonData, team) => {
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
                  <StatButton buttonData={Constants.BUTTONS.pointButtons.twoMade} handleStatClick={handleStatClick}/>
                  <StatButton buttonData={Constants.BUTTONS.pointButtons.oneMade} handleStatClick={handleStatClick}/>
                  <StatButton buttonData={Constants.BUTTONS.pointButtons.dunk} handleStatClick={handleStatClick}/>
                </Col>
                <Col>
                  <StatButton buttonData={Constants.BUTTONS.pointButtons.twoMiss} handleStatClick={handleStatClick}/>
                  <StatButton buttonData={Constants.BUTTONS.pointButtons.oneMiss} handleStatClick={handleStatClick}/>
                </Col>
              </Row>
              <Row className="p-4">
                {Constants.BUTTONS.testButtons.map((button, index) => {
                  return (
                    <Col key={index}><StatButton buttonData={button} handleStatClick={handleStatClick} /> </Col>
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


