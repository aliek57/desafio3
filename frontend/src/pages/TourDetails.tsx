import { useState } from 'react'
import NavBar from '../components/Navbar/Navbar'
import Footer from '../components/Footer'
import { Row, Col } from 'react-bootstrap'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import { IoLocationOutline, IoShareSocialOutline } from 'react-icons/io5'
import { IoMdHeartEmpty, IoMdHeart } from 'react-icons/io'
import { FaStar } from 'react-icons/fa'
// import { CiCalendar } from 'react-icons/ci'

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
      </div>
      <Footer/>
    </div>
  )
}

export default TourDetails
