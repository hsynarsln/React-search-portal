import React from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/mainPage/Footer';
import Search from '../components/mainPage/Search';
import TopNews from '../components/mainPage/TopNews';
import './MainPage.css';

const MainPage = () => {
  const navigate = useNavigate();

  return (
    <div className='main'>
      <button onClick={() => navigate('/add-link')}>Add new record</button>
      <div className='logo'>
        <h1>TESODEV</h1>
        <p>Technology Solutions Development</p>
      </div>
      <p className='searchapp'>Search App</p>
      <Search />
      <TopNews />
      <Footer />
    </div>
  );
};

export default MainPage;
