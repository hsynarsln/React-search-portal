import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ListDetail from '../components/listPage/ListDetail';
import './ListPage.css';

const ListPage = () => {
  const [searchInput, setSearchInput] = useState(localStorage.getItem('search'));
  const [allData, setAllData] = useState([]);
  const [searchedData, setSearchedData] = useState([]);
  const navigate = useNavigate();

  const fetchData = async () => {
    const response = await fetch('http://localhost:8080/data');
    const data = await response.json();
    setAllData(data);
    const searchingData = data.filter(item => item[0].toLowerCase().includes(searchInput.trim().toLowerCase()));
    setSearchedData(searchingData);
  };

  useEffect(() => {
    fetchData();
    localStorage.removeItem('search');
  }, []);

  useEffect(() => {
    if (searchInput) {
      const searchingData = allData.filter(item => item[0].toLowerCase().includes(searchInput.trim().toLowerCase()));
      setSearchedData(searchingData);
      localStorage.setItem('search', searchInput);
    }
  }, [searchInput]);

  const handleSubmit = e => {
    e.preventDefault();
    // console.log(searchInput);
  };

  return (
    <div className='list'>
      <div className='list-header'>
        <div className='list-logo' onClick={() => navigate('/')}>
          <h1>TESODEV</h1>
          <p>Technology Solutions Development</p>
        </div>
        <div className='list-input'>
          <form onSubmit={handleSubmit}>
            <input type='text' placeholder='Search...' onChange={e => setSearchInput(e.target.value)} value={searchInput} />
            <img src='/images/search-icon.svg' alt='' />
            <button type='submit'>Search</button>
          </form>
        </div>
        <button>Add new record</button>
      </div>
      <div className='list-body'>{searchedData?.length > 0 && searchInput.length > 0 && <ListDetail data={searchedData} />}</div>
    </div>
  );
};

export default ListPage;
