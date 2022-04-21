import React from 'react';

const Ordering = ({ modalVisible, setSortingValue, sortingValue, modalHandler }) => {
  return (
    <div>
      <div className='sorting'>
        <a href={() => false} onClick={modalHandler}>
          <img width={15} src='/images/sort.svg' alt='' />
          &nbsp;
          <span>Order By</span>
        </a>
        {modalVisible && (
          <div className='modal'>
            <a href={() => false} onClick={() => setSortingValue('nameAsc')} className={sortingValue === 'nameAsc' ? 'active' : ''}>
              Name ascending
            </a>
            <a href={() => false} onClick={() => setSortingValue('nameDesc')} className={sortingValue === 'nameDesc' ? 'active' : ''}>
              Name descending
            </a>
            <a href={() => false} onClick={() => setSortingValue('yearAsc')} className={sortingValue === 'yearAsc' ? 'active' : ''}>
              Year ascending
            </a>
            <a href={() => false} onClick={() => setSortingValue('yearDesc')} className={sortingValue === 'yearDesc' ? 'active' : ''}>
              Year descending
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Ordering;
