import * as React from 'react';
import { Routes, Route, Link, useNavigate, Navigate} from "react-router-dom";
import logo from './../../../src/wavelength.svg';
import '../Discover/Discover.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import LogoutIcon from '@mui/icons-material/Logout';

function Matches(){

    return(
        <>
        <div id="navbar" >
           
           <ul>
                <li> 
                    <Link to="/discover" style={{ textDecoration: 'none', color: 'black' }}>
                    < LogoutIcon fontSize="large"/>
                    </Link>
               </li>

                <li>
                    <Link to="/discover" style={{ textDecoration: 'none', color: 'black' }}>
                    < AccountCircleIcon fontSize="large"/>
                    </Link>
               </li>
               
               <li>
                <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
                    <FavoriteRoundedIcon fontSize="large"/>
                </Link>
               </li>
               <li>
                    <Link to="/discover" style={{ textDecoration: 'none', color: 'black' }}>
                    < HomeRoundedIcon fontSize="large"/>
                    </Link>
               </li>
            
           <li id="logo_li">
               <Link to="/" style={{ textDecoration: 'none' }}>
                   <img src={logo} id="logo_img" alt="logo" />
               </Link>
           </li>
           </ul>
           
       </div>
        <div id="maincontainer">
            <h1>My Matches</h1>
            
        </div>
        
        </>
    );
}

export default Matches;