import { useState } from 'react'
import { Form, FormControl } from 'react-bootstrap';
import { IoSearchOutline } from 'react-icons/io5';

type SearchProps = {
  onSearch: (searchTerm: string) => void;
}

const Search: React.FC<SearchProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    setSearchTerm(value);
    onSearch(value);
  }
  return (
    <Form className='mb-3 filter'>
        <h4 className='filterTitle'>Search</h4>
      <div className="searchContainer">
        <FormControl
            type='text'
            placeholder='Type anything...'
            className='mr-sm-2'
            value={searchTerm}
            onChange={handleSearchChange}
            />
        <IoSearchOutline className='searchIcon'/>
      </div>
    </Form>
  )
}

export default Search;
