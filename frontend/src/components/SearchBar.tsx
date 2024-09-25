import React, { useState } from 'react'
import { Col, Container, Form, Row } from 'react-bootstrap'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import { CiCalendar, CiFlag1 } from 'react-icons/ci'
import { FaRegPaperPlane } from 'react-icons/fa'
import { LuUsers } from 'react-icons/lu'
import { toast } from 'react-toastify';

const SearchBar: React.FC = () => {
    const [searchDestination, setDestination] = useState('');
    const [searchType, setType] = useState('');
    const [searchDate, setDate] = useState<Date | null>(null);
    const [searchGuests, setGuests] = useState<number | ''>('');
    const [errors, setErrors] = useState({
        destination: false,
        type: false,
        date: false,
        guests: false
    })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const hasErrors = {
            destination: !searchDestination || /\d/.test(searchDestination),
            type:!searchType || /\d/.test(searchType),
            date: !searchDate,
            guests: !searchGuests || isNaN(searchGuests as number)
        }

        setErrors(hasErrors);

        if (Object.values(hasErrors).some(errors => errors)) {
            toast.warning('Please fill in all required fields.');
            return;
        }

        toast.success('Looking');
        setDestination('');
        setType('');
        setDate(null);
        setGuests('');
    }
  return (
    <Container className='searchbarContainer'>
        <Form onSubmit={handleSubmit} className='searchbarForm p-4 bg-white shadow-lg rounded'>
            <Row className='g-3'>
                <Col md={3}>
                    <Form.Group controlId="destination">
                        <Form.Label className="custom-label">Destination</Form.Label>
                        <FaRegPaperPlane className='input-icon'/>
                        <Form.Control 
                            className={`inputForm ${errors.destination && 'is-invalid'}`} 
                            type="text" 
                            placeholder="Where to go?"
                            value={searchDestination}
                            onChange={(e) => setDestination(e.target.value)}/>
                    </Form.Group>           
                </Col>
                <Col md={3}>
                    <Form.Group controlId="type">
                        <Form.Label className="custom-label">Type</Form.Label>
                        <CiFlag1 className='input-icon'/>
                        <Form.Control 
                            className={`inputForm ${errors.destination && 'is-invalid'}`} 
                            type="text" 
                            placeholder="Activity" 
                            value={searchType}
                            onChange={(e) => setType(e.target.value)}/>
                    </Form.Group>           
                </Col>
                <Col md={3}>
                    <Form.Group controlId="when">
                        <Form.Label className="custom-label">When</Form.Label>
                        <CiCalendar className='input-icon'/>
                        <DatePicker
                            selected={searchDate}
                            onChange={(date) => setDate(date)}
                            className={`form-control ${errors.destination && 'is-invalid'}`}
                            placeholderText='Date'
                            minDate={new Date()}
                            isClearable
                            />
                    </Form.Group>           
                </Col>
                <Col md={2}>
                    <Form.Group controlId="guests">
                        <Form.Label className="custom-label">Guests</Form.Label>
                        <LuUsers className='input-icon'/>
                        <Form.Control 
                            className={`inputForm ${errors.destination && 'is-invalid'}`}
                            type="text" 
                            placeholder="0" 
                            value={searchGuests}
                            onChange={(e) => setGuests(e.target.value ? parseInt(e.target.value) : '')}/>
                    </Form.Group>           
                </Col>
                <Col md={1} className='d-flex justify-content-end'>
                    <button className='btn' type="submit">Search</button>
                </Col>
            </Row>
        </Form>
    </Container>
  )
}

export default SearchBar
