import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTasks, faCloud } from '@fortawesome/free-solid-svg-icons';


const RecentTask = () => {
    return (
        <div className="recent-task">
            <span><FontAwesomeIcon icon={faTasks} /></span>
            <Link href="/">
                <span className="recent-task-description">
                    <span>Sortowanie bąbelkowe</span>
                    <span>Napisać algorytm sortowania bąbelkowego z implementacją…</span>
                </span>
            </Link>
            <Link href="/new-solution-add">
                <span><FontAwesomeIcon icon={faCloud} /></span>
            </Link>
        </div>
    )
}

export default RecentTask;
