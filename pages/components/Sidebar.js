import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import RecentTask from './RecentTask';

const Sidebar = () => {
    return (
        <section className="sidebar">
            <div className="search-area">
                <FontAwesomeIcon icon={faSearch} />
                <input type="text" placeholder="Wyszukaj"/>
            </div>
            <div className="recent-task-list">
                <div>Ostatnie zadania</div>
                <ul>
                    <li><RecentTask /></li>
                    <li><RecentTask /></li>
                </ul>
            </div>
        </section>
    )
}

export default Sidebar;
