import React from 'react';


function App() {

  const player = {
    firstname: 'Ben',
    lastname: 'Rich',
    Twos: 0,
    Ones: 0,
    dreb: 0,
    oreb: 0,
    to: 0,
    stl: 0,
    asst: 0,
    blk: 0
  }

  const teams = {
    home: 'Cheerios',
    away: 'Cocoa Pebbles',
  }

  const handleButtonClick = () => {
    //do something
  }

  return (
    <div className="flex-row">
      <div className="flex-small">
        <div className="flex-row">
          <div className="flex-small">
            <button>2pt</button>
            <button>2pt</button>
          </div>
          <div className="flex-small">
            <button>1pt</button>
            <button>1pt</button>
            <button>Dunk</button>
          </div>
          <div className="flex-small">
            <button>Main Menu</button>
            <button>Back</button>
          </div>
        </div>
      </div>
      <div className="flex-small">
        <div className="flex-row">
          <div className="flex-small">
            <h3>Cheerios</h3>
            <h3>Cocoa Pebbles</h3>
          </div>
          <div className="flex-small">
            <h3>10</h3>
            <h3>8</h3>
          </div>
        </div>
        <p>{player.firstname}</p>
        <p>{player.firstname}</p>
        <p>{player.firstname}</p>
      </div>
      <div className="flex-small">
        <div className="flex-row">
            <div className="flex-small">
              <button>def</button>
              <button>off</button>
            </div>
            <div className="flex-small">
              <button>to</button>
              <button>stl</button>
              <button>blk</button>
            </div>
            <div className="flex-small">
              <button>asst</button>
              <button>blk</button>
            </div>
          </div>
      </div>
    </div>
  );
}

export default App;


