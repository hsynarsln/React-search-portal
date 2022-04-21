import React, { useEffect, useState } from 'react';
import './TopNews.css';

const TopNews = () => {
  const [newsData, setNewsData] = useState([]);
  const [slicedData, setSlicedData] = useState([]);
  const [first, setFirst] = useState(0);
  const [second, setSecond] = useState(3);

  useEffect(() => {
    fetch('http://localhost:8080/news')
      .then(res => res.json())
      .then(data => {
        setNewsData(data);
        setSlicedData(data.slice(first, second));
      });
  }, [first, second]);

  const nextNews = e => {
    e.preventDefault();
    if (second !== newsData.length) {
      setFirst(first + 1);
      setSecond(second + 1);
      setSlicedData(newsData.slice(first, second));
    }
  };

  const prevNews = e => {
    e.preventDefault();
    if (first !== 0) {
      setFirst(first - 1);
      setSecond(second - 1);
      setSlicedData(newsData.slice(first, second));
    }
  };

  return (
    <div className='news'>
      <p>Top News</p>
      <div className='news-box'>
        <a href={() => false} onClick={prevNews}>
          <img width={20} src='/images/left-arrow.svg' alt='' />
        </a>
        {slicedData.map((news, index) => (
          <div className='items' key={index}>
            <img src={news.image} alt={news.title} />
            <p className='desc'>{news.title}</p>
            <div className='desc-two'>
              <span>{news.dateToNow}</span>
              <span>{' · '}</span>
              <span>by {news.owner}</span>
            </div>
          </div>
        ))}
        <a href={() => false} onClick={nextNews}>
          <img width={20} src='/images/right-arrow.svg' alt='' />
        </a>
      </div>
    </div>
  );
};

export default TopNews;
