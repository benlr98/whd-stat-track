import React, { useState } from 'react';


import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const StatButton = ({handleStatClick, buttonData}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleClick = (playername, buttonData, team) => {
    handleStatClick(playername, buttonData, team);
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
          <Button name="Ben" onClick={() => handleClick('Ben', buttonData, 'home')} size="sm">Ben</Button>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default StatButton;