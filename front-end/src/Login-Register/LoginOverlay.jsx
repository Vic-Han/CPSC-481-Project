import './LoginOverLay.css';
import {React, useState} from "react"
function LoginOverLay(props) {
    const loginEvent = props.loginEvent
    const registerEvent = props.registerEvent
    const cancelEvent = props.cancelEvent
  return (
    <div className='popup_overlay'>
        <div className='popup-contents-login'>
          <div  className='login-contents'>
            <div className='flex-box-login'>
              <div className='main-title-login'>Log In</div>
              <div className='cancel-login-button' onClick={cancelEvent}>x</div>
              <label className='input-label-login'>Username</label>
              <input type = "text" className='login-input'></input>
              <div className='forgot-label-login'>Forgot Username?</div>
              <label className='input-label-login'>Password</label>
              <input type = "password"className='login-input'></input>
              <div className='forgot-label-login'>Forgot Password?</div>
              <button onClick={loginEvent} className='login-button'>Login</button>
            </div>
            <div className='bottom-container-login'>
              <div className='bottom-left-login'>Not Registered?</div>
              <div onClick={registerEvent} className='bottom-right-login'>Create an Account</div>
            </div>
          </div> 
        </div>
    </div>
  );
}

export default LoginOverLay;
