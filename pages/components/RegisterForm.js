import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBuilding, faLock } from '@fortawesome/free-solid-svg-icons';


const RegisterForm = props => {
    const isDeveloperAccount = props.accountType === "developer";
    const isDeveloperIcon = <span>{isDeveloperAccount ? <FontAwesomeIcon icon={faUser} /> : <FontAwesomeIcon icon={faBuilding} /> }</span>
    const lockIcon = <span><FontAwesomeIcon icon={faLock} /></span>

    return (
        <div className="page-content-center">
            <h1>Rejestracja konta programisty do systemy Task-O!</h1>
            <form>
                <ul>
                    <li>
                        {isDeveloperIcon}
                        <input type="text" placeholder={isDeveloperAccount ? "Podaj imię" : "Podaj nazwę firmy"} />
                    </li>
                    <li>
                        {isDeveloperIcon}
                        <input type="text" placeholder={isDeveloperAccount ? "Podaj nazwisko" : "Podaj numer NIP"}/>
                    </li>
                    <li>
                        {isDeveloperIcon}
                        <input type="email" placeholder="Podaj adres e-mail" />
                    </li>
                    <li>
                        {lockIcon}
                        <input type="password" placeholder="Podaj hasło" />
                    </li>
                    <li>
                        {lockIcon}
                        <input type="password" placeholder="Powtórz hasło" />
                    </li>
                </ul>
                <button>Zarejestruj się</button>
                <button>Zaloguj się</button>
            </form>
        </div>
    )
}

export default RegisterForm;
