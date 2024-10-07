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
import ReactPaginate from 'react-paginate';

type Destination = {
    name: string;
    city: string;
    country: string;
    continent: string;
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
    tourCategories: { category: { id: number; name: string; }}[];
}

const ToursPackage = () => {
    const location = useLocation()
    const [tours, setTours] = useState<Tour[]>([])
    const [filteredTours, setFilteredTours] = useState<Tour[]>([])
    const [sortOp, setSortOp] = useState<string>('');
    const [maxPrice, setMaxPrice] = useState<number>(0);
    const [minPrice, setMinPrice] = useState<number>(0);
    const [selectedCategories, setSelectedCategories] = useState<number[]>([]);
    const [selectedDestinations, setSelectedDestinations] = useState<string[]>([]);
    const [currentPage, setCurrentPage] = useState<number>(0);
    const toursPerPage = 6;

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
                setMaxPrice(Math.max(...response.data.map(tour => tour.price)))
                setMinPrice(Math.min(...response.data.map(tour => tour.price)))
            } catch (error) {
                console.error('Error fetching tours:', error)
            }
        }
        fetchTours()
    }, []);

    const handleSearch = (searchTerm: string) => {
        if (searchTerm) {
            const filtered = tours.filter(tour => 
                tour.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                tour.destination.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
                tour.destination.country.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setFilteredTours(filtered);
        } else {
            setFilteredTours(tours);
        }
    }

    const handlePrice = (minPrice: number, maxPrice: number) => {
        const filtered = tours.filter(tour => tour.price >= minPrice && tour.price <= maxPrice);
        setFilteredTours(filtered);
    }

    const handleCategory = (categoryId: number) => {
        const newSelectedCategories = 
            selectedCategories.includes(categoryId) ?
            selectedCategories.filter(id => id !== categoryId) :
            [...selectedCategories, categoryId];
        
        setSelectedCategories(newSelectedCategories);

        if (newSelectedCategories.length > 0) {
            const filtered = tours.filter(tour => {
                return tour.tourCategories && Array.isArray(tour.tourCategories) && 
                    newSelectedCategories.some(id => 
                        tour.tourCategories.some(cat => cat.category.id === id)
                )
            });
            setFilteredTours(filtered);
        } else {
            setFilteredTours(tours);
        }
    }

    const handleDestination = (destinationName: string) => {
        const newSelectedDestinations = 
            selectedDestinations.includes(destinationName) ?
            selectedDestinations.filter(name => name !== destinationName) :
            [...selectedDestinations, destinationName];
        
        setSelectedDestinations(newSelectedDestinations);

        const filtered = tours.filter(tour => 
            newSelectedDestinations.length === 0 || newSelectedDestinations.includes(tour.destination.country)
        )

        setFilteredTours(filtered);
    }

    useEffect(() => {
        let updatedTours = [...tours];

        const searchTerm = getSearchTerm();
        if (searchTerm) {
            updatedTours = updatedTours.filter(tour =>
                tour.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                tour.destination.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
                tour.destination.country.toLowerCase().includes(searchTerm.toLowerCase())
            )
        }

        if (selectedCategories.length > 0) {
            updatedTours = updatedTours.filter(tour => 
                tour.tourCategories && selectedCategories.some(id => 
                    tour.tourCategories.some(cat => cat.category.id === id)
                )
            )
        }

        if (selectedDestinations.length > 0) {
            updatedTours = updatedTours.filter(tour => 
                selectedDestinations.includes(tour.destination.name)
            )
        }
        setFilteredTours(updatedTours);
    }, [location.search, tours, selectedCategories, selectedDestinations]);

    const indexOfLastTour = (currentPage + 1) * toursPerPage;
    const indexOfFirstTour = indexOfLastTour - toursPerPage;
    const currentTours = filteredTours.slice(indexOfFirstTour, indexOfLastTour);
    const pageCount = Math.ceil(filteredTours.length / toursPerPage);

    const handlePageClick = ({selected}: { selected: number}) => {
        setCurrentPage(selected);
    }

    useEffect(() => {
        const sortTours = () => {
            if (filteredTours.length > 0) {
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
                            <Search onSearch={handleSearch}/>
                            <Price maxTourPrice={maxPrice} minTourPrice={minPrice} onPrice={handlePrice}/>
                            <Categories onCategory={handleCategory}/>
                            <Destinations onDestination={handleDestination}/>
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
                            {currentTours.length === 0 && <p className='notFound'>No tours found.</p>}
                            {currentTours.map(tour => (
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
                        <ReactPaginate
                            previousLabel={"<"}
                            nextLabel={">"}
                            breakLabel={"..."}
                            breakClassName={"break-me"}
                            pageCount={pageCount}
                            marginPagesDisplayed={2}
                            pageRangeDisplayed={3}
                            onPageChange={handlePageClick}
                            containerClassName={"pagination"}
                            subContainerClassName={"pages pagination"}
                            activeClassName={"active"}
                            previousClassName={
                                currentPage === 0
                                    ? "previous disabled"
                                    : "previous"
                            }
                            nextClassName={
                                currentPage === pageCount - 1
                                    ? "next disabled"
                                    : "next"
                            }
                            disabledClassName={"disabled"}
                        />
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
