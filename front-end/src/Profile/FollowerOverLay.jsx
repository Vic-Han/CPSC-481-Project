import {React, useState, useEffect} from "react"
import './FollowerOverLay.css'
import example1 from '../assets/example1.png';
import example2 from '../assets/example2.png';
function FollowerOverLay(props){
  const close = props.close
    return(
        <div className='popup_overlay'>
        <div className='popup_contents-follower'>
          Follower OverLay!!
          <button onClick={close}> Close</button>
        </div>
    </div>
    )
}
export default FollowerOverLay