import React from 'react';
import './TopNews.css';

const TopNews = () => {
  return (
    <div className='news'>
      <p>Top News</p>
      <div className='news-box'>
        <a href=''>
          <img width={20} src='/images/left-arrow.svg' alt='' />
        </a>
        <div className='items'>
          <img width={300} src='/images/anonymous.png' alt='' />
          <p className='desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
          <div className='desc-two'>
            <span>1h ago</span>
            <span>{' · '}</span>
            <span>by Troy Corison</span>
          </div>
        </div>
        <div className='items'>
          <img width={300} src='/images/anonymous.png' alt='' />
          <p className='desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
          <div className='desc-two'>
            <span>1h ago</span>
            <span>{' · '}</span>
            <span>by Troy Corison</span>
          </div>
        </div>
        <div className='items'>
          <img width={300} src='/images/anonymous.png' alt='' />
          <p className='desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
          <div className='desc-two'>
            <span>1h ago</span>
            <span>{' · '}</span>
            <span>by Troy Corison</span>
          </div>
        </div>
        <a href=''>
          <img width={20} src='/images/right-arrow.svg' alt='' />
        </a>
      </div>
    </div>
  );
};

export default TopNews;
