import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AddForm from '../components/addLinkPage/AddForm';
import ErrorModal from '../components/addLinkPage/ErrorModal';
import './AddLinkPage.css';

const AddLinkPage = () => {
  const navigate = useNavigate();
  const [errorModal, setErrorModal] = useState({});
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <div className='addLink'>
      <div className='addLink-header'>
        <div className='header-logo' onClick={() => navigate('/')}>
          <h1>TESODEV</h1>
          <p>Technology Solutions Development</p>
        </div>
        <div className='header-return'>
          <a href={() => false} onClick={() => navigate(-1)}>
            <img width={30} src='/images/left-arrow-2.svg' alt='' />
          </a>
          <p>Return to List Page</p>
        </div>
      </div>
      <div className='addLink-body'>
        <AddForm setErrorModal={setErrorModal} setModalVisible={setModalVisible} modalVisible={modalVisible} />
      </div>
      <div className='addLink-footer'>{modalVisible && (errorModal.fullName || errorModal.country || errorModal.city || errorModal.email) && <ErrorModal errorModal={errorModal} setModalVisible={setModalVisible} />}</div>
    </div>
  );
};

export default AddLinkPage;
