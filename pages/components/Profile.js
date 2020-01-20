import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTasks, faCloud, faSearch } from '@fortawesome/free-solid-svg-icons';

const Profile = props => {
    const isDeveloperAccount = props.accountType === "developer"

    return (
        <section className="task-description">
            <div className="task-description">
                <div className="task-area">
                    <Link href="/active-tasks">
                        <div className="profile-action"><span><FontAwesomeIcon icon={faSearch} /></span><span>Przeglądaj zadania</span></div>
                    </Link>
                    {!isDeveloperAccount &&
                    <Link href="/new-task-add">
                        <div className="profile-action"><span><FontAwesomeIcon icon={faTasks} /></span><span>Dodaj zadanie</span></div>
                    </Link>
                    }
                    <Link href="/added-tasks">
                        <div className="profile-action"><span><FontAwesomeIcon icon={faSearch} /></span><span>Zobacz rozwiązania</span></div>
                    </Link>
                    {!isDeveloperAccount && 
                    <Link href="/added-tasks">
                        <div className="profile-action"><span><FontAwesomeIcon icon={faSearch} /></span><span>Zobacz wstawione zadania</span></div>
                    </Link>
                    }
                </div>
            </div>
        </section>
    )
};

export default Profile;
