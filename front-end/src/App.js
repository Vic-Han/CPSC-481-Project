import logo from './logo.svg';
import './App.css';
import {React, useState, useTransition} from "react"
import LoggedOutHomepage from './Hompage/LoggedOutHompage';
import Homepage from './Hompage/Homepage';
import LoggedOutNavbar from './Navbar/LoggedOutNavbar';
import LoginOverLay from './Login-Register/LoginOverlay';
import Navbar from './Navbar/Navbar';
function App() {
  const [navBar, setNavBar] = useState(<LoggedOutNavbar loginEvent ={showLogin} registerEvent = {showRegister}/>)
  const [mainScreen, setMainScreen] = useState(<LoggedOutHomepage/>)
  const [login, setLogin] = useState(false)
  const [register, setRegister] = useState(false)
  function showHomePage(){

    setNavBar(<Navbar/>)
    setMainScreen(<Homepage/>)
  }
  function showLogin(){
    setLogin(true)
  }
  function hideLogin(){
    setLogin(false)
  }
  function showRegister(){
    setRegister(true)
  }
  function hideRegister(){
    setRegister(false)
  }
  return (
    <div>
      {login ? <LoginOverLay/> : null}
      {navBar}
      {mainScreen}
    </div>
  );
}

export default App;
