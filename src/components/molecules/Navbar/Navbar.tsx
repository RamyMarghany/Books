// Modules
import { Link } from "react-router-dom";

// Style
import './Navbar.scss';

export const Navbar = () => {
    return (
        <nav className="navbar navbar--fixed-top">
            <ul className="navbar__list">
                <li>
                    <Link to="/">
                        <h3>Home</h3>
                    </Link>
                </li>
                <li>
                    <Link to="/favouritebooks">
                        <h3>Favourite Books</h3>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}