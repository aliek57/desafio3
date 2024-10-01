import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { NavLink } from 'react-router-dom';
import axios from 'axios'
import TopNav from '../components/TopNav';
import NavBar from '../components/Navbar/Navbar';
import Footer from '../components/Footer';
import SearchBar from '../components/SearchBar';
import { Col, Container, Nav, Row } from 'react-bootstrap';
import Search from '../components/Filters/Search';
import Price from '../components/Filters/Price';
import Categories from '../components/Filters/Categories';
import Destinations from '../components/Filters/Destinations';
import Reviews from '../components/Filters/Reviews';

type Destination = {
    name: string;
    city: string;
    country: string;
}

type Tour = {
    id: number,
    destination: Destination;
}

const ToursPackage = () => {
    const location = useLocation()
    const [tours, setTours] = useState<Tour[]>([])
    const [filteredTours, setFilteredTours] = useState<Tour[]>([])

    const getSearchTerm = () => {
        const params = new URLSearchParams(location.search);
        return params.get('search') || '';
    }

    useEffect(() => {
        const fetchTours = async () => {
            try {
                const response = await axios.get<Tour[]>('http://localhost:3333/tours/')
                setTours(response.data)
                setFilteredTours(response.data)
            } catch (error) {
                console.error('Error fetching tours:', error)
            }
        }
        fetchTours()
    }, [])

    useEffect(() => {
        const searchTerm = getSearchTerm()
        console.log('search term:', searchTerm)
        const filteredTours = tours.filter(tour => 
            tour.destination.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
        console.log('filtered tour: ', filteredTours)
            setFilteredTours(filteredTours)
    }, [location.search, tours])
  return (
    <div className='packageContainer'>
        <TopNav/>
        <NavBar/>
        <div className="packageContent">
            <div className="section1">
                <Container className="text-center text-overlay">
                    <h1>Travel & Adventures</h1>
                    <Nav className='s1-nav'>
                        <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? 'navLink activeLink' : 'navLink'}`}>
                            Home
                        </NavLink>
                        <NavLink to="/tours" className={({ isActive }) => `nav-link ${isActive ? 'navLink activeLink' : 'navLink'}`}>
                            Tour Package
                        </NavLink>
                        </Nav>
                </Container>
            </div>
            <SearchBar/>
            <div className="section2">
                <Container>
                    <Row>
                        <Col sm={3} className=''>
                            <Search/>
                            <Price/>
                            <Categories/>
                            <Destinations/>
                            <Reviews/>
                        </Col>
                        <Col className='bg-danger'>
                        <h5>Tours</h5>
                        <h2>Popular Tours</h2>
                        <div className="tourList">
                            {filteredTours.map(tour => (
                                <div key={tour.id} className="tour">
                                    <h4>{tour.destination.name}</h4>
                                    <p>{tour.destination.city}, {tour.destination.country}</p>
                                </div>
                            ))}
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

export default ToursPackage
