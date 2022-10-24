import React from 'react';
import GamePage from './pages/GamePage';
import './scss/main.scss';

import { Route, Routes } from "react-router-dom";

import Create from './components/Create';
import RecordList from './components/RecordList';
import Home from './pages/Home';


function App() {
  return (
    <div>
      {/* <GamePage /> */}
      <Routes>
      {/* <Route exact path="/" element={<GamePage />} /> */}
      <Route exact path="/game/:gameId" element={<GamePage />} />
      <Route path="/create" element={<Create />} />
      <Route path="/list" element={<RecordList />} />
      <Route path="/" element={<Home />} />
     </Routes>
    </div>
  );
}
export default App;
