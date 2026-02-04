// Imports
import {
  Routes,
  Route,
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
      <Route path="/" element={<MainPage />} />
      <Route path="/game-dev" element={<GamePage />} />
      <Route path="/web-dev" element={<WebPage />} />
      <Route path="/about" element={<AboutPage/>} />
      <Route path="/contact" element={<ContactPage/>} />

      {/* Game Project Routes */}
      <Route path="/Barbie Dreamhouse Adventures" element={<ProjectPage name="Barbie Dreamhouse Adventures"/>} />
      <Route path="/Barbie Magical Fashion" element={<ProjectPage name="Barbie Magical Fashion"/>} />
      <Route path="/Lunch Boxing" element={<ProjectPage name="Lunch Boxing"/>} />
      <Route path="/Dozer Derby: Jungle Jewels" element={<ProjectPage name="Dozer Derby: Jungle Jewels"/>} />
      <Route path="/Banquet Brawl" element={<ProjectPage name="Banquet Brawl"/>} />
      <Route path="/Downroot" element={<ProjectPage name="Downroot"/>} />
      <Route path="/Meteor Mayhem" element={<ProjectPage name="Meteor Mayhem"/>} />
      
      <Route path="/Postal Panic" element={<ProjectPage name="Postal Panic"/>} />
      <Route path="/Tactile" element={<ProjectPage name="Tactile"/>} />
      <Route path="/Slimeball" element={<ProjectPage name="Slimeball"/>} />
      <Route path="/Augmented Reality Story Book" element={<ProjectPage name="Augmented Reality Story Book"/>} />
      <Route path="/Celestial" element={<ProjectPage name="Celestial"/>} />
      <Route path="/Hamsterball" element={<ProjectPage name="Hamsterball"/>} />
      <Route path="/Mobile Pong" element={<ProjectPage name="Mobile Pong"/>} />
      <Route path="/MORPPP" element={<ProjectPage name="MORPPP"/>} />
      <Route path="/Orbit" element={<ProjectPage name="Orbit"/>} />
      <Route path="/Physiological Adaptive Module" element={<ProjectPage name="Physiological Adaptive Module"/>} />
      <Route path="/Project Aeromail" element={<ProjectPage name="Project Aeromail"/>} />
      <Route path="/Scrapper Dome" element={<ProjectPage name="Scrapper Dome"/>} />
      <Route path="/Ship Scavenger" element={<ProjectPage name="Ship Scavenger"/>} />
      <Route path="/Video Call Operator" element={<ProjectPage name="Video Call Operator"/>} />
      <Route path="/Project Olympus" element={<ProjectPage name="Project Olympus"/>} />


      {/* Web Project Routes */}
      <Route path="/Portfolio Website" element={<ProjectPage name="Portfolio Website"/>} />
      <Route path="/Little Lemon Restaurant" element={<ProjectPage name="Little Lemon Restaurant"/>} />
      <Route path="/Full Stack Project" element={<ProjectPage name="Full Stack Project"/>} />
    </Routes>
    </>
  )
}

export default App
