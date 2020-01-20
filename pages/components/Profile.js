import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTasks, faCloud, faSearch } from '@fortawesome/free-solid-svg-icons';

const Profile = props => {
    return (
        <section className="task-description">
            <div className="task-description">
                <div className="task-area">
                    <div className="profile-action"><span><FontAwesomeIcon icon={faSearch} /></span><span>Przeglądaj zadania</span></div>
                    <div className="profile-action"><span><FontAwesomeIcon icon={faTasks} /></span><span>Dodaj zadanie</span></div>
                    <div className="profile-action"><span><FontAwesomeIcon icon={faSearch} /></span><span>Zobacz rozwiązania</span></div>
                    <div className="profile-action"><span><FontAwesomeIcon icon={faSearch} /></span><span>Zobacz wstawione zadania</span></div>
                </div>
            </div>
        </section>
    )
};

export default Profile;
