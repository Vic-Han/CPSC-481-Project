import './Navbar.css';
import logo from '../assets/EZLogo-v2.png';
import GameStore from '../assets/GameStore.png';
import DM from '../assets/DM.png';
import ProfileDefault from '../assets/ProfileDefault.png';
import Search from '../assets/Search.png';
import {React, useState} from "react";

function Navbar(props) {
  const toggleHomePage = props.clickHandlers.toggleHomePage
  const toggleNewPost = props.clickHandlers.toggleNewPost
  const toggleSearchPage = props.clickHandlers.toggleSearchPage
  const toggleGameStore = props.clickHandlers.toggleGameStore
  const toggleDM = props.clickHandlers.toggleDM

  return (
    <div className='navbar_container'>
      <div className='navbar_left'>
        <img src={logo}></img>
        <button className='navbar_post_container'>
          <div className='navbar_post'>New Post</div>
        </button>
      </div>
      <div className='navbar_middle'>
        <input type='text' placeholder='Search'></input>
        <img src={Search} tabIndex={0}></img>
      </div>
      <div className='navbar_right'>
        <img src={GameStore}></img>
        <img src={DM}></img>
        <img src={ProfileDefault}></img>
      </div>
    </div>
  );
}

export default Navbar;