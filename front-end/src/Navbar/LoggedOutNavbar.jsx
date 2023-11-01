import './LoggedOutNavbar.css';
import {React, useState} from "react"
function LoggedOutNavbar(props) {
    const registerEvent = props.registerEvent
    const loginEvent = props.loginEvent     
  return (
    <div className='navbar_container_logged_out'>
        <img src= "" alt = "logo" className=''/>
        <div>Esports Zone</div>
        <div>About Us</div>
        <div onClick={registerEvent}>Sign Up</div>
        <button onClick={loginEvent}>Login</button>
    </div>
  );
}

export default LoggedOutNavbar;