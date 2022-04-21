import React, { useEffect, useState } from 'react';
import './ListDetail.css';
import Listing from './Listing';
import Ordering from './Ordering';
import Pagination from './Pagination';

const ListDetail = ({ data }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [render, setRender] = useState(false);
  const [sortedData, setSortedData] = useState([]);
  const [sortingValue, setSortingValue] = useState('');
  const [resultPerPage, setResultPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  // console.log(currentPage);
  // console.log(totalPage);

  useEffect(() => {
    setSortedData(data);
    setTotalPage(Math.ceil(data.length / resultPerPage));
    setRender(!render);
    if (sortingValue !== '') {
      if (sortingValue === 'nameAsc') {
        setSortedData(data.sort((a, b) => a[0].localeCompare(b[0])));
        // console.log(sortedData);
      } else if (sortingValue === 'nameDesc') {
        setSortedData(data.sort((a, b) => b[0].localeCompare(a[0])));
        // console.log(sortedData);
      } else if (sortingValue === 'yearAsc') {
        setSortedData(data.sort((a, b) => +a[3].split('/').reverse().join('') - +b[3].split('/').reverse().join('')));
        // console.log(sortedData);
      } else if (sortingValue === 'yearDesc') {
        setSortedData(data.sort((a, b) => +b[3].split('/').reverse().join('') - +a[3].split('/').reverse().join('')));
        // console.log(sortedData);
      }
    }
    if (currentPage !== 0) {
      setSortedData(data.slice((currentPage - 1) * resultPerPage, currentPage * resultPerPage));
    }
  }, [sortingValue, data, currentPage]);

  const modalHandler = e => {
    e.preventDefault();
    setModalVisible(!modalVisible);
    setSortingValue('');
  };

  return (
    <div className='detail'>
      <div className='list-sort'>
        <div className='listing'>
          <Listing sortedData={sortedData} />
        </div>
        <Ordering sortedData={sortedData} modalVisible={modalVisible} setSortingValue={setSortingValue} sortingValue={sortingValue} modalHandler={modalHandler} />
      </div>
      <Pagination data={data} currentPage={currentPage} setCurrentPage={setCurrentPage} totalPage={totalPage} />
    </div>
  );
};

export default ListDetail;
