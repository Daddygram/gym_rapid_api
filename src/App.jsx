import React from 'react';
import { Route, Routes } from 'react-router-dom';

import './reset.css'
import './App.css';
import ExerciseDetail from './Pages/ExerciseDetail'
import Home from './Pages/Home';
import Navbar from './Components/Navigation/Navbar';
import Footer from './Components/Footer/Footer';
import Pricing from './Pages/Pricing';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/exercise/:id" element={<ExerciseDetail />} />
      </Routes>
      <Footer />
  </>
  )
}

export default App