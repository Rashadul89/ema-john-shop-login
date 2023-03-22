import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
    return (
        <div className='form-container'>
            <div className='input'>
                <form action="">
                    <h1 className='form-title'>Sign Up</h1>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="" id="" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="" id="" />
                    </div>
                    <input className='form-submit' type="submit" value="LogIn" />
                </form>
                <p>New To Ema-Jhon? <Link to='regsiter' className='form-link'>Create a new user</Link></p>
            </div>
        </div>
    );
};

export default Login;