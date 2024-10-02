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
import { BiSortAlt2 } from 'react-icons/bi';
import CardItem from '../components/CardItem';

type Destination = {
    name: string;
    city: string;
    country: string;
}

type Tour = {
    id: number,
    destination: Destination;
    title: string;
    description?: string;
    price: number;
    durationDays: number;
    location?: string;
    rating?: number;
    reviews?: number;
}

const ToursPackage = () => {
    const location = useLocation()
    const [tours, setTours] = useState<Tour[]>([])
    const [filteredTours, setFilteredTours] = useState<Tour[]>([])
    const [sortOp, setSortOp] = useState<string>('');

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
        const searchTerm = getSearchTerm();
        if (searchTerm) {
            const filteredTours = tours.filter(tour => 
                tour.destination.name.toLowerCase().includes(searchTerm.toLowerCase())
            )
            setFilteredTours(filteredTours);
        } else {
            setFilteredTours(tours);
        }
    }, [location.search, tours]);

    useEffect(() => {
        const sortTours = () => {
            const sortedTours = [...filteredTours];
            
            switch (sortOp) {
                case 'title':
                    sortedTours.sort((a, b) => a.title.localeCompare(b.title));
                    break;
                case 'price':
                    sortedTours.sort((a, b) => a.price - b.price);
                    break;
                case 'rating':
                    // sortedTours.sort((a, b) => a.rating - b.rating);
                    break;
                case 'category':
                    sortedTours.sort((a, b) => a.destination.name.localeCompare(b.destination.name));
                    break;
                default:
                    break;
            }
            setFilteredTours(sortedTours);
        }
        sortTours();
    }, [sortOp, filteredTours]);

    const handleSortOption = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSortOp(e.target.value);
    }
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
                        <Col sm={3}>
                            <Search/>
                            <Price/>
                            <Categories/>
                            <Destinations/>
                            <Reviews/>
                        </Col>
                        <Col>
                        <div className='s2-top'>
                            <p className="totalTours">{filteredTours.length} Tours</p>
                            <div className='ordering'>
                                <p>Sort by</p>
                                <BiSortAlt2 className='ordering-icon'/>
                                <select value={sortOp} onChange={handleSortOption}>
                                    <option value="title">Title</option>
                                    <option value="price">Price</option>
                                    <option value="rating">Rating</option>
                                    <option value="category">Category</option>
                                </select>
                            </div>
                        </div>
                        <div className="tourResult">
                            {filteredTours.length === 0 && <p className='notFound'>No tours found.</p>}
                            {filteredTours.map(tour => (
                                <CardItem
                                key={tour.id}
                                id={tour.id}
                                title={tour.title}
                                price={tour.price}
                                durationDays={tour.durationDays}
                                destination={tour.destination}
                                rating={tour.rating}
                                reviews={tour.reviews}
                              />
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
