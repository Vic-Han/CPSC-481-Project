import './LoggedOutNavbar.css';
import logo from '../assets/EZLogo-v2.png'
import {React, useState} from "react"

function LoggedOutNavbar(props) {
  const registerEvent = props.registerEvent;
  const loginEvent = props.loginEvent;

  return (
    <div className='navbar_container_logged_out'>
      <div className='navbar_left_container'>
        <img src={logo}></img>
        <div className='navbar_title'>ESports Zone</div>
      </div>
      <div className='navbar_right_container'>
        <div className='navbar_about'>About Us</div>
        <div className='navbar_register' onClick={registerEvent}>Sign Up</div>
        <div className='navbar_login_container' onClick={loginEvent}>
          <div className='navbar_login'>Login</div>
        </div>
      </div>
    </div>
  );
}

export default LoggedOutNavbar;