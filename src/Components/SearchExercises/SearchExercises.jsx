import React, { useEffect, useState } from 'react'
import './SearchExercises.css'
import { exerciseOptions, fetchData } from '../../utilities/fetchData'
import HorizontalScrollbar from '../HorizontalScrollbar/HorizontalScrollbar'

const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
    const [search, setSearch] = useState('')
    const [exercises, setExercises] = useState([])
    const [bodyParts, setBodyParts] = useState([])

    useEffect(() => {
        const fetchExercisesData = async () =>{
            const bodyPartsData = await fetchData(
                'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
                exerciseOptions)

                setBodyParts(['all', ...bodyPartsData])
        }

        fetchExercisesData()
    }, [])

    const handleSearch = async () => {
        if(search) {
            const exercisesData = await fetchData
            ('https://exercisedb.p.rapidapi.com/exercises',
            exerciseOptions)

            const searchedExercises = exercisesData.filter(
                (exercise) => exercise.name.toLowerCase().includes(search)
                || exercise.target.toLowerCase().includes(search)
                || exercise.equipment.toLowerCase().includes(search)
                || exercise.bodyPart.toLowerCase().includes(search)
            )

            setSearch('')
            setExercises(searchedExercises)
        }
    }

  return (
    <div className='exercises__section'>
        <div className="exercises__section-content">
            <h2>Awesome Exercises You <br /> Should Know</h2>
            <div className="exercises__section-input-div">
                <input 
                type="text" 
                value={search}
                className="input" 
                placeholder="Search Exercises" 
                onChange={(e) => setSearch(e.target.value.toLowerCase())} />
                <input 
                className="button--submit" 
                value="Search" 
                type="submit"
                onClick={handleSearch} />
            </div>
        </div>
        <div className="exercises__bodyparts">
            <HorizontalScrollbar data={bodyParts}
            bodyPart={bodyPart}
            setBodyPart={setBodyPart} />
        </div>
    </div>
  )
}

export default SearchExercises