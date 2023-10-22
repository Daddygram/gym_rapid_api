import React, { useState } from 'react'
import HeroBanner from '../Components/HeroBanner/HeroBanner'
import SearchExercises from '../Components/SearchExercises/SearchExercises'
import About from '../Components/About/About'
import Classes from '../Components/Classes/Classes'
import Exercises from '../Components/Exercises/Exercises'

import { Box } from '@mui/material';

const Home = () => {
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState('all');

  return (
    <Box>
      <HeroBanner />
      <About />
      <Classes />
      <SearchExercises setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} />
      <Exercises setExercises={setExercises} exercises={exercises} bodyPart={bodyPart} />
    </Box>
  );
};

export default Home;