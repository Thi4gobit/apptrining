
import Balloon from "./Ballon";


const Workout = ({data}) => {
    const t = `${String(data.duration.hours).padStart(2, '0')}:${String(data.duration.minutes).padStart(2, '0')}:${String(data.duration.seconds).padStart(2, '0')}`;
    const allSeconds = (data.duration.seconds) + (data.duration.minutes * 60) + (data.duration.hours * 3600);
    const paceMinutes = Math.floor(allSeconds / data.length / 60);
    const paceSeconds = Math.floor(allSeconds / data.length % 60);
    const pace = `${paceMinutes}:${String(paceSeconds).padStart(2, '0')}`;
        
    return (
        <article>
            <ul className="workout" key={data.id}>
                <li>
                    <Balloon content={data.date} />
                </li>
                <li>
                    <Balloon content={data.activity.name} />
                </li>
                <li>
                    <Balloon content={`${data.length} ${data.activity.unit.unit}`} />
                </li>
                <li>
                    <Balloon content={t} />
                </li>
                <li>
                    <Balloon content={`${pace} min/${data.activity.unit.unit}`} />
                </li>
                <li>
                    <Balloon content={`${data.bpm} bpm`} />
                </li>
                <li>
                    <Balloon content={`${data.kcal} kcal`} />
                </li>
                <li>
                    <Balloon content={data.feeling} />
                </li>
            </ul>
        </article>
    );
    
}

export default Workout;