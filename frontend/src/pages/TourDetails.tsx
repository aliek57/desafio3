import { useState } from 'react'
import NavBar from '../components/Navbar/Navbar'
import Footer from '../components/Footer'
import { Row, Col } from 'react-bootstrap'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import { IoLocationOutline, IoShareSocialOutline } from 'react-icons/io5'
import { IoMdHeartEmpty, IoMdHeart } from 'react-icons/io'
import { FaStar } from 'react-icons/fa'
import TourList from '../components/TourList'
import StarRating from '../components/StarRating'
import { CiStar } from 'react-icons/ci'

const TourDetails = () => {
  const [isHeartHovered, setIsHeartHovered] = useState(false);
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
                    <p className='ms-2'>Budapest, Hungary</p>
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
                <h3 className="detailsTitle mt-2">Wonders of the West Coast & Kimberly</h3>
                <Row className='d-flex align-items-center mt-4 second-row'>
                  <Col md={1}>
                    <p>From</p>
                    <strong className='sr-price'>$104</strong>
                  </Col>
                  <Col>
                    <p>Duration</p>
                    <strong>7 days</strong>
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
                    <strong>Adventure, Beach</strong>
                  </Col>
                  <Col md={3}>
                    <p>Reviews</p>
                    <div className='d-flex align-items-center'>
                      <FaStar className='me-2 sr-star'/>
                      <strong className='me-2'>4.8</strong>
                      <p>(15 reviews)</p>
                    </div>
                  </Col>
                </Row>
            </Col>
            <Col md={3} className='detailsTicket'>
              <div className='ticketTop d-flex align-items-center mb-3'>
                <strong>$104</strong>
                <p>/ per person</p>
              </div>
              <form>
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
                          <button>-</button>
                          <span className='ms-1'>0</span>
                          <button className='ms-1'>+</button>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className='d-flex justify-content-between align-items-center mb-3'>
                        <p>Kids (+12 years)</p>
                        <div className='ticketCatBtn d-flex align-items-center'>
                          <button>-</button>
                          <span className='ms-1'>0</span>
                          <button className='ms-1'>+</button>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className='d-flex justify-content-between align-items-center mb-3'>
                        <p>Children (+3 years)</p>
                        <div className='ticketCatBtn d-flex align-items-center'>
                          <button>-</button>
                          <span className='ms-1'>0</span>
                          <button className='ms-1'>+</button>
                        </div>
                      </div>
                    </div>
                    <div className='d-flex justify-content-between align-items-center mb-3 ticketTotal'>
                      <p>Total</p>
                      <strong>$104</strong>
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
              <p className='mb-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit quidem tempora voluptates vel recusandae nemo nisi illo repellat animi numquam eligendi ratione omnis cum ut obcaecati voluptate doloremque, sed totam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit adipisci laborum recusandae velit fuga vero optio exercitationem, quam accusamus eius corrupti nihil tempore quia possimus tenetur harum dolore doloribus? Dignissimos!</p>
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
                      <h2>4.8</h2>
                      <div className="scoreStatus d-flex align-items-center">
                        <FaStar className='me-2' />
                        <p>Excellent</p>
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
                        <span className='ms-2'>4.0</span>
                      </div>
                    </div>
                    <div className="averageCategories">
                      <p className='averageTitle mb-1'>Locations</p>
                      <div className="bar mb-2 d-flex align-items-center">
                        <input 
                          type="range"
                          readOnly
                          className='progressRange' />
                        <span className='ms-2'>4.0</span>
                      </div>
                    </div>
                    <div className="averageCategories">
                      <p className='averageTitle mb-1'>Amenities</p>
                      <div className="bar mb-2 d-flex align-items-center">
                        <input 
                          type="range"
                          readOnly
                          className='progressRange' />
                        <span className='ms-2'>4.0</span>
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
                        <span className='ms-2'>4.0</span>
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
                        <span className='ms-2'>4.0</span>
                      </div>
                    </div>
                </Col>
                </Row>
              </div>
            </div>
            <div className="showReviews mt-3 mb-3">
              <h5>Showing 1 review</h5>
              <div className="review mt-3 mb-3">
                  <Row>
                    <Col md={3} className='d-flex justify-content-center'>
                      <img src="https://via.placeholder.com/80" alt="User" className='img-fluid userIcon' />
                    </Col>
                    <Col>
                      <p className="review-date">March 20, 2022</p>
                      <h5 className="userName mt-2">Sindy Simmons</h5>
                      <div className="userStatus d-flex align-items-center">
                        <div className="d-flex review-rating">
                          <FaStar className="card-icon me-1"/>
                          <p>4.8</p>
                        </div>
                        <p className='user-review mx-2'>15 reviews</p>
                      </div>
                      <p className="comment mt-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati ipsam quod odio possimus dolor placeat aliquam repellendus aperiam officia esse magni ad laudantium, tenetur at, nisi iusto, molestias animi alias.</p>
                    </Col>
                  </Row>
              </div>
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
            <TourList/>
          </div>
        </Row>
      </div>
      <Footer/>
    </div>
  )
}

export default TourDetails
