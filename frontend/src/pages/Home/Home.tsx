import "./Home.module.css";
import NavBar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer";
import TopNav from "../../components/TopNav";
import { Container, Row, Col, Card } from "react-bootstrap";
import SearchBar from "../../components/SearchBar";
import TourList from "../../components/TourList";
import { ImCheckmark2 } from "react-icons/im";
import { PiQuotes } from "react-icons/pi";
import CatList from "../../components/CatList";

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
        <div className="section2 mb-2">
          <Container className="text-center">
            <h5 className="subtitle">Tours</h5>
            <h2 className="title">Most Popular Tours</h2>
            <TourList/>
            <Row className="mt-5">
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
        <div className="section3">
          <Container className="text-center">
            <h5 className="subtitle">Destination</h5>
            <h2 className="title">Top Attractions Destinations</h2>
            <Container>
              <Row>
                <Col xs={12} md={8}>
                  <Row>
                    <Col xs={4}>
                      <img src="https://via.placeholder.com/150" alt="Image1" className="image-fluid" />
                    </Col>
                    <Col xs={4}>
                      <img src="https://via.placeholder.com/150" alt="Image2" className="image-fluid" />
                    </Col>
                    <Col xs={4}>
                      <img src="https://via.placeholder.com/150" alt="Image3" className="image-fluid" />
                    </Col>
                  </Row>
                  <Row className="mt-3">
                    <Col xs={6}>
                      <img src="https://via.placeholder.com/200x100" alt="Image4" className="image-fluid" />
                    </Col>
                    <Col xs={6}>
                      <img src="https://via.placeholder.com/300x150" alt="Image5" className="image-fluid" />
                    </Col>
                  </Row>
                </Col>
                <Col xs={12} md={4}>
                  <img src="https://via.placeholder.com/400x400" alt="Image6" className="image-fluid h-100" />
                </Col>
              </Row>
            </Container>
          </Container>
        </div>
        <div className="section4">
          <Container className="py-5">
            <Row>
              <Col md={6} className="d-flex justify-content-center align-items-center">
              <img src="https://via.placeholder.com/400x400" alt="Image6" className="image-fluid h-100" />
              </Col>
              <Col md={4} className="d-flex flex-column">
                <h5 className="subtitle">Why Choose Us</h5>
                <h2 className="title">Our Experiences Meet High Quality Standards</h2>
                <p>Holistically optimize proactive strategic theme areas rather than effective manufactured products create.</p>
                <Row>
                  <Col xs={6}>
                    <ul className="list-unstyled">
                      <li><ImCheckmark2 className="s4-icon"/>Cheap Rates</li>
                      <li><ImCheckmark2 className="s4-icon"/>Hand-picked Tours</li>
                    </ul>
                  </Col>
                  <Col xs={6}>
                    <ul className="list-unstyled">
                      <li><ImCheckmark2 className="s4-icon"/>Cheap Rates</li>
                      <li><ImCheckmark2 className="s4-icon"/>Best Experience</li>
                    </ul>
                  </Col>
                </Row>
                <a href="#" className="btn text-left">Contact Us</a>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="section5">
          <Container className="text-center">
            <h5 className="subtitle">Browse By Category</h5>
            <h2 className="title">Pick a Tour Type</h2>
            <Row className="mt-4 d-flex justify-content-center">
              <CatList />
            </Row>
          </Container>
        </div>
        <div className="section6">
          <Container className="py-5">
            <Row>
              <Col md={6} className="d-flex justify-content-center align-items-center">
              <img src="https://via.placeholder.com/400x400" alt="Image6" className="image-fluid h-100" />
              </Col>
              <Col md={4} className="d-flex flex-column justify-content-center text-center">
                <h5 className="subtitle">Testimonials</h5>
                <h2 className="title">What Travelers Say</h2>
                <PiQuotes className="quote-icon"/>
                <p className="quote">“The UI designs he crafted are top-notch, and the design system he integrated allows for straight forward fixes and bulk updates throughout almost every area of the app.”  </p>
                <p className="author">-By Molie Rosa, Photographer</p>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="section7">
          <Container className="text-center">
            <h5 className="subtitle">Updates</h5>
            <h2 className="title">Latest Travel Guide</h2>
            <Row className="mt-5 d-flex justify-content-center">
              <Col md={5}>
                <div className="travel-guide d-flex align-items-center">
                  <img src="https://via.placeholder.com/150" alt="News" />
                  <div className="travelGuideContent">
                    <p>July 13, 2023 • Admin</p>
                    <h5>The Impact of Covid-19 on travel & tourism industry</h5>
                  </div>
                </div>
              </Col>
              <Col md={5}>
                <div className="travel-guide d-flex align-items-center">
                  <img src="https://via.placeholder.com/150" alt="News" />
                  <div className="travelGuideContent">
                    <p>July 13, 2023 • Admin</p>
                    <h5>The Impact of Covid-19 on travel & tourism industry</h5>
                  </div>
                </div>
              </Col>
            </Row>
            <Row className="mt-5 mb-5 d-flex justify-content-center">
              <Col md={5}>
                <div className="travel-guide d-flex align-items-center">
                  <img src="https://via.placeholder.com/150" alt="News" />
                  <div className="travelGuideContent">
                    <p>July 13, 2023 • Admin</p>
                    <h5>The Impact of Covid-19 on travel & tourism industry</h5>
                  </div>
                </div>
              </Col>
              <Col md={5}>
                <div className="travel-guide d-flex align-items-center">
                  <img src="https://via.placeholder.com/150" alt="News" />
                  <div className="travelGuideContent">
                    <p>July 13, 2023 • Admin</p>
                    <h5>The Impact of Covid-19 on travel & tourism industry</h5>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Home