import {React, useState, useEffect} from "react"
import './OtherProfile.css'
function OtherProfile(props){
    return(
        <div className='popup_overlay'>
        <div className='popup_contents'>
            <div>Sign Up</div>
            <div>x</div>
            <label>First Name</label>
            <input type = "text"></input>
            <label>Last Name</label>
            <input type = "text"></input>
            <label>Username</label>
            <input type = "text"></input>
            <label>Email</label>
            <input type = "text"></input>
            <label>Password</label>
            <input type ="text"></input>
            <div>At least 9 Characters</div>
            <div>At least 1 Uppercase Character</div>
            <div>At least 1 non-alphabetic charcter</div>
            <button onClick={registerEvent}>Log In</button>
            <div>Already Registered?</div>
            <span onClick={loginEvent}>Sign In</span>
        </div>
    </div>
    )
}
export default OtherProfile