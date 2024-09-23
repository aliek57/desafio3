import "./Home.module.css";
import NavBar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer";
import TopNav from "../../components/TopNav";
// import TourList from "../../components/TourList/TourList";

const Home = () => {
  return (
    <div>
      <TopNav/>
      <NavBar/>
      {/* <TourList/> */}
      <div className="vh-100">
        
      </div>
      <Footer/>
    </div>
  )
}

export default Home
