import { NavLink } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
import { AiOutlineUser  } from "react-icons/ai";
import { AuthContext } from "../../contexts/AuthContext";
import { useContext } from "react";

import styles from "./Navbar.module.css"

const NavBar: React.FC = () => {
    const { userProvider, signOut, isAuthenticated } = useContext(AuthContext);

    return (
        <Navbar expand="lg" className={styles.navbar}>
            <Container>
                <NavLink className={styles.navbarBrand} to="/">
                    <img src="../../assets/logo_trisog.png" alt="Logo" width="100" height="30"/>
                </NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink to="/" className={({ isActive }) => `${isActive ? `${styles.navLink} ${styles.activeLink}` : styles.navLink}`}>
                            Home
                        </NavLink>
                        <NavLink to="/about" className={({ isActive }) => ` ${isActive ? `${styles.navLink} ${styles.activeLink}` : styles.navLink}`}>
                            About
                        </NavLink>
                        <NavLink to="/tours" className={({ isActive }) => ` ${isActive ? `${styles.navLink} ${styles.activeLink}` : styles.navLink}`}>
                            Tours
                        </NavLink>
                        <NavLink to="/destination" className={({ isActive }) => ` ${isActive ? `${styles.navLink} ${styles.activeLink}` : styles.navLink}`}>
                            Destination
                        </NavLink>
                        <NavLink to="/blog" className={({ isActive }) => `${isActive ? `${styles.navLink} ${styles.activeLink}` : styles.navLink}`}>
                            Blog
                        </NavLink>
                        <NavLink to="/pages" className={({ isActive }) => `${isActive ? `${styles.navLink} ${styles.activeLink}` : styles.navLink}`}>
                            Pages
                        </NavLink>
                        <NavLink to="/contact" className={({ isActive }) => `${isActive ? `${styles.navLink} ${styles.activeLink}` : styles.navLink}`}>
                            Contact
                        </NavLink>
                    </Nav>
                    <div className={styles.loginContainer}>
                        {isAuthenticated ? (
                            <>
                                <AiOutlineUser style={{ marginRight: '5px', width:'20', height:'20'}} />
                                <span>{userProvider?.name}</span>
                                <button onClick={signOut} className='btn btn-primary ms-3'>Logout</button>
                            </>
                        ) : (
                            <>
                                <AiOutlineUser style={{ marginRight: '5px', width:'20', height:'20'}} />
                                <NavLink to="/login" className={styles.loginButton}>
                                    Login
                                </NavLink>
                                <NavLink to="/signup" className={styles.loginButton}>
                                    Sign Up
                                </NavLink>
                            </>
                        )}
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
};

export default NavBar;