import './DMOverLay.css';
import {React, useState} from "react"
function DMOverLay(props) {

    const closePopup = props.closeEvent
    return (
        <div id='dm-overlay'>
            DM OverLay (;
            <button onClick={closePopup}>Close</button>
        </div>
  );
}

export default DMOverLay;