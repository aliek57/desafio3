import "./Home.module.css";
import NavBar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer";
import TopNav from "../../components/TopNav";
import { Container, Row, Col } from "react-bootstrap";
import SearchBar from "../../components/SearchBar";
import TourList from "../../components/TourList";

const Home = () => {
  return (
    <div className="homeContainer">
      <TopNav/>
      <NavBar/>
      <div className="homeContent">
        <div className="section1">
          <Container className="text-center text-overlay">
            <h3>Save 15% off in Worldwide</h3>
            <h1>Travel & Adventures</h1>
            <p>Find awesome hotel, tour, car and activities in London</p>
          </Container>
        </div>
        <SearchBar/>
        <div className="section2">
          <Container className="text-center">
            <h5>Tours</h5>
            <h2>Most Popular Tours</h2>
            <TourList/>
            <Row className="mt-3 s2-bottomRow">
              <Col md={3} className="s2-bottom">
                <h4>120+</h4>
                <p>Total Destination</p>
              </Col>  
              <Col md={3} className="s2-bottom">
                <h4>500+</h4>
                <p>Travel Package</p>
              </Col> 
              <Col md={3} className="s2-bottom">
                <h4>12k+</h4>
                <p>Total Travelers</p>
              </Col> 
              <Col md={3} className="s2-bottom">
                <h4>7k+</h4>
                <p>Positive Reviews</p>
              </Col>             
            </Row>
          </Container>
        </div>
        {/* <Container className="my-5 bg-light">
          <h2>Section 2</h2>
        </Container>
        <Container className="my-5 bg-dark">
          <h2>Section 3</h2>
        </Container>
        <Container className="my-5 bg-light">
          <h2>Section 4</h2>
        </Container>
        <Container className="my-5 bg-dark">
          <h2>Section 5</h2>
        </Container>
        <Container className="my-5 bg-light">
          <h2>Section 6</h2>
        </Container>
        <Container className="my-5 bg-dark">
          <h2>Section 7</h2>
        </Container> */}
      </div>
      {/* <Footer/> */}
    </div>
  )
}

export default Home
