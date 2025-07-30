import { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { CiFacebook, CiLinkedin, CiTwitter } from 'react-icons/ci';
import { FaRegPaperPlane } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { toast } from 'react-toastify';

import styles from './Footer.module.css';

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const Footer: React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [errors, setErrors] = useState<string>('');

    const validateEmail = () => {
        if (!email.match(emailRegex)) {
            setErrors('Invalid email format');
            return false;
        }
        setErrors('');
        return true;
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        const isValid = validateEmail();

        if (!isValid) {
            toast.warning('Please provide a valid email.');
            return;
        }

        toast.success('Email succesfully submitted!')
        setEmail('');
        setErrors('');
    }
  return (
    <footer className={`${styles.footer} py-5`}>
        <Container>
            <Row>
                <Col md={4} className={styles.column}>
                    <NavLink to="/">
                        <img src="../../assets/whiteLogo.png" alt="Logo" width="100" height="30"/>
                    </NavLink>
                    <h5 className="mt-3">Need any help?</h5>
                    <p>
                        <strong>Call Us: </strong>
                        <span className={styles.highlight}>(888) 1234 5678</span>
                    </p>
                    <div>
                        <p className='mb-1'>Love Street, Muscat, Oman</p>
                        <p className='mt-1'>exaample@trisog.com</p>
                    </div>
                    <div className={styles.socialIcons}>
                        <a href="https://www.facebook.com/" target="_blank" className="me-1"> <CiFacebook/> </a>
                        <a href="https://media1.tenor.com/m/_6r0zVrSkEcAAAAd/alexandre-de-moraes-xand%C3%A3o.gif" target="_blank" className="me-1"> <CiTwitter/> </a>
                        <a href="https://www.linkedin.com/" target="_blank"> <CiLinkedin/> </a>
                    </div>
                </Col>
                <Col md={5} className={`${styles.column} ${styles.middle}`}>
                    <Row>
                        <Col md={5}>
                            <h5>Company</h5>
                            <ul className="list-unstyled">
                                <li><a href="/error">About Us</a></li>
                                <li><a href="/error">Contact Us</a></li>
                                <li><a href="/error">Travel Guides</a></li>
                                <li><a href="/error">Data Policy</a></li>
                            </ul>
                        </Col>
                        <Col md={5}>
                            <h5>Top Destination</h5>
                            <ul className="list-unstyled">
                                <li><a href="/error">Las Vegas</a></li>
                                <li><a href="/error">New York City</a></li>
                                <li><a href="/error">San Francisco</a></li>
                                <li><a href="/error">Hawaii</a></li>
                            </ul>
                        </Col>
                        <Col md={2} className="mt-3">
                            <ul className="list-unstyled">
                                <li><a href="/error">Tokyo</a></li>
                                <li><a href="/error">Sydney</a></li>
                                <li><a href="/error">Melbourne</a></li>
                                <li><a href="/error">Dubai</a></li>
                            </ul>
                        </Col>
                    </Row>
                </Col>
                <Col md={3} className={styles.column}>
                    <h5 className='mb-4'>Sign up Newsletter</h5>
                    <form onSubmit={handleSubmit} className={`mb-3 ${styles.form}`}>
                        <FaRegPaperPlane className={styles.inputIcon}/>
                        <div className="position-relative">
                            <input 
                                type="email" 
                                className={`form-control ${styles.input} ${errors && 'is-invalid'}`}
                                id="email"
                                value={email}
                                placeholder="Enter email..."
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                    setErrors('');
                                }}/>
                        </div>
                        <div className="invalid-feedback">
                            {errors}
                        </div>
                        <button className="btn btn-primary mt-2">Submit</button>
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
