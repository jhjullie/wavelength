import * as React from 'react';
import { Routes, Route, Link, useNavigate, Navigate} from "react-router-dom";
import logo from './../../../src/wavelength.svg';
import '../Discover/Discover.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import LogoutIcon from '@mui/icons-material/Logout';
import Tab from '@mui/material/Tab'
import Tabs from '@mui/material/Tabs'

function Discover(){
    const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
    
    return(
        <>
        <div id="navbar" >
           
           <ul>
               <li>
               <Tabs value={value} onChange={handleChange} textColor="secondary" indicatorColor="secondary">
                    <Tab icon={<HomeRoundedIcon fontSize="medium"/>} label="DISCOVER" containerElement={<Link to="/"/>}/>
                    <Tab icon={<FavoriteRoundedIcon />} label="MATCHES" />
                    <Tab icon={<AccountCircleIcon />} label="PROFILE" />
                    <Tab icon={<LogoutIcon />} label="LOGOUT" />
                </Tabs>
               </li>

            {/* <li>
                <Link to="/signin" style={{ textDecoration: 'none', color:'black' }}>Log out</Link>
            </li>
            <li>
                <AccountCircleIcon fontSize="large"/>
            </li>
            <li>
                <FavoriteRoundedIcon fontSize= "large"/>
            </li>
            <li>
                <HomeRoundedIcon fontSize="large" />
            </li> */}
           <li id="logo_li">
               <Link to="/" style={{ textDecoration: 'none' }}>
                   <img src={logo} id="logo_img" alt="logo" />
               </Link>
           </li>
           </ul>
           
       </div>
       <div id="maincontainer">
            <h1>Discover Page</h1>
            
       </div>
       
        
        
        </>
    );
}

export default Discover;