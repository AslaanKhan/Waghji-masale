import React, { useContext } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Highlights from './components/Highlights'
import Model from './components/Model'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ChickenPage from './components/PorductPages/ChickenPage'
import MuttonPage from './components/PorductPages/MutttonPage'
import OtherPage from './components/PorductPages/OtherPage'
import ContactUsPage from './components/ContactUs'
import ProductContext, { ProductProvider } from './GlobalProvider/Context'
import Products from './components/PorductPages/Products'
//...
import * as Sentry from "@sentry/react";
import Footer from './components/Footer'

const App = () => {
  const { searchQuery } = useContext(ProductContext)

  return (
    <Router>
      <Navbar />
      {searchQuery === '' ?
        <Routes>
          <Route path="/" element={<Home />} />
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
      <Footer />

      {/* <Model /> */}
    </>
  )
}

export default Sentry.withProfiler(App);
