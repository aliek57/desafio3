import { NavLink } from "react-router-dom";
import styles from './NavBar.module.css';
import { Navbar, Container, Nav } from "react-bootstrap";

const NavBar: React.FC = () => {
    return (
        <Navbar expand="lg" className="navbar">
            <Container>
                <NavLink className="navbar-brand" to="/">
                    <img src="../../assets/logo_trisog.png" alt="Logo" width="100" height="30"/>
                </NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink to="/" className={`nav-link navLink`}>
                            Home
                        </NavLink>
                        <NavLink to="/about" className={`nav-link ${styles.navLink}`}>
                            About
                        </NavLink>
                        <NavLink to="/tours" className={`nav-link ${styles.navLink}`}>
                            Tours
                        </NavLink>
                        <NavLink to="/destination" className={`nav-link ${styles.navLink}`}>
                            Destination
                        </NavLink>
                        <NavLink to="/blog" className={`nav-link ${styles.navLink}`}>
                            Blog
                        </NavLink>
                        <NavLink to="/pages" className={`nav-link ${styles.navLink}`}>
                            Pages
                        </NavLink>
                        <NavLink to="/contact" className={`nav-link ${styles.navLink}`}>
                            Contact
                        </NavLink>
                    </Nav>
                    <NavLink to="/login" className={`btn ${styles.loginButton}`}>
                        Login / Sign Up
                    </NavLink>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
};

export default NavBar;