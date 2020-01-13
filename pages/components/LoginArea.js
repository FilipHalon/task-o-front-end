import Link from 'next/link';


const LoginArea = props => {
    const isDeveloperAccount = props.accountType === "developer"
    return (
        <Link href="/">
            <span className={isDeveloperAccount ? "login-area developer-account" : "login-area company-account"}>
                <span>Utwórz kontro {isDeveloperAccount ? 'programisty' : 'firmy'}</span>
                {/* <span>Ikona</span> */}
            </span>
        </Link>
    )
}

export default LoginArea
