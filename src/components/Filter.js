
import styles from "./Filter.module.css";

const database = require('../database.json');


const Filter = ({ setSelectedActivityType }) => {

    const activityNames = database.map(item => item.activity.name);
    const activityType = [...new Set(activityNames)];

    return (
        <div className={styles.container1}>
            <div className="btn-group">
                <button className="btn btn-secondary btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Activity Type
                </button>
                <ul className="dropdown-menu">
                    {activityType.map((type, index) => (
                        <li key={index}>
                            <a className="dropdown-item" href="#" onClick={() => setSelectedActivityType(type)}>
                                {type}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Filter;

//<a className="dropdown-item" href="#">{type}</a>