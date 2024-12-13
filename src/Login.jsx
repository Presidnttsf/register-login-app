import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });


  function handleLogin(e) {
    e.preventDefault();
    // Basic login check
    const loggedUser = JSON.parse(localStorage.getItem("user"));

    if (!loggedUser) {
      alert("user not found!!")

    }


    if (formData.email === loggedUser.email && formData.password === loggedUser.password) {
      localStorage.setItem("loggedin", true);

      navigate("/")
    } else {
      alert('Invalid credentials');
    }
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function HandleSignUp() {
    navigate("/signup")
  }

  return (
    <div className="signup-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
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
          <button type="submit">Login</button>
        </div>
      </form>

      <div>
        <p>Don't have accout</p> <span onClick={HandleSignUp}>Click her to SignUp</span>

      </div>

    </div >
  );
}

export default Login;
