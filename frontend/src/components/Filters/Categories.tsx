import React from 'react'
import { Form } from 'react-bootstrap';

const categories = ["Adventure", "Beaches", "Boat Tours", "City Tours", "Food", "Hiking", "Honeymoon", "Museum Tours"]

const Categories: React.FC = () => {
  return (
    <div className='mb-3 filter'>
        <h4 className='filterTitle'>Categories</h4>
        <Form>
            {categories.map((category, index) => (
                <Form.Check
                    key={index}
                    type='checkbox'
                    label={category}
                />
            ))}
        </Form>
    </div>
  )
}

export default Categories;
