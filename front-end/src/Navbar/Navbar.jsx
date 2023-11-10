import './Navbar.css';
import {React, useState} from "react"
function Navbar(props) {
  const toggleGameStore = props.clickHandlers.toggleGameStore
  const toggleHomePage = props.clickHandlers.toggleHomePage
  const toggleDM = props.clickHandlers.toggleDM
  const toggleNewPost = props.clickHandlers.toggleNewPost
  const toggleSearchPage = props.clickHandlers.toggleSearchPage
  const toggleProfile = props.clickHandlers.toggleProfile
  return (
    <div className='navbar_container'>
      <h1> This is the Navbar</h1>
      <button onClick={toggleHomePage}> Logo: should toggleHomePage </button>
      <button onClick={toggleNewPost}> New Post</button>
      <button onClick={toggleSearchPage}> Search Page</button>
      <button onClick={toggleDM}> DMS </button>
      <button onClick={toggleGameStore}> GameStore Page</button>
      <button onClick={toggleProfile}> Profile</button>
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