import {React, useState, useEffect} from "react"
import './FollowingOverLay.css'
function FollowingOverLay(props){
    const close = props.close
    return(
        <div className='popup_overlay'>
        <div className='popup_contents'>
            Following OverLay!
            <button onClick={close}> Close</button>
        </div>
    </div>
    )
}
export default FollowingOverLay