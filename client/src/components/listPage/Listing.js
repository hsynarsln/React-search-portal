import React from 'react';
import './ListDetail.css';

const Listing = ({ sortedData }) => {
  return (
    <ul>
      {sortedData.map((item, index) => (
        <div key={index}>
          <li>
            <img width={20} src='/images/location.png' alt='' />
            <span className='list-desc'>
              <div className='row'>
                <p className='bold'>{item[0]}</p>
                <p>{item[1]}</p>
              </div>
              <div className='row'>
                <p className='light'>
                  <span>{item[5]}, </span>
                  <span>{item[4]}</span>
                </p>
                <p>{item[3]}</p>
              </div>
            </span>
          </li>
          <hr />
        </div>
      ))}
    </ul>
  );
};

export default Listing;
