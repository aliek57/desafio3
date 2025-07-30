import TopNav from '../components/TopNav/TopNav';
import NavBar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import { Container, Row, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className="errorContainer">
      <TopNav/>
      <NavBar/>
      <div className="errorContent">
        <Container>
            <Row className="align-items-center vh-100">
                <Col md={6} className='col1'>
                    <h1>We're sorry!</h1>
                    <h3>The page you're looking for might not exist or has been moved.</h3>
                    <div className="errorBtn">
                        <NavLink to="/" className="btn btn-primary">Go back to home</NavLink>
                        <NavLink to="/error2" className="btn btn-secondary ml-3">Report a problem</NavLink>
                    </div>
                </Col>
                <Col md={6} className='col2'>
                    <img src="https://via.placeholder.com/300" alt="Error Page"/>
                </Col>
            </Row>
        </Container>
      </div>
      <Footer/>
    </div>
  )
}

export default ErrorPage;
