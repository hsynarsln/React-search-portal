import React from 'react';
import './ListDetail.css';

const ListDetail = ({ data }) => {
  return (
    <div className='detail'>
      <div className='list-sort'>
        <div className='listing'>
          <ul>
            {data?.map((item, index) => (
              <div key={index}>
                <li>
                  <img width={20} src='/images/location.png' alt='' />
                  <span className='list-desc'>
                    <div className='row'>
                      <p className='bold'>{item[1]}</p>
                      <p>{item[0]}</p>
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
        </div>
      </div>
      <div className='pagination'></div>
    </div>
  );
};

export default ListDetail;
