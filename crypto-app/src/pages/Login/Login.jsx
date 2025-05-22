import React, { useState } from 'react'
import './Login.css'
import { GoogleLogin } from '@react-oauth/google'
import { jwtDecode } from "jwt-decode";
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Email: ${email}\nPassword: ********`);
  };

  const handleGoogleSuccess = (res) => {
    if(res.credential){
      console.log(res.credential);
      

    const userInfo = jwtDecode(res.credential);
    console.log(userInfo.given_name);
    localStorage.setItem('googleUser', JSON.stringify(userInfo));
    } else {
      console.log("No credential found");
    }
    
    alert('Login successful with Google');
    navigate('/profile');
  }
  const handleGoogleError = () => {
    alert('Google Login Failed');
  };

  

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
        </label>
        <button type="submit">Login</button>
        <div className='signup-link'>
          <p>Don't have an account? <a href="/signup">Sign up</a></p>
        </div>
      </form>
      <div className="google-login">
        <GoogleLogin
          onSuccess={handleGoogleSuccess}
          onError={handleGoogleError}
        />
        </div>
    </div>
  )
}

export default Login