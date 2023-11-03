import logo from './logo.svg';
import './App.css';
import {React, useState, useEffect} from "react"
import LoggedOutHomepage from './Hompage/LoggedOutHompage';
import Homepage from './Hompage/Homepage';
import LoggedOutNavbar from './Navbar/LoggedOutNavbar';
import LoginOverLay from './Login-Register/LoginOverlay';
import Navbar from './Navbar/Navbar';
import RegisterOverLay from './Login-Register/RegisterOverLay.jsx'
import NewPostOverLay from './Posts/NewPostOverLay';
import DMOverLay from './DM/DMOverLay';
function App() {
  const [navBar, setNavBar] = useState(<LoggedOutNavbar loginEvent ={showLogin} registerEvent = {showRegister}/>)
  const [mainScreen, setMainScreen] = useState(<LoggedOutHomepage/>)
  const [login, setLogin] = useState(false)
  const [register, setRegister] = useState(false)
  const [newPost, setNewPost] = useState(false)
  const [DM, setDM] = useState(false)
  function hideAllOverLays(){
    setLogin(false)
    setRegister(false)
    setNewPost(false)
    setDM(false)
  }
  function showHomePage(){
    hideAllOverLays()
    setNavBar(<Navbar/>)
    setMainScreen(<Homepage/>)
  }
  function showLogin(){
    hideAllOverLays()
    setLogin(true)
  }
 
  function showRegister(){
    hideAllOverLays()
    setRegister(true)
  }

  function showNewPostOverLay(){

  }
  function hideNewPostOverLay(){

  }
  return (
    <div>
      {login ? <LoginOverLay loginEvent = {showHomePage} registerEvent ={showRegister} cancelEvent = {hideAllOverLays}/> : null}
      {register ? <RegisterOverLay loginEvent = {showLogin} cancelEvent={hideAllOverLays}/> : null}
      {newPost ? <NewPostOverLay/> : null}
      {DM ? <DMOverLay/> : null}
      {navBar}
      {mainScreen}
    </div> 
  );
}

export default App;
