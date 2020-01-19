import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTasks, faCloud } from '@fortawesome/free-solid-svg-icons';


const RecentTask = () => {
    return (
        <div className="recent-task">
            <span><FontAwesomeIcon icon={faTasks} /></span>
            <span className="recent-task-description">
                <span>Sortowanie bąbelkowe</span>
                <span>Napisać algorytm sortowania bąbelkowego z implementacją…</span>
            </span>
            <span><FontAwesomeIcon icon={faCloud} /></span>
        </div>
    )
}

export default RecentTask;
