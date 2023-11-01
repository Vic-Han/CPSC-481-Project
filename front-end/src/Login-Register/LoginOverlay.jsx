import './LoginOverLay.css';
import {React, useState} from "react"
function LoginOverLay(props) {
    const loginEvent = props.loginEvent
    const registerEvent = props.registerEvent
  return (
    <div className='popup_overlay'>
        <div className='popup_contents'>
            <div>Log In</div>
            <div className='cancel_button'>x</div>
            <label>Username</label>
            <input></input>
            <div>Forgot Username?</div>
            <label>Password</label>
            <input></input>
            <div>Forgot Password?</div>
            <button onClick={loginEvent}>Log In</button>
            <div>Not Registered?</div><span onClick={registerEvent}>Create an Account</span>
            
        </div>
    </div>
  );
}

export default LoginOverLay;
