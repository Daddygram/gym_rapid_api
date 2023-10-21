import React, { useState } from 'react'
import HeroBanner from '../Components/HeroBanner/HeroBanner'
import SearchExercises from '../Components/SearchExercises/SearchExercises'
import About from '../Components/About/About'
import Classes from '../Components/Classes/Classes'
import Exercises from '../Components/Exercises/Exercises'

const Home = () => {
  const [exercises, setExercises] = useState([])
  const [bodyPart, setBodyPart] = useState('all')

  return (
    <div>
      <HeroBanner />
      <About />
      <Classes />
      <SearchExercises 
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart} />
      <Exercises 
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}/>
    </div>
  )
}

export default Home