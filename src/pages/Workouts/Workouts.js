import { useState } from "react"

import Workout from '../../components/Workout'
import ActivityType from '../../components/Filter';

import styles from './Workouts.module.css';

const database = require('../../database.json');

export default function Workouts() {
    
    const [workoutList] = useState(database);
    const [selectedActivityType, setSelectedActivityType] = useState('');
    
    const filteredWorkouts = selectedActivityType
        ? workoutList.filter(workout => workout.activity.name === selectedActivityType)
        : workoutList;

    return (
        <div className="container-fluid px-0 ps-md-3">
            <ActivityType setSelectedActivityType={setSelectedActivityType} />
            <div className={styles.title}>Workouts</div>
            {filteredWorkouts.map((workout) => (
                <Workout key={workout.id} data={workout} />
            ))}
        </div>
    );
}


