import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Search.css';

const Search = () => {
  const [searchInput, setSearchInput] = useState();
  const [allData, setAllData] = useState([]);
  const [searchedData, setSearchedData] = useState([]);
  const [slicedData, setSlicedData] = useState([]);
  const navigate = useNavigate();
  // console.log(searchedData);

  const fetchData = async () => {
    const response = await fetch('http://localhost:8080/data');
    const data = await response.json();
    setAllData(data);
  };

  useEffect(() => {
    fetchData();
    localStorage.removeItem('search');
  }, []);

  useEffect(() => {
    if (searchInput) {
      const searchingData = allData.filter(item => item[0].toLowerCase().includes(searchInput.trim().toLowerCase()));
      setSearchedData(searchingData);
      setSlicedData(searchingData.slice(0, 3));
    }
  }, [searchInput]);

  const handleSubmit = e => {
    e.preventDefault();
    // console.log(searchInput);
    localStorage.setItem('search', searchInput);
    navigate('/search-results');
  };

  return (
    <div className='search'>
      <p>Find in the records</p>
      <div className='input'>
        <form onSubmit={handleSubmit}>
          <input type='text' placeholder='Search...' onChange={e => setSearchInput(e.target.value)} />
          <img src='/images/search-icon.svg' alt='' />
          <button type='submit'>Search</button>
        </form>
      </div>
      {searchedData.length > 0 && searchInput.length > 0 && (
        <div className='box'>
          {slicedData?.map((item, index) => (
            <div className='output' key={index}>
              <img src='/images/location.png' alt='' />
              <div>
                <p className='bold'>{item[0]}</p>
                <p className='light'>
                  <span>{item[5]}, </span>
                  <span>{item[4]}</span>
                </p>
              </div>
            </div>
          ))}
          {searchedData?.length > 3 && (
            <a href={() => false} onClick={handleSubmit}>
              Show more...
            </a>
          )}
        </div>
      )}
    </div>
  );
};

export default Search;
