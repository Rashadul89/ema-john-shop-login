import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {useCreateUserWithEmailAndPassword} from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'

const Register = () => {
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const[confirmPass,setConfirmPass]=useState('');
    const[error,setError]=useState('');
    const navigate=useNavigate();


    const [createUserWithEmailAndPassword,user]= useCreateUserWithEmailAndPassword(auth);
 

    const handleEmailBlur=event=>{
        setEmail(event.target.value);
    }
    const handlePasswordlBlur=event=>{
        setPassword(event.target.value);
    }
    const handleConfirmPasswordlBlur=event=>{
        setConfirmPass(event.target.value);
    }
    const handleError=event=>{
        setError(event.target.value);
    }
    if(user){
         navigate('/');
    }

    const handleCreateUSer=event=>{
        event.preventDefault(); 
        if(password!==confirmPass){
            setError('Your password not match..Try again');
            return;
        }
        if(password.length>6){
            setError('please password must be more then 5 characters or longer')
            return;
        }
        createUserWithEmailAndPassword(email,password);
    }


    return (
        <div className='form-container'>
        <div className='input'>
            <form onSubmit={handleCreateUSer}>
                <h1 className='form-title'>Register</h1>
                <div className="input-group">
                    <label htmlFor="email">Email</label>
                    <input onBlur={handleEmailBlur} type="email" name="" id=""  required />
                </div>
                <div className="input-group">
                    <label htmlFor="password">Password</label>
                    <input onBlur={handlePasswordlBlur} type="password" name="" id="" required />
                    <br />
                    <br />
                    <label htmlFor="password">Confirm Password</label>
                    <input onBlur={handleConfirmPasswordlBlur} type="password" name="" id="" required />
                </div>
                <p style={{color:'red'}}>{error}</p>
                <input className='form-submit' type="submit" value="Register" />
            </form>
           
           <p>Already have an account? <Link className='form-link' to="/login">LogIn</Link> </p>
        </div>
    </div>
    );
};

export default Register;