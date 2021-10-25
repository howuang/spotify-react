import React from 'react';
import logo from './images/logo.png'

const Navbar =()=>{
    return <nav id="navbar">
        <div className="container"> 
            <div id="logo"> 
                <img src={logo} width="130"/>
            </div>
            <div className="links"> 
                <a href="#">Premium</a>
                <a href="#">Suport</a>
                <a href="#">Download</a>
                <span>|</span>
                <a href="#">Sign up</a>
                <a href="#">Log in</a>
            </div>
        </div>
    </nav>
}

export default Navbar;