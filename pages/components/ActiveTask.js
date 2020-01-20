import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTasks } from '@fortawesome/free-solid-svg-icons';

const ActiveTask = () => {
    return (
        <div className="active-task">
            <div className="recent-task">
                <span><FontAwesomeIcon icon={faTasks} /></span>
                <span className="recent-task-description">
                    <span>Sortowanie bąbelkowe</span>
                    <span className="required-programming-languages">Dowolny język programowania</span>
                </span>
                <span><image src="/UAM-logo-siw-amu.jpg" alt="" /></span>
            </div>
            <div className="active-task-summary">
                <span>
                    Twoim zadaniem będzie posortowanie ciągu liczb całkowitych. Jednakże nie podajemy ograniczenia na liczbę elementów tego ciągu. Napisz program, który będzie fajny. 
                </span>
            </div>
            <div>
                <span>1 godzinę temu</span>
                <span>Zobacz <FontAwesomeIcon icon={faTasks} /> </span>
            </div>
        </div>
    )
}

export default ActiveTask;
