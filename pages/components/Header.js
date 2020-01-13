import Link from 'next/link';


const Header = props => {
    return (
        <header>
            <nav>
                <ul>
                    <div className="navbar-options">
                        <li>
                            <Link href="/">
                                <a>Tasko-O!</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                <a>Zadania</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                <a>Pytania</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                <a>Rozmowy</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                <a>Ustawienia</a>
                            </Link>
                        </li>
                    </div>
                    <div className="navbar-auth">
                        <li>
                            <Link href="/">
                                <a>Zaloguj się</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                <a>Zarejestruj się</a>
                            </Link>
                        </li>
                    </div>
                </ul>
            </nav>
        </header>
    )
}

export default Header;
