import {React, useState, useEffect} from "react"
import './FollowerOverLay.css'
function FollowerOverLay(props){
  const close = props.close
    return(
        <div className='popup_overlay'>
        <div className='popup_contents'>
          Follower OverLay!!
          <button onClick={close}> Close</button>
        </div>
    </div>
    )
}
export default FollowerOverLay