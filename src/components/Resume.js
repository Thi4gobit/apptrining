
/*
const calculateData = (data, activityType) => {
    const filteredData = data.filter(item => item.activity.name === activityType);

    const totalLength = filteredData.reduce((acc, item) => acc + item.length, 0);

    const totalDuration = filteredData.reduce((acc, item) => {
        return acc + (item.duration.hours * 3600) + (item.duration.minutes * 60) + item.duration.seconds;
    }, 0);

    const averagePaceSeconds = Math.floor(totalDuration / totalLength);
    const averagePaceMinutes = Math.floor(averagePaceSeconds / 60);
    const averagePace = `${averagePaceMinutes}:${String(averagePaceSeconds % 60).padStart(2, '0')}`;

    const averageBpm = Math.round(filteredData.reduce((acc, item) => acc + item.bpm, 0) / filteredData.length);

    const totalCalories = filteredData.reduce((acc, item) => acc + item.kcal, 0);
    const averageCalories = Math.round(totalCalories / filteredData.length);

    return {
        totalLength,
        totalDuration,
        averagePace,
        averageBpm,
        averageCalories
    };
}

const formatDuration = (totalSeconds) => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

const Resume = ({ data, activityType }) => {
    const {
        totalLength,
        totalDuration,
        averagePace,
        averageBpm,
        averageCalories
    } = calculateData(data, activityType);

    const formattedDuration = formatDuration(totalDuration);

    return (
        <div>
            <h2>{activityType} Summary</h2>
            <ul className={styles.workoutSummary}>
                <li>Total Distance: {totalLength} km</li>
                <li>Total Duration: {formattedDuration}</li>
                <li>Average Pace: {averagePace} min/km</li>
                <li>Average BPM: {averageBpm} bpm</li>
                <li>Average Calories: {averageCalories} kcal</li>
            </ul>
        </div>
    );
}

export default Resume;
*/