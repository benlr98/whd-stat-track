import React, { useState } from 'react';

import * as Constants from '../constants/index';

import Button from 'react-bootstrap/Button';
import { Row, Col, Stack } from 'react-bootstrap';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const StatButton = ({handleAddStat, buttonData}) => {
  const [show, setShow] = useState(false);

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
              {Constants.testHomePlayers.map((player, index) => {
                return (
                  <Button key={index} name={player.playername} onClick={() => handleClick(player.playername, buttonData, 'home')} size="sm">{player.playername}</Button>
                )
              })}
              </Stack>
            </Col>
            <Col>
              <Stack gap={3}>
              {Constants.testAwayPlayers.map((player, index) => {
                return (
                  <Button variant={'warning'} key={index} name={player.playername} onClick={() => handleClick(player.playername, buttonData, 'away')} size="sm">{player.playername}</Button>
                )
              })}
              </Stack>
            </Col>
          </Row>
          
          {/* <Button name="Ben" onClick={() => handleClick('Ben', buttonData, 'home')} size="sm">Ben</Button> */}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default StatButton;