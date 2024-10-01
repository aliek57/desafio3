import React from 'react'
import { Form, FormControl } from 'react-bootstrap';
import { IoSearchOutline } from 'react-icons/io5';

const Search: React.FC = () => {
  return (
    <Form className='mb-3 filter'>
        <h4 className='filterTitle'>Search</h4>
      <div className="searchContainer">
        <FormControl
            type='text'
            placeholder='Type anything...'
            className='mr-sm-2'   
            />
        <IoSearchOutline className='searchIcon'/>
      </div>
    </Form>
  )
}

export default Search;
