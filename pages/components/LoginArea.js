import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCheck, faBuilding } from '@fortawesome/free-solid-svg-icons';

const LoginArea = props => {
    const isDeveloperAccount = props.accountType === "developer"
    return (
        <Link href="/register" accountType={props.accountType} >
            <span className={isDeveloperAccount ? "login-area developer-account" : "login-area company-account"}>
                <span>Utwórz kontro {isDeveloperAccount ? 'programisty' : 'firmy'}</span>
                <span className="account-icon">{isDeveloperAccount ? <FontAwesomeIcon icon={faUserCheck} /> : <FontAwesomeIcon icon={faBuilding} />}</span>
            </span>
        </Link>
    )
}

export default LoginArea
