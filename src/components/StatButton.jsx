import React, { useState, useEffect } from 'react';

import * as Constants from '../constants/index';

import Button from 'react-bootstrap/Button';
import { Row, Col, Stack } from 'react-bootstrap';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const StatButton = ({handleAddStat, buttonData, players, teams}) => {
  const [show, setShow] = useState(false);

  const { home, away } = teams;
  const homeplayers = players.filter((player) => player.teamname === home);
  const awayplayers = players.filter((player) => player.teamname === away);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleClick = (playername, buttonData, team) => {

    
    handleAddStat(playername, buttonData, team);
    handleClose();
  }

  



  return (
    <>
      <Button size="sm" variant={buttonData.primary ? "primary" : "danger"} onClick={handleShow}>
       {buttonData.displayName}
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Players</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Row>
            {/* Loop over Home and Away players to create player selection buttons in Offcanvas popup */}
            <Col>
              <Stack gap={3}>
              {homeplayers.map((player, index) => {
                return (
                  <Button key={index} name={player._id} onClick={() => handleClick(player, buttonData, 'home')} size="sm">{player.fullname}</Button>
                )
              })}
              </Stack>
            </Col>
            <Col>
              <Stack gap={3}>
              {awayplayers.map((player, index) => {
                return (
                  <Button variant={'warning'} key={index} name={player._id} onClick={() => handleClick(player, buttonData, 'away')} size="sm">{player.fullname}</Button>
                )
              })}
              </Stack>
            </Col>
          </Row>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default StatButton;