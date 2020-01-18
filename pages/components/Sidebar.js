import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import RecentTask from './RecentTask';

const Sidebar = () => {
    return (
        <section className="sidebar">
            <div>
                <FontAwesomeIcon icon={faSearch} />
                <input type="text" placeholder="Wyszukaj"/>
            </div>
            <div>
                Ostatnie zadania
            </div>
            <RecentTask />
            <RecentTask />
        </section>
    )
}

export default Sidebar;
