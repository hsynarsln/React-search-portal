import React from 'react';

const Pagination = ({ data, currentPage, setCurrentPage, totalPage }) => {
  return (
    <div>
      {data.length > 5 && (
        <div className='pagination'>
          {currentPage > 1 && (
            <a
              href=''
              onClick={e => {
                e.preventDefault();
                setCurrentPage(currentPage !== 1 ? currentPage - 1 : currentPage);
              }}
            >
              Previous
            </a>
          )}
          {totalPage < 7 ? (
            [...Array(totalPage)].map((item, index) => (
              <a
                key={index}
                href=''
                onClick={e => {
                  e.preventDefault();
                  setCurrentPage(index + 1);
                }}
                className={currentPage === index + 1 ? 'current-page' : ''}
              >
                {index + 1}
              </a>
            ))
          ) : (
            <>
              {[...Array(totalPage)].map((item, index) =>
                index < 3 || index > totalPage - 4 || index + 1 === currentPage ? (
                  <a
                    key={index}
                    href=''
                    onClick={e => {
                      e.preventDefault();
                      setCurrentPage(index + 1);
                    }}
                    className={currentPage === index + 1 ? 'current-page' : ''}
                  >
                    {index + 1}
                  </a>
                ) : (
                  <div>.</div>
                )
              )}
            </>
          )}
          {currentPage !== totalPage && (
            <a
              href=''
              onClick={e => {
                e.preventDefault();
                setCurrentPage(currentPage !== totalPage ? currentPage + 1 : currentPage);
              }}
            >
              Next
            </a>
          )}
        </div>
      )}
    </div>
  );
};

export default Pagination;
