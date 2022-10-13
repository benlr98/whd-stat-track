import React from 'react';
import GamePage from './pages/GamePage';
import './scss/main.scss';

import { Route, Routes } from "react-router-dom";

import Create from './components/Create';


function App() {
  return (
    <div>
      {/* <GamePage /> */}
      <Routes>
      <Route exact path="/" element={<GamePage />} />
       <Route path="/create" element={<Create />} />
     </Routes>
    </div>
  );
}
export default App;
