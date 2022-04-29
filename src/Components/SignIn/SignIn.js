import * as React from 'react';
import { Routes, Route, Link, useNavigate, Navigate} from "react-router-dom";
import { useState } from 'react';
import logo from './../../../src/wavelength.svg';
import '../SignIn/SignIn.css'
import { InputSharp, SettingsInputSvideo } from '@mui/icons-material';

const defaultvalues = {
    email:"",
    password:"",
};


function SignIn(){
    const [inputs, setInputs] = useState(defaultvalues);

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInputs(values => ({...values, [name]:value}) )

    }

    const navigate = useNavigate();
    const handleSubmit = (event) => {
        
        event.preventDefault();
        console.log(inputs);
        return navigate('/discover');
    }

    //const signup = async (params) => {
 // await fetch()......
// return {
//     status: "ok"
//    }

    return (
        <>
        <div id="navbar" >
           
            <ul>
            <li>
                <Link to="/signin" style={{ textDecoration: 'none', color:'black' }}>Sign In</Link>
            </li>
            <li id="logo_li">
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <img src={logo} id="logo_img" alt="logo" />
                </Link>
            </li>
            </ul>
            
        </div>
        
        <div id="signincontainer">
            <h1>Sign up page</h1>
            <form onSubmit={handleSubmit}>
            <label >
                <p>Email</p>
                <input type="text" name= "email" value={inputs.email} onChange={handleChange} />
            </label>
            <label>
                <p>Password</p>
                <input type="password" name= "password" value={inputs.password} onChange={handleChange} />
            </label>
            <div>
                <button type="submit">Submit</button>
            </div>
            </form>
        </div>
        
        </>
        
      );
};

export default SignIn;