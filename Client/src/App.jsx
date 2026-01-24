import { Routes, Route } from 'react-router-dom'
import './App.css'

import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'

import Home from './Pages/Home/Home'
import Location from './Pages/Location/Location'
import AboutUs from './Pages/AboutUS/AboutUs'

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/location" element={<Location />} />
        <Route path='/about-us' element={<AboutUs />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
