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
// import ReactPaginate from 'react-paginate';

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
    // const [currentPage, setCurrentPage] = useState(0);

    // const itemsPerPage = 9;
    // const offset = currentPage * itemsPerPage;
    // const currentItems = filteredMovies.slice(offset, offset + itemsPerPage);
    // const pageCount = Math.ceil(filteredMovies.length / itemsPerPage);

    // const handlePageClick = ({ selected }) => {
    //     setCurrentPage(selected);
    // };
    // const location = useLocation()
    // const [tours, setTours] = useState<Tour[]>([])
    // const [filteredTours, setFilteredTours] = useState<Tour[]>([])

    // const getSearchTerm = () => {
    //     const params = new URLSearchParams(location.search);
    //     return params.get('search') || '';
    // }

    // useEffect(() => {
    //     const fetchTours = async () => {
    //         try {
    //             const response = await axios.get<Tour[]>('http://localhost:3333/tours/')
    //             setTours(response.data)
    //             setFilteredTours(response.data)
    //         } catch (error) {
    //             console.error('Error fetching tours:', error)
    //         }
    //     }
    //     fetchTours()
    // }, [])

    // useEffect(() => {
    //     const searchTerm = getSearchTerm()
    //     console.log('search term:', searchTerm)
    //     const filteredTours = tours.filter(tour => 
    //         tour.destination.name.toLowerCase().includes(searchTerm.toLowerCase())
    //     )
    //     console.log('filtered tour: ', filteredTours)
    //         setFilteredTours(filteredTours)
    // }, [location.search, tours])
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
                            <p className="totalTours">16 Tours</p>
                            <div className='ordering'>
                                <p>Sort by</p>
                                <BiSortAlt2 className='ordering-icon'/>
                                <select>
                                    <option value="title">Title</option>
                                    <option value="price">Price</option>
                                    <option value="rating">Rating</option>
                                    <option value="category">Category</option>
                                </select>
                            </div>
                        </div>
                        <div className="tourResult">
                            <CardItem />
                            <CardItem />
                            <CardItem />
                            <CardItem />
                            <CardItem />
                            <CardItem />
                            <CardItem />
                            <CardItem />
                            <CardItem />
                            {/* {filteredTours.map(tour => (
                                <div key={tour.id} className="tour">
                                    <h4>{tour.destination.name}</h4>
                                    <p>{tour.destination.city}, {tour.destination.country}</p>
                                </div>
                            ))} */}
                            {/* <div className={styles.paginate}>
                            <ReactPaginate
                                previousLabel={">"}
                                nextLabel={"<"}
                                breakLabel={"..."}
                                breakClassName={"break-me"}
                                pageCount={pageCount}
                                marginPagesDisplayed={2}
                                pageRangeDisplayed={3}
                                onPageChange={handlePageClick}
                                containerClassName={styles.pagination}
                                subContainerClassName={"pages pagination"}
                                activeClassName={styles.active}
                                previousClassName={
                                    currentPage === 0
                                        ? `${styles.previous} ${styles.disabled}`
                                        : styles.previous
                                }
                                nextClassName={
                                    currentPage === pageCount - 1
                                        ? `${styles.next} ${styles.disabled}`
                                        : styles.next
                                }
                            />
                        </div> */}
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
