import React, { useState } from 'react';
import {Toaster,toast} from 'react-hot-toast';
import './Form.css';

const Form = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    username: '',
    password: '',
  });

  const validateForm = () => {
    let isValid = true;
    const newErrors = { ...errors };

    if (formData.username.trim() === '') {
      newErrors.username = 'Username is required';
      isValid = false;
    } else {
      newErrors.username = '';
    }

    if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
      isValid = false;
    } else {
      newErrors.password = '';
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Perform form submission logic (e.g., API call, authentication, etc.)
      console.log('Form submitted:', formData);
      toast.success('Login Successful !')
    } else {
      // Display validation errors to the user
      console.log('Form validation failed');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="background">
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
        {errors.username && <div className="error">{errors.username}</div>}
      </div>

      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        {errors.password && <div className="error">{errors.password}</div>}
      </div>

      <Toaster
  position="bottom-center"
  reverseOrder={false}
/>
      <center>

      <button type="submit">Login</button>
      </center>
    </form>
  );
};

export default Form;
