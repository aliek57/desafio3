import TopNav from '../components/TopNav/TopNav';
import NavBar from '../components/Navbar/Navbar';
import Footer from '../components/Footer';
import { Container, Row, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const AnotherErrorPage = () => {
  return (
    <div className="errorContainer">
      <TopNav/>
      <NavBar/>
      <div className="errorContent">
        <Container>
            <Row className="align-items-center vh-100">
                <Col md={6} className='col1'>
                    <h1>We're sorry again...</h1>
                    <h3>This page also doesn't exist. Just go back to home please.</h3>
                    <div className="errorBtn d-flex justify-content-center">
                        <NavLink to="/" className="btn btn-primary biggerBtn">Go back to home</NavLink>
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

export default AnotherErrorPage;
