import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // to save value in localStorage
  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('user', JSON.stringify(formData));
    setFormData({ username: '', email: '', password: '' });
    setMessage('Sign-up successful!');
    navigate("/login")



    if (!formData.email.includes('@')) {
      setMessage('Please enter a valid email.');
      return;
    }
    if (formData.password.length < 6) {
      setMessage('Password must be at least 6 characters.');
      return;
    }


  };

  return (
    <div className="signup-container">
      <h2>CREATE AN ACCOUNT</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <button type="submit">Sign Up</button>
        </div>
      </form>
      {message && <h2>{message}</h2>}
    </div>
  );
};

export default SignUp;
