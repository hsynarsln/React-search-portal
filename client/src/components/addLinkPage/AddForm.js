import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AddForm.css';
import useForm from './useForm';

const AddForm = ({ setErrorModal, setModalVisible, modalVisible }) => {
  const navigate = useNavigate();

  const formLogin = async () => {
    setModalVisible(true);
    console.log('Form Values ', values);
    navigate('/search-results');
    setModalVisible(false);
  };

  const { handleChange, values, errors, handleSubmit } = useForm(formLogin);

  return (
    <form
      className='form'
      onSubmit={e => {
        e.preventDefault();
        handleSubmit();
        setModalVisible(true);
        setErrorModal(errors);
      }}
    >
      <div className='form-group'>
        <label htmlFor='fullName' className={errors.fullName && modalVisible ? 'labelError' : ''}>
          Name Surname
        </label>
        <input type='text' name='fullName' id='fullName' placeholder='Enter name and surname' onChange={handleChange} className={errors.fullName && modalVisible ? 'inputError' : ''} />
        {errors.fullName && modalVisible && <p className='labelError'>{errors.fullName}</p>}
      </div>
      <div className='form-group'>
        <label htmlFor='country' className={errors.country && modalVisible ? 'labelError' : ''}>
          Country
        </label>
        <input type='text' name='country' id='country' placeholder='Enter a country' onChange={handleChange} className={errors.country && modalVisible ? 'inputError' : ''} />
        {errors.country && modalVisible && <p className='labelError'>{errors.country}</p>}
      </div>
      <div className='form-group'>
        <label htmlFor='city' className={errors.city && modalVisible ? 'labelError' : ''}>
          City
        </label>
        <input type='text' name='city' id='city' placeholder='Enter a city' onChange={handleChange} className={errors.city && modalVisible ? 'inputError' : ''} />
        {errors.city && modalVisible && <p className='labelError'>{errors.city}</p>}
      </div>
      <div className='form-group'>
        <label htmlFor='email' className={errors.email && modalVisible ? 'labelError' : ''}>
          Email
        </label>
        <input type='email' name='email' id='email' placeholder='Enter a e-mail (abc@xyz.com)' onChange={handleChange} className={errors.email && modalVisible ? 'inputError' : ''} />
        {errors.email && modalVisible && <p className='labelError'>{errors.email}</p>}
      </div>
      <button className='btn' type='submit' disabled={!values.fullName || !values.email || !values.city || !values.country}>
        Add
      </button>
    </form>
  );
};

export default AddForm;
