import * as React from 'react';
import { Routes, Route, Link, useNavigate, Navigate} from "react-router-dom";
import logo from './../../../src/wavelength.svg';
import '../Discover/Discover.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import LogoutIcon from '@mui/icons-material/Logout';
import CancelIcon from '@mui/icons-material/Cancel';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Tab from '@mui/material/Tab'
import Tabs from '@mui/material/Tabs'



function Discover(){
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
    setValue(newValue);
    };
    
    const navigate = useNavigate();
    function logout(){
        //clear data first??

        return navigate('/');
    }

    return(
        <>
        <div id="navbar" >
           <ul>
               
                <li>
                    < LogoutIcon fontSize="large" onClick= {logout}/>
                    
               </li>

                <li>
                    <Link to="/discover" style={{ textDecoration: 'none', color: 'black' }}>
                    < AccountCircleIcon fontSize="large"/>
                    </Link>

               </li>
               
               <li>
               {/* <Tabs value={value} onChange={handleChange} textColor="secondary" indicatorColor="secondary">
                    <LinkTab icon={<HomeRoundedIcon fontSize="medium"/>} label="DISCOVER" href="/signin"/>
                    <Tab icon={<FavoriteRoundedIcon />} label="MATCHES" />
                    <Tab icon={<AccountCircleIcon />} label="PROFILE" />
                    <Tab icon={<LogoutIcon />} label="LOGOUT" />
                </Tabs> */}
                <Link to="/matches" style={{ textDecoration: 'none', color: 'black' }}>
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
            <p id="header">Find your Match</p>
            <div id="profile">
                Name, Age
                <div id="yesnoicons">
                    <CancelIcon fontSize="large"/>
                    <CheckCircleIcon fontSize="large" />
                </div>
                
            </div>
       </div>
       
        
        
        </>
    );
}

export default Discover;