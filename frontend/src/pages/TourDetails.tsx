import React, { useState, useEffect } from 'react'
import NavBar from '../components/Navbar/Navbar'
import Footer from '../components/Footer'
import { Row, Col } from 'react-bootstrap'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import { IoLocationOutline, IoShareSocialOutline } from 'react-icons/io5'
import { IoMdHeartEmpty, IoMdHeart } from 'react-icons/io'
import { FaStar } from 'react-icons/fa'
import StarRating from '../components/StarRating'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { toast } from 'react-toastify'
import RelatedTours from '../components/RelatedTours'
import ReviewList from '../components/ReviewList'

type Destination = {
  name: string;
  city: string;
  country: string;
}

type Review = {
  id: number;
  servicesRating: number;
  locationsRating: number;
  amenitiesRating: number;
  pricesRating: number;
  roomRating: number;
  comment?: string;
  isAnonymous?: boolean;
  tour: {
    id: number;
    title: string;
  }
}

type Tour = {
  id: number,
  destination: Destination;
  title: string;
  description?: string;
  price: number;
  durationDays: number;
  rating?: number;
  reviews: Review[];
  tourCategories: { category: { id: number; name: string; }}[];
}

const TourDetails = () => {
  const [isHeartHovered, setIsHeartHovered] = useState(false);
  const { id } = useParams<{ id: string}>();
  const [tour, setTour] = useState<Tour | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [adult, setAdult] = useState(0);
  const [kid, setKid] = useState(0);
  const [children, setChildren] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get<Tour>(`http://localhost:3333/tours/${id}`);
                console.log('Tour: ', response.data);
                setTour(response.data);
            } catch (error) {
                setError('Failed to fetch tours.');
            }
        };

        fetchData();
    }, [id]);

    if (error) {
      return <p>Error: {error}</p>
    }

    if (!tour) {
      return <p>Loading...</p>
    }

    const calculateRating = () => {
      if (tour.reviews.length === 0) return '0';
  
      const totalRating = tour.reviews.reduce((acc, review) => {
        const reviewAverage = (
          review.servicesRating +
          review.locationsRating +
          review.amenitiesRating +
          review.pricesRating +
          review.roomRating
        ) / 5;
        return acc + reviewAverage;
      }, 0);
  
      return (totalRating / tour.reviews.length).toFixed(1);
    };

    const sRating = tour.reviews.length > 0 ? 
      (tour.reviews.reduce((acc, review) => acc + review.servicesRating, 0) / tour.reviews.length).toFixed(1)
      : 0;

      const lRating = tour.reviews.length > 0 ? 
      (tour.reviews.reduce((acc, review) => acc + review.locationsRating, 0) / tour.reviews.length).toFixed(1)
      : 0;

      const aRating = tour.reviews.length > 0 ? 
      (tour.reviews.reduce((acc, review) => acc + review.amenitiesRating, 0) / tour.reviews.length).toFixed(1)
      : 0;

      const pRating = tour.reviews.length > 0 ? 
      (tour.reviews.reduce((acc, review) => acc + review.pricesRating, 0) / tour.reviews.length).toFixed(1)
      : 0;

      const rRating = tour.reviews.length > 0 ? 
      (tour.reviews.reduce((acc, review) => acc + review.roomRating, 0) / tour.reviews.length).toFixed(1)
      : 0;

      const ratingMsg = (averageRating: number) => {
        if (averageRating >= 4 && averageRating <= 5) {
          return 'Excellent';
        } else if (averageRating >= 3 && averageRating < 4) {
          return 'Good';
        } else if (averageRating >= 2 && averageRating < 3) {
          return 'Moderate';
        } else {
          return 'Poor';
        }
      }
  
    const averageRating = calculateRating();

    const totalPrice = ((adult * tour.price) + (kid * tour.price / 2) + (children * tour.price / 2)).toFixed(2);

    const addAdult = () => setAdult(prev => prev + 1);
    const addKid = () => setKid(prev => prev + 1);
    const addChildren = () => setChildren(prev => prev + 1);

    const subtractAdult = () => {
      if (adult > 0) {
        setAdult(prev => prev - 1);
      } else {
        toast.warning(`Number is already zero, can't subtract`);
      }
    }

    const subtractKid = () => {
      if (kid > 0) {
        setKid(prev => prev - 1);
      } else {
        toast.warning(`Number is already zero, can't subtract`);
      }
    }

    const subtractChildren = () => {
      if (children > 0) {
        setChildren(prev => prev - 1);
      } else {
        toast.warning(`Number is already zero, can't subtract`);
      }
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
      e.preventDefault();
      if(adult === 0){
        toast.error('Please select at least one adult');
        return;
      }
      toast.success('Booking confirmed!');
    }

    const cats = tour.tourCategories.map(cat => cat.category.name);

  return (
    <div className='detailsContainer'>
        <NavBar/>
      <div className="detailsContent">
        <Row className='mt-4 d-flex justify-content-center'>
            <Col md={6}>
                <img src="https://via.placeholder.com/700x400" alt="Tour" className='img-fluid' />
                <div className='d-flex justify-content-between align-items-center mt-3 first-row'>
                  <div className='d-flex align-items-center'>
                    <IoLocationOutline />
                    <p className='ms-2'>{tour.destination.city}, {tour.destination.country}</p>
                    <a href="" className='ms-3'>View on map</a>
                  </div>
                  <div className='fr-icon'>
                    <IoShareSocialOutline className='me-2'/>
                    {isHeartHovered ? (
                      <IoMdHeart 
                        className='fr-heart'
                        onMouseLeave={() => setIsHeartHovered(false)}/>
                    ) : (
                      <IoMdHeartEmpty 
                        className='fr-heart'
                        onMouseEnter={() => setIsHeartHovered(true)}/>
                    )}
                    
                  </div>
                </div>
                <h3 className="detailsTitle mt-2">{tour.title}</h3>
                <Row className='d-flex align-items-center mt-4 second-row'>
                  <Col md={1}>
                    <p>From</p>
                    <strong className='sr-price'>${tour.price}</strong>
                  </Col>
                  <Col>
                    <p>Duration</p>
                    <strong>{tour.durationDays} days</strong>
                  </Col>
                  <Col md={2}>
                    <p>Max People</p>
                    <strong>25</strong>
                  </Col>
                  <Col>
                    <p>Min Age</p>
                    <strong>12+</strong>
                  </Col>
                  <Col md={3}>
                    <p>Tour Type</p>
                    <strong>{tour.tourCategories.map((cat) => cat.category.name).join(', ')}</strong>
                  </Col>
                  <Col md={3}>
                    <p>Reviews</p>
                    <div className='d-flex align-items-center'>
                      <FaStar className='me-2 sr-star'/>
                      <strong className='me-2'>{averageRating}</strong>
                      <p>({tour.reviews.length} reviews)</p>
                    </div>
                  </Col>
                </Row>
            </Col>
            <Col md={3} className='detailsTicket'>
              <div className='ticketTop d-flex align-items-center mb-3'>
                <strong>${tour.price}</strong>
                <p>/ per person</p>
              </div>
              <form onSubmit={handleSubmit}>
                <div className='mb-3 ticketInput'>
                  <label htmlFor="">Date: </label>
                    <DatePicker
                      className={`form-control`}
                      placeholderText='Choose Date'
                      minDate={new Date()}
                      isClearable                          
                      />
                </div>
                <div className='mb-3 ticketInput'>
                  <label htmlFor="">Time: </label>
                  <select name="" id="" className='form-control'>
                    <option value="">Select</option>
                    <option value="1">08:00</option>
                    <option value="2">09:00</option>
                    <option value="3">10:00</option>
                    <option value="4">11:00</option>
                  </select>
                </div>
                <div className='mb-3 ticketInput'>
                    <label htmlFor="">Ticket</label>
                    <div>
                      <div className='d-flex justify-content-between align-items-center mb-3'>
                        <p>Adults (+18 years)</p>
                        <div className='ticketCatBtn d-flex align-items-center'>
                          <button type='button' onClick={subtractAdult}>-</button>
                          <span className='ms-1'>{adult}</span>
                          <button type='button' className='ms-1' onClick={addAdult}>+</button>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className='d-flex justify-content-between align-items-center mb-3'>
                        <p>Kids (+12 years)</p>
                        <div className='ticketCatBtn d-flex align-items-center'>
                          <button type='button' onClick={subtractKid}>-</button>
                          <span className='ms-1'>{kid}</span>
                          <button type='button' className='ms-1' onClick={addKid}>+</button>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className='d-flex justify-content-between align-items-center mb-3'>
                        <p>Children (+3 years)</p>
                        <div className='ticketCatBtn d-flex align-items-center'>
                          <button type='button' onClick={subtractChildren}>-</button>
                          <span className='ms-1'>{children}</span>
                          <button type='button' className='ms-1' onClick={addChildren}>+</button>
                        </div>
                      </div>
                    </div>
                    <div className='d-flex justify-content-between align-items-center mb-3 ticketTotal'>
                      <p>Total</p>
                      <strong>${totalPrice}</strong>
                    </div>
                    <button type="submit" className='btn ticketBtn'>Book Now</button>
                </div>
              </form>
            </Col>
        </Row>
        <Row className='section2 mt-3 d-flex justify-content-center'>
          <Col md={6}>
            <div className="detailsOverview">
              <h5 className="detailsSubtitle">Overview</h5>
              <p className='mb-4'>{tour.description}</p>
            </div>
            <div className="detailsMap">
              <h5 className="detailsSubtitle">Map</h5>
              <img src="https://via.placeholder.com/700x400" alt="Map" className='img-fluid' />
            </div>
            <div className="detailsAverageReviews">
              <h5 className="detailsSubtitle mt-4">Average Reviews</h5>
              <div className="detailsRating">
                <Row>
                <Col md={4}>
                    <div className="averageScore d-flex flex-column align-items-center justify-content-center">
                      <h2>{averageRating}</h2>
                      <div className="scoreStatus d-flex align-items-center">
                        <FaStar className='me-2' />
                        <p>{ratingMsg(parseFloat(averageRating))}</p>
                      </div>
                    </div>
                </Col>
                <Col md={4}>
                    <div className="averageCategories">
                      <p className='averageTitle mb-1'>Services</p>
                      <div className="bar mb-2 d-flex align-items-center">
                        <input 
                          type="range"
                          readOnly
                          className='progressRange' />
                        <span className='ms-2'>{sRating}</span>
                      </div>
                    </div>
                    <div className="averageCategories">
                      <p className='averageTitle mb-1'>Locations</p>
                      <div className="bar mb-2 d-flex align-items-center">
                        <input 
                          type="range"
                          readOnly
                          className='progressRange' />
                        <span className='ms-2'>{lRating}</span>
                      </div>
                    </div>
                    <div className="averageCategories">
                      <p className='averageTitle mb-1'>Amenities</p>
                      <div className="bar mb-2 d-flex align-items-center">
                        <input 
                          type="range"
                          readOnly
                          className='progressRange' />
                        <span className='ms-2'>{aRating}</span>
                      </div>
                    </div>
                </Col>
                <Col md={4}>
                    <div className="averageCategories">
                      <p className='averageTitle mb-1'>Prices</p>
                      <div className="bar mb-2 d-flex align-items-center">
                        <input 
                          type="range"
                          readOnly
                          className='progressRange' />
                        <span className='ms-2'>{pRating}</span>
                      </div>
                    </div>
                    <div className="averageCategories">
                      <p className='averageTitle mb-1'>Food</p>
                      <div className="bar mb-2 d-flex align-items-center">
                        <input 
                          type="range"
                          readOnly
                          className='progressRange' />
                        <span className='ms-2'>4.0</span>
                      </div>
                    </div>
                    <div className="averageCategories">
                      <p className='averageTitle mb-1'>Room confort and quality</p>
                      <div className="bar mb-2 d-flex align-items-center">
                        <input 
                          type="range"
                          readOnly
                          className='progressRange' />
                        <span className='ms-2'>{rRating}</span>
                      </div>
                    </div>
                </Col>
                </Row>
              </div>
            </div>
            <div className="showReviews mt-3 mb-3">
              <h5>Showing {tour.reviews.length} review</h5>
              <ReviewList tourId={tour.id}/>
            </div>
            <div className="addReview">
              <h5>Add a review</h5>
              <Row className='d-flex mb-4'>
                <Col md={3}>
                    <div className="reviewCategory mb-3">
                      <p className="rc-title mb-1">Services</p>
                      <StarRating/>
                    </div>
                </Col>
                <Col md={3}>
                    <div className="reviewCategory mb-2">
                      <p className="rc-title mb-1">Locations</p>
                      <StarRating/>
                    </div>
                </Col>
                <Col md={3}>
                    <div className="reviewCategory mb-2">
                      <p className="rc-title mb-1">Amenities</p>
                      <StarRating/>
                    </div>
                </Col>
                <Col md={3}>
                    <div className="reviewCategory mb-2">
                      <p className="rc-title mb-1">Prices</p>
                      <StarRating/>
                    </div>
                </Col>
                <Col md={4}>
                    <div className="reviewCategory mb-2">
                      <p className="rc-title mb-1">Room comfort and quality</p>
                      <StarRating/>
                    </div>
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <input 
                  type='text' 
                  className='form-control' 
                  id='name' 
                  placeholder='Your name'
                  />
                </Col>
                <Col md={6}>
                <input 
                  type='email' 
                  className='form-control' 
                  id='name' 
                  placeholder='Email address'
                  />
                </Col>
              </Row>
              <Col>
                  <textarea 
                  className='form-control mt-4' 
                  id='message' 
                  placeholder='Write your comment'
                  />
              </Col>
              <div className='d-flex justify-content-start mt-4'>
                <button type='submit' className='btn btn-danger'>Submit review</button>
              </div>
            </div>
          </Col>
          <Col md={3}></Col>
          <div className="detailsCarrossel d-flex flex-column justify-content-center mt-4">
            <h3 className='text-center'>You may also like...</h3>
            <RelatedTours currentTourId={tour.id} category={cats.join(',')}/>
          </div>
        </Row>
      </div>
      <Footer/>
    </div>
  )
}

export default TourDetails;