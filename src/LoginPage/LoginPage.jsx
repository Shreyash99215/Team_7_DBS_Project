import React from 'react';
import './LoginPage.css';
import { useNavigate } from 'react-router-dom';

export const LoginPage = () => {

    const navigate = useNavigate();

    const handleLogin = (event)=>{
        event.preventDefault();
        navigate("/dashboard");
    }
  return (
    <div>
        <h1>BANK MANAGEMENT SYSTEM</h1>
        <h2>Login Page</h2>
        <div className='input-box'>
            <input type="Email" placeholder="Email"></input>
            <input type="Password" placeholder="password" required></input>
        </div>
        <div className='remember-forget'>
            <label><input type="checkbox"/>Remember me  </label>
            <a href='#'>Forget Password</a>
            <button onClick={handleLogin}>LOGIN</button>
            <button>CANCEL</button>
        </div>
    </div>
  )
}
