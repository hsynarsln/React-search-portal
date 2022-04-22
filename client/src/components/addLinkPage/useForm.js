import { omit } from 'lodash';
import { useState } from 'react';

const useForm = callback => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});

  const validate = (event, name, value) => {
    switch (name) {
      case 'fullName':
        if (value.length <= 4) {
          setErrors({
            ...errors,
            fullName: 'Name and surname should contain at least 4 letters'
          });
        } else if (!new RegExp(/^[A-Za-z][a-z]*(([,.] |[ '-])[A-Za-z][a-z]*)*(\.?)$/).test(value.trim())) {
          setErrors({
            ...errors,
            fullName: 'Name and surname should contain only letters'
          });
        } else if (value.length > 60) {
          setErrors({
            ...errors,
            fullName: 'Name and surname should contain less than 60 letters'
          });
        } else {
          let newObj = omit(errors, 'fullName');
          setErrors(newObj);
        }
        break;

      case 'email':
        if (!new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).test(value)) {
          setErrors({
            ...errors,
            email: 'Enter a valid email address'
          });
        } else {
          let newObj = omit(errors, 'email');
          setErrors(newObj);
        }
        break;

      case 'country':
        if (value.length <= 2) {
          setErrors({
            ...errors,
            country: 'Country should contain at least 2 letters'
          });
        } else if (!new RegExp(/^[A-Za-z][a-z]*(([,.] |[ '-])[A-Za-z][a-z]*)*(\.?)$/).test(value.trim())) {
          setErrors({
            ...errors,
            country: 'Country should contain only letters'
          });
        } else if (value.length > 40) {
          setErrors({
            ...errors,
            country: 'Country should contain less than 40 letters'
          });
        } else {
          let newObj = omit(errors, 'country');
          setErrors(newObj);
        }
        break;
      case 'city':
        if (value.length <= 2) {
          setErrors({
            ...errors,
            city: 'City should contain at least 2 letters'
          });
        } else if (!new RegExp(/^[A-Za-z][a-z]*(([,.] |[ '-])[A-Za-z][a-z]*)*(\.?)$/).test(value.trim())) {
          setErrors({
            ...errors,
            city: 'City should contain only letters'
          });
        } else if (value.length > 40) {
          setErrors({
            ...errors,
            city: 'City should contain less than 40 letters'
          });
        } else {
          let newObj = omit(errors, 'city');
          setErrors(newObj);
        }
        break;

      default:
        break;
    }
  };

  const handleChange = event => {
    event.persist();

    let name = event.target.name;
    let val = event.target.value;

    validate(event, name, val);

    setValues({
      ...values,
      [name]: val
    });
  };

  const handleSubmit = event => {
    if (event) event.preventDefault();

    if (Object.keys(errors).length === 0 && Object.keys(values).length === 4) {
      callback();
    } else {
      console.log(errors);
    }
  };

  return {
    values,
    errors,
    handleChange,
    handleSubmit
  };
};

export default useForm;
