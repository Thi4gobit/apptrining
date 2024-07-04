//import styles from "./pages/Resume.module.css"

import Resume from '../../components/Resume'
const database = require('../../database.json');

const Resumes = () => {
    const data = useState(database);
    const activityType = "Running"
    return (
        <div>
            <Resume data={data} activityType={selectedActivity}/>
        </div>
    );
};

export default Resumes;