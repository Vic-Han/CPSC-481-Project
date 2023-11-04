import './NewPostOverLay.css'
import {React, useState} from "react"
function NewPostOverLay(props) {
    const cancelEvent = props.close
  return (
    <div className='popup_overlay'>
        <div className='popup_contents'>
            New Post!!
            <button onClick={cancelEvent}> Close</button>
        </div>
    </div>
  );
}

export default NewPostOverLay;
