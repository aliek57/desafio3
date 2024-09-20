import { NavLink } from "react-router-dom";
import styles from './Navbar.module.css';

const Navbar: React.FC = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid d-flex align-items-center">
                <NavLink className={`navbar-brand ${styles.loginLogo}`} to="/">
                    <img src="../../assets/logo_trisog.png" alt="Logo" width="100" height="30" className="d-inline-block align-text-top"/>
                </NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className={`nav-link ${styles.navLink}`} to="/home">
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className={`nav-link ${styles.navLink}`} to="/">
                                About
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className={`nav-link ${styles.navLink}`} to="/home">
                                Tours
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className={`nav-link ${styles.navLink}`} to="/home">
                                Destination
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className={`nav-link ${styles.navLink}`} to="/home">
                                Blog
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className={`nav-link ${styles.navLink}`} to="/home">
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                    <NavLink className={`btn ${styles.loginButton} ms-3`} to="/login">
                        Login / SignUp
                    </NavLink>
                </div>
            </div>
        </nav>
    )
};

export default Navbar;