// Imports
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import MainPage from './Components/MainPage/MainPage';
import GamePage from './Components/GameDevPage/GamePage';
import WebPage from './Components/WebDevPage/WebPage';


function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/game-dev" element={<GamePage />} />
      <Route path="/web-dev" element={<WebPage />} />
    </Routes>
    </>
  )
}

export default App
