import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import ExerciseDetail from './Pages/ExerciseDetail'
import Navbar from './Components/Navigation/Navbar'
import Footer from './Components/Footer/Footer'
import About from './Pages/About/About'
import Classes from './Pages/Classes/Classes'

const App = () => {
  return (
    <div>
        <Navbar />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/exercise/:id' element={<ExerciseDetail />} />
        </Routes>
        <About />
        <Classes />
        <Footer />
    </div>
  )
}

export default App