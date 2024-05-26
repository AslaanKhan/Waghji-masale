import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Highlights from './components/Highlights'
import Model from './components/Model'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ChickenPage from './components/PorductPages/ChickenPage'
import MuttonPage from './components/PorductPages/MutttonPage'
import OtherPage from './components/PorductPages/OtherPage'
import ContactUsPage from './components/ContactUs'

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/chicken" element={<ChickenPage />} />
        <Route path="/mutton" element={<MuttonPage />} />
        <Route path="/others" element={<OtherPage />} />
        <Route path="/contact-us" element={<ContactUsPage />} />
      </Routes>
    </Router>
  )
}

export const Home = () => {
  return (
    <>
      <Hero />
      <Highlights />
      <Model />
    </>
  )
}

export default App
