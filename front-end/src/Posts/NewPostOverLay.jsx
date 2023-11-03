import './NewPostOverLay.css'
import {React, useState} from "react"
function NewPostOverLay(props) {
    const loginEvent = props.loginEvent
    const registerEvent = props.registerEvent
  return (
    <div className='popup_overlay'>
        <div className='popup_contents'>
            New Post!!
        </div>
    </div>
  );
}

export default NewPostOverLay;
