import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../style/img/logo.png';
import btngoogle from '../style/img/btn-google.png';
import GoogleAuth from './GoogleAuth';

const Header = () => {
    return(
            <header>
                <div className="row">
                    <Link to='/'><img src={logo} alt="Logo" className="logo" /></Link>
                    <GoogleAuth />
                </div>
            <div className="hero-content">
                <div><h1>Gameus</h1></div>
                <div><h1>Where gamer are not just playing games</h1></div>

            </div>
            </header>
    );
}

export default Header;