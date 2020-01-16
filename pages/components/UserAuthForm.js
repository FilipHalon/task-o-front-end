import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBuilding, faLock } from '@fortawesome/free-solid-svg-icons';


const UserAuthForm = props => {
    const isRegisterForm = props.formType === "register";
    const isDeveloperAccount = props.accountType === "developer";
    const isDeveloperIcon = <span>{isDeveloperAccount ? <FontAwesomeIcon icon={faUser} /> : <FontAwesomeIcon icon={faBuilding} /> }</span>
    const lockIcon = <span><FontAwesomeIcon icon={faLock} /></span>

    return (
        <div className="page-content-center">
            <h1>Rejestracja konta {isDeveloperAccount ? 'programisty' : 'firmy'} do systemu Task-O!</h1>
            <form>
                <ul>
                    {
                    isRegisterForm && 
                    <li>
                        {isDeveloperIcon}
                        <input type="text" placeholder={isDeveloperAccount ? "Podaj imię" : "Podaj nazwę firmy"} />
                    </li>
                    }
                    {
                    isRegisterForm &&
                    <li>
                        {isDeveloperIcon}
                        <input type="text" placeholder={isDeveloperAccount ? "Podaj nazwisko" : "Podaj numer NIP"}/>
                    </li>
                    }
                    <li>
                        {isDeveloperIcon}
                        <input type="email" placeholder="Podaj adres e-mail" />
                    </li>
                    <li>
                        {lockIcon}
                        <input type="password" placeholder="Podaj hasło" />
                    </li>
                    {
                    isRegisterForm &&
                    <li>
                        {lockIcon}
                        <input type="password" placeholder="Powtórz hasło" />
                    </li>
                    }
                </ul>
                <button className={isRegisterForm ? "register-button" : "login-button"}>Zarejestruj się</button>
                <Link href={isRegisterForm ? "/login" : "/register"}>
                    <button>{isRegisterForm ? "Zaloguj się" : "Zarejestruj się"}</button>
                </Link>
            </form>
        </div>
    )
}

export default UserAuthForm;
