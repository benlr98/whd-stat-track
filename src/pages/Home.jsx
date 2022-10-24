import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

const Home = () => {
  // TODO: Implement loading state
  // const [loading, setLoading] = useState(true);
  const [gameList, setGameList] = useState([]);
  const [teamList, setTeamList] = useState([]);
  const [playerList, setPlayerList] = useState([]);
  
  const navigate = useNavigate();

  // react-bootstrap Modal methods and state
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // TODO: fetch games is duplicated in code at the moment
  const fetchGames = async () => {
    const url = "http://localhost:5000/api/games/getAll";
    try {
      const response = await fetch(url);
      const data = await response.json();
      setGameList(data);
    } catch (error) {
      console.log(error);
    }
  }

  // GET all game data
  useEffect(() => {
    const url = "http://localhost:5000/api/games/getAll";
    async function fetchGames() {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setGameList(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchGames();
  }, []);

  // GET all player data
  useEffect(() => {
    const url = "http://localhost:5000/api/players/getAll";
    async function fetchPlayers() {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setPlayerList(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchPlayers();
  }, []);

  // GET all teams 
  useEffect(() => {
    const url = "http://localhost:5000/api/players/getTeams";
    async function fetchTeams() {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setTeamList(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchTeams();
  }, []);

  // Game click navigates to game page
  const handleClick = (game) => {
    navigate(`/game/${game._id}`)
  };

  const handleSubmit =  async (event) => {
    event.preventDefault();

    // isolate variables to include in game POST object
    const hometeam = event.target.hometeam.value;
    const awayteam = event.target.awayteam.value;
    const statkeeper = event.target.statkeeper.value;
    // To be filled with players from selected teams
    let players = [];

    // Add players to game if they are on one of the selected teams
    playerList.map((player) => {
      const teamname = player.teamname;
      if (teamname === hometeam || teamname === awayteam) {
        players.push(player);
      }
      return players
    });

    // create new game object to post
    const data = {
      season: "2022 WHD Tourney",
      competitors: {
        home: hometeam,
        away: awayteam,
      },
      score: {
        home: 0,
        away: 0
      },
      statkeeper: statkeeper,
      players: players
    }
    
    const url = "http://localhost:5000/api/games/post";
    const settings = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    }
      try {
        const response = await fetch(url, settings);
        console.log(response.json());
        
      } catch (error) {
        console.log(error);
      }

      /**
       * Currently using this function because I need the _id attached to the gameList objects
       * or else the game button click with error with url having no gameID param
       *  */ 
      fetchGames();

      // close the opened modal
      handleClose();
  }

  return (
    <>
      <h1>Games</h1>

      <Button variant="primary" onClick={handleShow}>
        Create Game
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>New Game</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form id="create-game" onSubmit={handleSubmit}>
            <Form.Select className="mb-3" name="hometeam">
              <option>Home Team</option>
              {teamList.map((team, index) => {
                return (
                  <option key={index} value={team._id}>{team._id}</option>
                )
              })}
              <option>Other</option>
            </Form.Select>
            <Form.Select className="mb-3" name="awayteam">
              <option>Away Team</option>
              {teamList.map((team, index) => {
                return (
                  <option key={index} value={team._id}>{team._id}</option>
                )
              })}
              <option>Other</option>
            </Form.Select>
            <Form.Select className="mb-3" name="statkeeper">
              <option>Stat Keeper</option>
              <option value="Ben Rich">Ben Rich</option>
              <option value="Bob Builder">Bob Builder</option>
              <option value="Lebron James">Lebron James</option>
            </Form.Select>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" type="submit" form="create-game">
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      {gameList.map((game, index) => {
        return (
          <Button onClick={() => handleClick(game)} key={index}>
            {game.competitors !== undefined ? `${game.competitors.home} vs ${game.competitors.away}` : game.created_date}
          </Button>
        );
      })}
    </>
  );
};

export default Home;
