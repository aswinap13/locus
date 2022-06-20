import React from 'react';
import './Form.css';

const FormSuccess = () => {
  return (
    <div className='form-content-right'>
      <img className='form-img-2' src={require('../img/logo.png')} alt='success-image' />
      <h1 className='form-success'>We've received your request!
      <br/>Check your mail for further details.
      </h1>
    </div>
  );
};

export default FormSuccess;
