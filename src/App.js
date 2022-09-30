import React from 'react';
import Header from './shared/Header';
import './scss/main.scss';


function App() {

  const handleButtonClick = () => {
    //do something
  }

  return (
      <Header />
  );
}

export default App;


/**
 * 
 * <div className="flex-row">
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
        <p>Ben</p>
        <p>Ben</p>
        <p>Ben</p>
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
 */

