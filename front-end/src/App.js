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
import OtherProfile from "./Profile/OtherProfile.jsx";
import ExpandedPost from "./Posts/ExpandedPost.jsx";
import ExpandedArticle from "./Posts/ExpandedArticle.jsx";
import PostPreview from "./Posts/PostPreview.jsx";
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
  const [previewPost, setPreviewPost] = useState(false)
  const [confirmDraft, setConfirmDraft] = useState(false)
  function hideAllOverLays() {
    setLogin(false)
    setRegister(false)
    setNewPost(false)
    setDM(false)
    setPreviewPost(false)
    setConfirmDraft(false)
  }

  function showHomePage() {
    hideAllOverLays()
    setNavBar(<Navbar clickHandlers = {navbarClickHandlers}/>)
   
    setMainScreen(<Homepage togglePost = {showExpandedPost} toggleArticle = {showExpandedNewsArticle} toggleOtherProfile={showOtherProfile}/>)
    
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
    setMainScreen(<OtherProfile></OtherProfile>)
  }
  function showDMOverLay() {
    hideAllOverLays()
    setDM(true)
  }
  function showExpandedPost(){
    setMainScreen(<ExpandedPost back = {showHomePage}/>)
  }
  function showExpandedNewsArticle(){
    setMainScreen(<ExpandedArticle back = {showHomePage}/>)
  }
  function showPostPreview(){
    hideAllOverLays()
    setPreviewPost(true)
  }
  
  return (
    <div>
      {login ? <LoginOverLay loginEvent = {showHomePage} registerEvent ={showRegister} cancelEvent = {hideAllOverLays}/> : null}
      {register ? <RegisterOverLay loginEvent = {showLogin} cancelEvent={hideAllOverLays}/> : null}
      {newPost ? <NewPostOverLay close = {hideAllOverLays} previewPost ={showPostPreview}/> : null}
      {DM ? <DMOverLay closeEvent ={hideAllOverLays} close ={hideAllOverLays}/> : null}
      {previewPost ? <PostPreview close = {hideAllOverLays}/>: null}
      {navBar}
      {mainScreen}
    </div> 
  );
}

export default App;
