import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { CiFacebook, CiLinkedin, CiTwitter } from 'react-icons/ci';
import { NavLink } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="footer py-5">
        <Container>
            <Row className="d-flex align-items-center">
                <Col md={4} className="footer-column">
                    <NavLink className="navbar-brand" to="/">
                        <img src="../../assets/whiteLogo.png" alt="Logo" width="100" height="30"/>
                    </NavLink>
                    <h5 className="mt-3">Need any help?</h5>
                    <p>
                        <strong>CALL US: </strong>
                        <span className="footer-highlight">(888)1234 5678</span>
                    </p>
                    <p>Love Street, Muscat, Oman</p>
                    <p>exaample@trisog.com</p>
                    <div className="footer-socialIcons">
                        <a href="#" className="me-3"> <CiFacebook/> </a>
                        <a href="#" className="me-3"> <CiTwitter/> </a>
                        <a href="#"> <CiLinkedin/> </a>
                    </div>
                </Col>
                <Col md={5} className="footer-column footer-middle">
                    <Row>
                        <Col md={5}>
                            <h5>Company</h5>
                            <ul className="list-unstyled">
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">Contact Us</a></li>
                                <li><a href="#">Travel Guides</a></li>
                                <li><a href="#">Data Policy</a></li>
                            </ul>
                        </Col>
                        <Col md={5}>
                            <h5>Top Destination</h5>
                            <ul className="list-unstyled">
                                <li><a href="#">Las Vegas</a></li>
                                <li><a href="#">New York City</a></li>
                                <li><a href="#">San Francisco</a></li>
                                <li><a href="#">Hawaii</a></li>
                            </ul>
                        </Col>
                        <Col md={2}>
                            <ul className="list-unstyled mt-4">
                                <li><a href="#">Tokyo</a></li>
                                <li><a href="#">Sydney</a></li>
                                <li><a href="#">Melbourne</a></li>
                                <li><a href="#">Dubai</a></li>
                            </ul>
                        </Col>
                    </Row>
                </Col>
                <Col md={3} className="footer-column">
                    <h5>Sign up Newsletter</h5>
                    <form>
                        <div className="mb-3">
                            <input 
                                type="email" 
                                className="form-control footer-input" 
                                placeholder="Enter email..."/>
                        </div>
                        <div className="invalid-feedback">
                            
                        </div>
                        <button className="btn btn-primary">Submit</button>
                    </form>
                    <div className="mt-3">
                        <p>2024 Trisog All Right Reserved</p>
                    </div>
                </Col>
            </Row>
        </Container>
    </footer>
  )
}

export default Footer;
