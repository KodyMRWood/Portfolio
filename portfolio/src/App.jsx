// Imports
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


// Page Imports
import MainPage from './Components/MainPage/MainPage';
import GamePage from './Components/GameDevPage/GamePage';
import WebPage from './Components/WebDevPage/WebPage';
import AboutPage from './Components/AboutPage/AboutPage';
import ContactPage from './Components/ContactPage/ContactPage';


function App() {

  return (
    <>
    <Routes>
      <Route path="/Portfolio" element={<MainPage />} />
      <Route path="/Portfolio/game-dev" element={<GamePage />} />
      <Route path="/Portfolio/web-dev" element={<WebPage />} />
      <Route path="/Portfolio/about" element={<AboutPage/>} />
      <Route path="/Portfolio/contact" element={<ContactPage/>} />
      <Route path="/Portfolio/projects" element={<GamePage/>} />
    </Routes>
    </>
  )
}

export default App
