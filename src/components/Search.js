import './Search.css';
import { useState, useEffect } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

const Search = ({ onSearch }) => {
  const [inputValue, setInputValue] = useState('');
  const [searchType, setSearchType] = useState('title');

  return (
    <div className="search_container">
      <select
        className="search_select"
        type="text"
        value={searchType}
        onChange={({ target: { value } }) => {
          setSearchType(value);
        }}
      >
        <option value="title">Title</option>
        <option value="author">Author</option>
      </select>
      <input
        className="search_input"
        type="search"
        placeholder={`Search by ${searchType}`}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
        value={inputValue}
        onKeyDown={(e) => {
          if (e.key === 'Enter') onSearch(inputValue, searchType);
        }}
      />
      <div className="search_submit" onClick={() => onSearch(inputValue, searchType)}>
        <AiOutlineSearch size={24} />
      </div>
    </div>
  );
};

export default Search;
