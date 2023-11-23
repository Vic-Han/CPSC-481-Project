import './RegisterOverLay.css';
import {React, useState} from "react"
function RegisterOverLay(props) {
    const loginEvent = props.loginEvent
    const registerEvent = props.registerEvent
    const cancelEvent = props.cancelEvent
  return (
    <div className='popup_overlay'>
        <div className='popup_contents-register'>
          <div className='flex-box-register'>
            <div className='main-title-register'>Sign Up</div>
            <div onClick ={cancelEvent} className='cancel-register-button'>x</div>
            <label className='register-label'>First Name</label>
            <input className = 'register-input' type = "text"></input>
            <label className='register-label'>Last Name</label>
            <input className = 'register-input' type = "text"></input>
            <label className='register-label'>Username</label>
            <input className = 'register-input' type = "text"></input>
            <label className='register-label'>Email</label>
            <input className = 'register-input' type = "text"></input>
            <label className='register-label'>Password</label>
            <input className = 'register-input' type ="password"></input>
            <div className='password-desc-register'>At least 9 Characters</div>
            <div className='password-desc-register'>At least 1 Uppercase Character</div>
            <div className='password-desc-register'>At least 1 non-alphabetic charcter</div>
            <label className='register-label'> Verify Password</label>
            <input className = 'register-input' type ="password"></input>
            <button onClick={registerEvent} className='register-button'> Register</button>
          </div>
          <div className='bottom-container-register'>
            <div className='bottom-left-register'>Already Registered?</div>
            <div className='bottom-right-register'onClick={loginEvent}>Sign In</div>
          </div>
        </div>
    </div>
  );
}

export default RegisterOverLay;