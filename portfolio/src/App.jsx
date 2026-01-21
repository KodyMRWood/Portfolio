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
import ProjectPage from './Components/PortfolioPage/ProjectPage';


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

      {/* Game Project Routes */}
      <Route path="/Portfolio/Barbie Dreamhouse Adventure" element={<ProjectPage name="Barbie Dreamhouse Adventure"/>} />
      <Route path="/Portfolio/Barbie Magical Fashion" element={<ProjectPage name="Barbie Magical Fashion"/>} />
      <Route path="/Portfolio/Lunch Boxing" element={<ProjectPage name="Lunch Boxing"/>} />
      <Route path="/Portfolio/Banquet Brawl" element={<ProjectPage name="Banquet Brawl"/>} />
      <Route path="/Portfolio/Downroot" element={<ProjectPage name="Downroot"/>} />
      <Route path="/Portfolio/Meteor Mayhem" element={<ProjectPage name="Meteor Mayhem"/>} />
      <Route path="/Portfolio/Tactile" element={<ProjectPage name="Tactile"/>} />
      <Route path="/Portfolio/Slimeball" element={<ProjectPage name="Slimeball"/>} />
      <Route path="/Portfolio/Augemented Reality Story Book" element={<ProjectPage name="Augemented Reality Story Book"/>} />
      <Route path="/Portfolio/Celestial" element={<ProjectPage name="Celestial"/>} />
      <Route path="/Portfolio/Hamsterball" element={<ProjectPage name="Hamsterball"/>} />
      <Route path="/Portfolio/Mobile Pong" element={<ProjectPage name="Mobile Pong"/>} />
      <Route path="/Portfolio/MORPPP" element={<ProjectPage name="MORPPP"/>} />
      <Route path="/Portfolio/Orbit" element={<ProjectPage name="Orbit"/>} />
      <Route path="/Portfolio/PAM" element={<ProjectPage name="PAM"/>} />
      <Route path="/Portfolio/Project Aeromail" element={<ProjectPage name="Project Aeromail"/>} />
      <Route path="/Portfolio/Scrapper Dome" element={<ProjectPage name="Scrapper Dome"/>} />
      <Route path="/Portfolio/Ship Scavenger" element={<ProjectPage name="Ship Scavenger"/>} />
      <Route path="/Portfolio/Video Call Operator" element={<ProjectPage name="Video Call Operator"/>} />
      <Route path="/Portfolio/Project Olympus" element={<ProjectPage name="Project Olympus"/>} />


      {/* Web Project Routes */}
      <Route path="/Portfolio/Portfolio Site" element={<ProjectPage name="Portfolio Site"/>} />
      <Route path="/Portfolio/Little Lemon Restaurant" element={<ProjectPage name="Little Lemon Restaurant"/>} />
      <Route path="/Portfolio/Web Dev Project" element={<ProjectPage name="Web Dev Project"/>} />
    </Routes>
    </>
  )
}

export default App
