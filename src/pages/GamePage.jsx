import React, { useState } from 'react';
import PointButtons from '../components/PointButtons';
import GameStats from '../components/GameStats';
import GameScore from '../components/GameScore';
import StatButton from '../components/StatButton';

import * as Constants from '../constants';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';

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

  

  const updateGameDetails = (teamname, playername, stat) => {

  }

  const handleStatClick = (playername, buttonData, team) => {
    const point = buttonData.pointValue;

    setStatList(prevState => {
      return [{name: playername, stat: buttonData.displayName, tracking: 0}, ...prevState]
    })

    if (point) {
      console.log(point);

      setScore(prevState => {
        console.log(team);
        console.log(prevState[team]);
        return {...prevState, [team]: prevState[team] + point};
      })
    } 
    else console.log(false);
  }

  return (
    <Container fluid>
      <Row>
        <Col className="text-center" sm={6}>
          <GameScore teams={Constants.TESTteamName} score={score} />
          <GameStats statList={statList} />
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
                <Col><StatButton buttonData={Constants.BUTTONS.statButtons.oreb} handleStatClick={handleStatClick}/></Col>
                <Col><StatButton buttonData={Constants.BUTTONS.statButtons.dreb} handleStatClick={handleStatClick}/></Col>
                <Col><StatButton buttonData={Constants.BUTTONS.statButtons.to} handleStatClick={handleStatClick}/></Col>
                <Col><StatButton buttonData={Constants.BUTTONS.statButtons.blk} handleStatClick={handleStatClick}/></Col>
                <Col><StatButton buttonData={Constants.BUTTONS.statButtons.stl} handleStatClick={handleStatClick}/></Col>
                <Col><StatButton buttonData={Constants.BUTTONS.statButtons.ast} handleStatClick={handleStatClick}/></Col>
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


