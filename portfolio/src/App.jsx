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
      <Route path="/" element={<MainPage />} />
      <Route path="/game-dev" element={<GamePage />} />
      <Route path="/web-dev" element={<WebPage />} />
      <Route path="/about" element={<AboutPage/>} />
      <Route path="/contact" element={<ContactPage/>} />
      <Route path="/projects" element={<GamePage/>} />
      
    </Routes>
    </>
  )
}

export default App
