import { useState } from "react"
//import logo from './logo.svg';
// data

//import '../database.json'

// componentes
import Workout from '../components/Workout'

// styles
import '../App.css';


const database = require('../database.json');

export default function Workouts() {
    //const [WorkoutList, setWorkoutList] = useState(database.Workouts)
    const [workoutList] = useState(database);

    return (
        <div>
            {workoutList.map((workout) => (
                <Workout key={workout.id} data={workout} />
            ))}
        </div>
    );

    /*
    return (
        <div>
      <Workout data={workoutList} />
    </div>
  )
    */
}
