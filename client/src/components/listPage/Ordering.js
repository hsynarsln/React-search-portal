import React from 'react';

const Ordering = ({ sortedData, modalVisible, setSortingValue, sortingValue, modalHandler }) => {
  return (
    <div>
      {sortedData.length > 1 && (
        <div className='sorting'>
          <a onClick={modalHandler}>
            <img width={15} src='/images/sort.svg' alt='' />
            &nbsp;
            <span>Order By</span>
          </a>
          {modalVisible && (
            <div className='modal'>
              <a onClick={() => setSortingValue('nameAsc')} className={sortingValue === 'nameAsc' ? 'active' : ''}>
                Name ascending
              </a>
              <a onClick={() => setSortingValue('nameDesc')} className={sortingValue === 'nameDesc' ? 'active' : ''}>
                Name descending
              </a>
              <a onClick={() => setSortingValue('yearAsc')} className={sortingValue === 'yearAsc' ? 'active' : ''}>
                Year ascending
              </a>
              <a onClick={() => setSortingValue('yearDesc')} className={sortingValue === 'yearDesc' ? 'active' : ''}>
                Year descending
              </a>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Ordering;
