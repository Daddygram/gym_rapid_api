import React from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.css';
import ExerciseDetail from './Pages/ExerciseDetail'
import Home from './Pages/Home';
import Navbar from './Components/Navigation/Navbar';
import Footer from './Components/Footer';

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise/:id" element={<ExerciseDetail />} />
      </Routes>
      <Footer />
  </div>
  )
}

export default App