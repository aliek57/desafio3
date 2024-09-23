import { NavLink } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
import { AiOutlineUser  } from "react-icons/ai";

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
                        <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? 'navLink activeLink' : 'navLink'}`}>
                            Home
                        </NavLink>
                        <NavLink to="/about" className={({ isActive }) => `nav-link ${isActive ? 'navLink activeLink' : 'navLink'}`}>
                            About
                        </NavLink>
                        <NavLink to="/tours" className={({ isActive }) => `nav-link ${isActive ? 'navLink activeLink' : 'navLink'}`}>
                            Tours
                        </NavLink>
                        <NavLink to="/destination" className={({ isActive }) => `nav-link ${isActive ? 'navLink activeLink' : 'navLink'}`}>
                            Destination
                        </NavLink>
                        <NavLink to="/blog" className={({ isActive }) => `nav-link ${isActive ? 'navLink activeLink' : 'navLink'}`}>
                            Blog
                        </NavLink>
                        <NavLink to="/pages" className={({ isActive }) => `nav-link ${isActive ? 'navLink activeLink' : 'navLink'}`}>
                            Pages
                        </NavLink>
                        <NavLink to="/contact" className={({ isActive }) => `nav-link ${isActive ? 'navLink activeLink' : 'navLink'}`}>
                            Contact
                        </NavLink>
                    </Nav>
                    <div className="loginContainer">
                        <AiOutlineUser style={{ marginRight: '5px', width:'20', height:'20'}} />
                        <NavLink to="/login" className='loginButton'>
                            Login
                        </NavLink>
                        <NavLink to="/signup" className='loginButton'>
                            Sign Up
                        </NavLink>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
};

export default NavBar;