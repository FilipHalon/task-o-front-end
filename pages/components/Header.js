import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faTasks, faComments, faCommentDots, faUserPlus, faUser } from '@fortawesome/free-solid-svg-icons';

const Header = props => {
    return (
        <header>
            <nav>
                <ul>
                    <div className="navbar-options">
                        <li>
                            <Link href="/">
                                <a><img src="/taskoala.png" /></a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                <a><FontAwesomeIcon icon={faTasks} /> Zadania</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                <a><FontAwesomeIcon icon={faCommentDots} /> Pytania</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                <a><FontAwesomeIcon icon={faComments} /> Rozmowy</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                <a><FontAwesomeIcon icon={faCog} /> Ustawienia</a>
                            </Link>
                        </li>
                    </div>
                    <div className="navbar-auth">
                        <li>
                            <Link href="/">
                                <a><FontAwesomeIcon icon={faUser} /> Zaloguj się</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                <a><FontAwesomeIcon icon={faUserPlus} /> Zarejestruj się</a>
                            </Link>
                        </li>
                    </div>
                </ul>
            </nav>
        </header>
    )
}

export default Header;
