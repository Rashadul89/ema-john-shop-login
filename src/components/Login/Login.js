import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    
    const navigate = useNavigate();
    const location=useLocation();
const from=location.state?.from?.pathname || '/';
    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }
    const handlePasswordlBlur = event => {
        setPassword(event.target.value);
        signInWithEmailAndPassword(email, password);
    }
    if (user) {
        navigate(from,{replace:true});
    }
    const handleUSerSignIn = event => {
        event.preventDefault();
    }
    return (
        <div className='form-container'>
            <div className='input'>
                <form onSubmit={handleUSerSignIn}>
                    <h1 className='form-title'>Sign IN</h1>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlur} type="email" name="" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePasswordlBlur} type="password" name="" id="" required />
                    </div>
                    <p style={{ color: 'red' }}>{error?.message}</p>
                    {
                        loading && <p>Loading...</p>
                    }
                    <input className='form-submit' type="submit" value="LogIn" />
                </form>
                <p>New In Ema-John??? <Link className='form-link' to="/register">Please Register</Link> </p>
            </div>
        </div>
    );
};

export default Login;