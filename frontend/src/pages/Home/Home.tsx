import "./Home.module.css";
import NavBar from '../../components/Navbar/NavBar'
import TourList from "../../components/TourList/TourList";

const Home = () => {
  return (
    <div>
      <NavBar/>
      <TourList/>
    </div>
  )
}

export default Home
