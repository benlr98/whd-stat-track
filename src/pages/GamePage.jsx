import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

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
  const [ teams, setTeams ] = useState({home: "", away: ""});

  //TODO: add functionality here from useeffect below
  const [players, setPlayers] = useState([]);

  const { gameId } = useParams();

  useEffect(() => {
    const url = `http://localhost:5000/api/games/getOne/${gameId}`;
    async function fetchGame() {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setTeams(data.competitors);
        setScore(data.score);
        setPlayers(data.players);
        setStatList(data.playList);
      } catch (error) {
        console.log(error);
      }
    }
    fetchGame();
    
    
  }, [gameId]);


  const addStat = async (player, buttonData) => {
    let away_score = score.away;
    let home_score = score.home;

    if (player.teamname === teams.home) {
      home_score += buttonData.pointValue
    } else {
      away_score += buttonData.pointValue
    }

    // Build stat object for PUT request
    const data = {
      away_score: away_score,
      home_score: home_score,
      team: player.teamname,
      elapsed: 0,
      playerId: player._id,
      playerName: player.fullname,
      points: buttonData.pointValue,
      type: buttonData.name,
      result: "NA",
      original_x: 50,
      original_y: 50
    }

    const url = `http://localhost:5000/api/games/addPlay/${gameId}`;
    const settings = {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    }
      try {
        const response = await fetch(url, settings);
        const statData = await response.json();
        return statData;
        
      } catch (error) {
        console.log(error);
      }

  }

  const removeStat = async (playId) => {
    const data = { _id: playId }
    const url = `http://localhost:5000/api/games/delete/${gameId}`;
    const settings = {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    }
      try {
        const response = await fetch(url, settings);
        const statData = await response.json();
        return statData;
        
      } catch (error) {
        console.log(error);
      }
  }

  const handleAddStat = (player, buttonData, team) => {

    const statObject = addStat(player, buttonData);

    const point = buttonData.pointValue;

    setStatList(prevState => {
      return [
        statObject, 
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
    removeStat(statId);

    setStatList(prevState => {
      return [...prevState.filter((statObject) => statObject._id !== statId)]
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
          <GameScore teams={teams} score={score} />
          <GameStats handleRemoveStat={handleRemoveStat} statList={statList} />
        </Col>
        <Col className='bg-secondary'>
          <Container className='text-center'>
              <Row>
                <Col sm={7}>
                  <StatButton teams={teams} players={players} buttonData={Constants.BUTTONS.pointButtons.twoMade} handleAddStat={handleAddStat}/>
                  <StatButton teams={teams} players={players} buttonData={Constants.BUTTONS.pointButtons.oneMade} handleAddStat={handleAddStat}/>
                  <StatButton teams={teams} players={players} buttonData={Constants.BUTTONS.pointButtons.dunk} handleAddStat={handleAddStat}/>
                </Col>
                <Col>
                  <StatButton teams={teams} players={players} buttonData={Constants.BUTTONS.pointButtons.twoMiss} handleAddStat={handleAddStat}/>
                  <StatButton teams={teams} players={players} buttonData={Constants.BUTTONS.pointButtons.oneMiss} handleAddStat={handleAddStat}/>
                </Col>
              </Row>
              <Row className="p-4">
                {Constants.BUTTONS.testButtons.map((button, index) => {
                  return (
                    <Col key={index}><StatButton teams={teams} players={players} buttonData={button} handleAddStat={handleAddStat} /> </Col>
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


