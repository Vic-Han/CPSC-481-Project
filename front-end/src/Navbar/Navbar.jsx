import './Navbar.css';
import {React, useState} from "react"
function Navbar(props) {
    const toggleGameStore = props.toggleGameStore
  return (
    <div className='navbar_container'>
      <h1> This is the Navbar</h1>
      {/*
        <img className='' src = "" alt =""/>
        <div className=''> New Post</div>
        <input className ='' type = "text"/>
        <img onClick = {toggleGameStore} className='' src = "" alt =""/>
        <img className='' src = "" alt =""/>
        <img className='' src = "" alt =""/>*/}
    </div>
  );
}

export default Navbar;