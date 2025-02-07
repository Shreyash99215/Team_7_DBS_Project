import React, { useState } from 'react';
import './SignUpPage.css';
import { useNavigate } from 'react-router-dom';

export const SignUpPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();

    const handleSignUp = (event) => {
        event.preventDefault();

        // Frontend validation: Ensure passwords match
        if (password === confirmPassword) {
            alert("Registration successful!"); // Placeholder for success message
            navigate("/dashboard"); // Navigate to the dashboard (or wherever you'd like)
        } else {
            alert("Passwords do not match!");
        }
    }

    return (
        <div>
            <h1>BANK MANAGEMENT SYSTEM</h1>
            <h2>Registration Page</h2>
            <form onSubmit={handleSignUp}>
                <div className="input-box">
                    <input 
                        type="email" 
                        placeholder="Email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        required 
                    />
                    <input 
                        type="password" 
                        placeholder="Password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        required />
                    <input 
                        type="password" 
                        placeholder="Confirm Password" 
                        value={confirmPassword} 
                        onChange={(e) => setConfirmPassword(e.target.value)} 
                        required 
                    />
                </div>
                <button type="submit">REGISTER</button>
            </form>
        </div>
    );
};
