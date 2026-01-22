import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Slider from './Components/Slider/Slider'
import Home from './Pages/Home/Home'

function App() {

  return (
    <>
      <Navbar />
      <Home/>
    </>
  )
}

export default App
