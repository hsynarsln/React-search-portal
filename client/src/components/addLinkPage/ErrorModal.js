import React from 'react';
import './ErrorModal.css';

const ErrorModal = ({ errorModal, setModalVisible }) => {
  return (
    <div className='modal-box'>
      <div className='modal-box-content'>
        <p>Error while adding link element</p>
        <span>{errorModal?.fullName}</span>
        <span>{errorModal?.city}</span>
        <span>{errorModal?.country}</span>
        <span>{errorModal?.email}</span>
      </div>
      <div className='badge'>Error</div>
      <div className='close-btn' onClick={() => setModalVisible(false)}>
        x
      </div>
    </div>
  );
};

export default ErrorModal;
