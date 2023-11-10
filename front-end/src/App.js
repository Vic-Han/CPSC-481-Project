import {React, useState, useEffect} from "react"

import LoggedOutHomepage from './Hompage/LoggedOutHompage';
import Homepage from './Hompage/Homepage';

import LoggedOutNavbar from './Navbar/LoggedOutNavbar';
import Navbar from './Navbar/Navbar';

import LoginOverLay from './Login-Register/LoginOverlay';
import RegisterOverLay from './Login-Register/RegisterOverLay.jsx'

import NewPostOverLay from './Posts/NewPostOverLay';
import DMOverLay from './DM/DMOverLay';
import SearchResults from './Search/SearchResults';
import Gamestore from './Gamestore/Gamestore';
import MyProfile from './Profile/MyProfile.jsx';

function App() {
  const navbarClickHandlers = {
    toggleHomePage: showHomePage,
    toggleNewPost: showNewPostOverLay,
    toggleSearchPage : showSearchScreen,
    toggleProfile: showProfile,

    toggleGameStore: showGameStore,
    toggleDM: showDMOverLay,
  }

  const [navBar, setNavBar] = useState(<LoggedOutNavbar loginEvent ={showLogin} registerEvent = {showRegister}/>)
  const [mainScreen, setMainScreen] = useState(<LoggedOutHomepage registerEvent2 = {showRegister}/>)
  const [login, setLogin] = useState(false)
  const [register, setRegister] = useState(false)
  const [newPost, setNewPost] = useState(false)
  const [DM, setDM] = useState(false)

  function hideAllOverLays() {
    setLogin(false)
    setRegister(false)
    setNewPost(false)
    setDM(false)
  }

  function showHomePage() {
    hideAllOverLays()
    setNavBar(<Navbar clickHandlers = {navbarClickHandlers}/>)
    setMainScreen(<Homepage/>)
  }

  function showLogin() {
    hideAllOverLays()
    setLogin(true)
  }
 
  function showRegister() {
    hideAllOverLays()
    setRegister(true)
  }

  function showNewPostOverLay() {
    hideAllOverLays()
    setNewPost(true)
  }

  function showGameStore() {
    setMainScreen(<Gamestore></Gamestore>)
  }

  function showSearchScreen() {
    setMainScreen(<SearchResults/>)
  }
  function showProfile(){
    setMainScreen(<MyProfile/>)
  }

  function showOtherProfile() {

  }

  function showDMOverLay() {
    hideAllOverLays()
    setDM(true)
  }

  return (
    <div>
      {login ? <LoginOverLay loginEvent = {showHomePage} registerEvent ={showRegister} cancelEvent = {hideAllOverLays}/> : null}
      {register ? <RegisterOverLay loginEvent = {showLogin} cancelEvent={hideAllOverLays}/> : null}
      {newPost ? <NewPostOverLay close = {hideAllOverLays}/> : null}
      {DM ? <DMOverLay closeEvent ={hideAllOverLays}/> : null}
      {navBar}
      {mainScreen}
    </div> 
  );
}

export default App;
