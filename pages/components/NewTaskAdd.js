import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb, faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons';


const NewTaskAdd = props => {
    const isNewSolution = props.addType === "solution";

    return (
        <section className="task-description">
            <div className="task-description">
                <div className="task-border">
                    <div className="task-description-heading">
                        <FontAwesomeIcon icon={faLightbulb} />
                        <span>Dodawanie {isNewSolution ? "rozwiązania" : "zadania"}</span>
                    </div>
                    <form className="solution-add-area">
                        {isNewSolution ?
                        <div className="input-area">
                            <input type="file" placeholder="Załaduj rozwiązanie"/>
                        </div>
                        :
                        <div className="input-area">
                            <input type="text" placeholder="Podaj streszczenie zadania"/>
                            <input type="text" placeholder="Wybierz język programowania"/>
                            <input type="text" placeholder="Podaj szczegóły zadania"/>
                        </div>
                        }
                        <div>
                            <button type="submit"><FontAwesomeIcon icon={faCloudUploadAlt} /> Publikuj</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
};

export default NewTaskAdd;
