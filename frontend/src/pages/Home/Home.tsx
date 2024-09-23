import "./Home.module.css";
import NavBar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer";
import TopNav from "../../components/TopNav";
import { Container } from "react-bootstrap";
import SearchBar from "../../components/SearchBar";

const Home = () => {
  return (
    <div>
      <TopNav/>
      <NavBar/>
      <div className="vh-100">
        <div className="section1">
          <Container className="text-center text-overlay">
            <h3>Save 15% off in Worldwide</h3>
            <h1>Travel & Adventures</h1>
            <p>Find awesome hotel, tour, car and activities in London</p>
          </Container>
        </div>
        <SearchBar/>
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
      <Footer/>
    </div>
  )
}

export default Home
