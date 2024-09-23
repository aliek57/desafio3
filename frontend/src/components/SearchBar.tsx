import React from 'react'
import { Col, Container, Form, Row } from 'react-bootstrap'
import { CiCalendar, CiFlag1 } from 'react-icons/ci'
import { FaRegPaperPlane } from 'react-icons/fa'
import { LuUsers } from 'react-icons/lu'

const SearchBar: React.FC = () => {
  return (
    <Container className='searchbarContainer'>
        <Form className='searchbarForm p-4 bg-white shadow-lg rounded'>
            <Row className='g-3'>
                <Col md={3}>
                    <Form.Group controlId="destination">
                        <Form.Label className="custom-label">Destination</Form.Label>
                        <FaRegPaperPlane className='input-icon'/>
                        <Form.Control className="inputForm" type="text" placeholder="Where to go?" />
                    </Form.Group>           
                </Col>
                <Col md={2}>
                    <Form.Group controlId="type">
                        <Form.Label className="custom-label">Type</Form.Label>
                        <CiFlag1 className='input-icon'/>
                        <Form.Control className="inputForm" type="text" placeholder="Activity" />
                    </Form.Group>           
                </Col>
                <Col md={2}>
                    <Form.Group controlId="when">
                        <Form.Label className="custom-label">When</Form.Label>
                        <CiCalendar className='input-icon'/>
                        <Form.Control className="inputForm" type="text" placeholder="Date" />
                    </Form.Group>           
                </Col>
                <Col md={2}>
                    <Form.Group controlId="guests">
                        <Form.Label className="custom-label">Guests</Form.Label>
                        <LuUsers className='input-icon'/>
                        <Form.Control className="inputForm" type="text" placeholder="0" />
                    </Form.Group>           
                </Col>
                <Col md={2}>
                    <button className='btn w-100' type="submit">Search</button>
                </Col>
            </Row>
        </Form>
    </Container>
  )
}

export default SearchBar
