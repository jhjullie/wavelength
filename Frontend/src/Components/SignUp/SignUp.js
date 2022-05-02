import * as React from 'react';
import { Routes, Route, Link } from "react-router-dom";

import logo from './../../../src/wavelength.svg';
import '../SignIn/SignIn.css'


function SignUp(){
    
    return (
        <>
        
        <div id="navbar" >
           
            <ul>
            <li>
            <Link to="/signin" style={{ textDecoration: 'none', color:'black' }}>Log In</Link>
            </li>
            <li id="logo_li">
                <Link to="/">
                    <img src={logo} id="logo_img" alt="logo" />
                </Link>
            </li>
            </ul>
            
        </div>
        
        <div id="signincontainer">
            <h1>Sign up page</h1>
            <form>
            <label>
                <p>Name</p>
                <input type="text" />
            </label>
            <label>
                <p>Phone Number</p>
                <input type="text" />
            </label>
            <label>
                <p>Email</p>
                <input type="text" />
            </label>
            <label>
                <p>Password</p>
                <input type="password" />
            </label>
            <div>
                <button type="submit">Submit</button>
            </div>
            </form>
        </div>

        
        </>
        
      );
};

export default SignUp;