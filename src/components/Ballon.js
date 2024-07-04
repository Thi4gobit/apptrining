
import styles from "./Ballon.module.css"

const Balloon = ({ content }) => {
    return (
        <div className={`${styles.balloon}`}>
            {content}
        </div>
    );
};

export default Balloon;


