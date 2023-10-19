import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import ExerciseDetail from './Pages/ExerciseDetail'
import Footer from './Components/Footer'
import Navbar from './Components/Navigation/Navbar'

const App = () => {
  return (
    <div>
        <Navbar />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/exercise/:id' element={<ExerciseDetail />} />
        </Routes>
        <Footer />
    </div>
  )
}

export default App