import React from 'react';
import Footer from '../components/mainPage/Footer';
import Search from '../components/mainPage/Search';
import TopNews from '../components/mainPage/TopNews';
import './MainPage.css';

const MainPage = () => {
  return (
    <div className='main'>
      <button>Add new record</button>
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
