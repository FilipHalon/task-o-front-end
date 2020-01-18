import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb, faCommentAlt, faThumbsUp } from '@fortawesome/free-solid-svg-icons';


const TaskDescription = () => {
    return (
        <section>
            <div>
               <FontAwesomeIcon icon={faLightbulb} />
               <span>Opis zadania</span>
               {/* <div>
                   <span><FontAwesomeIcon icon={faCommentAlt} /></span>
                   <span>100%</span>
               </div>
               <div>
                   <span><FontAwesomeIcon icon={faThumbsUp} /></span>
                   <span>1000</span>
               </div> */}
            </div>
            <div>
                {/* <div>
                    <span>Limit pamięci</span>
                    <span>1024 MB</span>
                </div> */}
                <span>Dowolny język programowania</span>
            </div>
            <div>
                Twoim zadaniem będzie posortowanie ciągu liczb całkowitych. Jednakże nie podajemy ograniczenia na liczbę elementów tego ciągu. Napisz program, który będzie wczytywał liczby ze standardowego wejścia, tak długo, aż wczytaną liczbą będzie 0 oraz wypisze wszystkie wczytane liczby w porządku niemalejącym.
            </div>
            <div>
                <h2>Szczegóły zadania</h2>
                <div>
                    <p>Napisz program, który: wczyta ze standardowego ciąg liczb całkowitych nieujemnych zakończony liczbą 0, wypisze wszystkie wszystkie liczby z tego ciągu (wraz z końcowym zerem) w porządku niemalejącym.</p>
                    <p>Wejście zawiera pewną ilość liczb całkowitych nieujemnych, nie większych niż . Każda z tych liczb zapisana będzie w osobnym wierszu. W ostatnim wierszu zapisana będzie liczba 0. Możesz założyć, że liczba 0 nie pojawi się nigdzie wcześniej wśród podanych elementów.</p>
                    <p>Wyjście Twojego programu powinno stanowić dokładnie tyle samo wierszy, ile liczb było na standardowym wejściu. Liczby te muszą być wypisane w porządku niemalejącym.</p>
                </div>
            </div>
        </section>
    )
}

export default TaskDescription;
