import React, { useContext } from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import ProductContext from './GlobalProvider/Context'
import ContactUsPage from './components/ContactUs'
import Hero from './components/Hero'
import Highlights from './components/Highlights'
import Navbar from './components/Navbar'
import ChickenPage from './components/PorductPages/ChickenPage'
import MuttonPage from './components/PorductPages/MutttonPage'
import OtherPage from './components/PorductPages/OtherPage'
import Products from './components/PorductPages/Products'
//...
import * as Sentry from "@sentry/react"
import Footer from './components/Footer'
import Features from './components/Features'

const App = () => {
  const { searchQuery } = useContext(ProductContext)

  return (
    <Router>
      <Navbar />
      {searchQuery === '' ?
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/chicken" element={<ChickenPage />} />
          <Route path="/mutton" element={<MuttonPage />} />
          <Route path="/others" element={<OtherPage />} />
          <Route path="/contact-us" element={<ContactUsPage />} />
        </Routes>
        : <Products />
      }
    </Router>
  )
}

export const Home = () => {
  return (
    <>
      <Hero />
      <Highlights />
      <Features />
      <Footer />
      {/* <Model /> */}
    </>
  )
}

export default Sentry.withProfiler(App);
