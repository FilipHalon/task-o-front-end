import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTasks, faCloud } from '@fortawesome/free-solid-svg-icons';


const RecentTask = () => {
    return (
        <div>
            <FontAwesomeIcon icon={faTasks} />
            <span>Sortowanie bąbelkowe</span>
            <span>Napisać algorytm sortowania bąbelkowego z implementacją…</span>
            <FontAwesomeIcon icon={faCloud} />
        </div>
    )
}

export default RecentTask;
