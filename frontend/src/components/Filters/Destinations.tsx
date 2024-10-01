import React from 'react'
import { Form } from 'react-bootstrap';

const africa = ["Moroco", "Tanzania"]
const americas = ["Argentina", "Canada", "Colombia", "Costa Rica"];
const asia = ["Cambodia", "Japan", "Nepal", "Thailand", "Vietnam"]
const europe = ["France", "Greece"]

const Destinations: React.FC = () => {
  return (
    <div className='mb-3 filter'>
        <h4 className='filterTitle'>Categories</h4>
        <Form>
            <h5 className="subtitle">Africa</h5>
            {africa.map((af, index) => (
                <Form.Check
                    key={index}
                    type='checkbox'
                    label={af}
                />
            ))}
            <h5 className="subtitle">Americas</h5>
            {americas.map((am, index) => (
                <Form.Check
                    key={index}
                    type='checkbox'
                    label={am}
                />
            ))}
            <h5 className="subtitle">Asia</h5>
            {asia.map((as, index) => (
                <Form.Check
                    key={index}
                    type='checkbox'
                    label={as}
                />
            ))}
            <h5 className="subtitle">Europe</h5>
            {europe.map((eu, index) => (
                <Form.Check
                    key={index}
                    type='checkbox'
                    label={eu}
                />
            ))}
        </Form>
    </div>
  )
}

export default Destinations;
