import React from 'react'
import { Form } from 'react-bootstrap';

const reviews = ["5 Stars", "4 Stars & Up", "3 Stars & Up", "2 Stars & Up", "1 Stars & Up"]

const Reviews: React.FC = () => {
  return (
    <div className='mb-3 filter'>
        <h4 className='filterTitle'>Reviews</h4>
        <Form>
            {reviews.map((review, index) => (
                <Form.Check
                    key={index}
                    type='checkbox'
                    label={review}
                />
            ))}
        </Form>
    </div>
  )
}

export default Reviews;