import { React, useState, useEffect } from "react";
import { Tags } from './Posts/Tags.js';

import LoggedOutHomepage from './Hompage/LoggedOutHompage';
import Homepage from './Hompage/Homepage';

import LoggedOutNavbar from './Navbar/LoggedOutNavbar';
import Navbar from './Navbar/Navbar';

import LoginOverLay from './Login-Register/LoginOverlay';
import RegisterOverLay from './Login-Register/RegisterOverLay.jsx'

import NewPostOverLay from './Posts/NewPostOverLay';
import DMOverLay from './DM/DMOverLay';
import SearchResults from './Search/SearchResults';
import GameStore from './Gamestore/Gamestore.jsx';
import MyProfile from './Profile/MyProfile.jsx';
import OtherProfile from "./Profile/OtherProfile.jsx";
import ExpandedPost from "./Posts/ExpandedPost.jsx";
import ExpandedArticle from "./Posts/ExpandedArticle.jsx";
import PostPreview from "./Posts/PostPreview.jsx";
import GameDetails from "./Gamestore/GameDetails.jsx";
import SearchGame from "./Gamestore/SearchGame.jsx";
import Homepage2 from "./Hompage/Homepage.jsx";

function App() {

  const [data, setData] = useState({
    Title: "",
    Description: "",
    Tags: [],
    UnusedTags: Tags,
    Files: []
  });

  const navbarClickHandlers = {
    toggleHomePage: showHomePage,
    toggleNewPost: showNewPostOverLay,
    toggleSearchPage: showSearchScreen,
    toggleProfile: showProfile,
    toggleGameStore: showGameStore,
    toggleDM: showDMOverLay,
  }

  

  const [navBar, setNavBar] = useState(<LoggedOutNavbar loginEvent={showLogin} registerEvent={showRegister} />)
  const [mainScreen, setMainScreen] = useState(<LoggedOutHomepage registerEvent2={showRegister} />)
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

  function hideAllPostOverlays() {
    setNewPost(false);
    setPreviewPost(false);
  }

  function resetData() {
    setData({
      Title: "",
      Description: "",
      Tags: [],
      UnusedTags: Tags,
      Files: []
    });
  }

  function showHomePage() {
    hideAllOverLays()
    setNavBar(<Navbar clickHandlers={navbarClickHandlers} />)
    setMainScreen(<Homepage togglePost={showExpandedPost} toggleArticle={showExpandedNewsArticle} toggleOtherProfile={showOtherProfile} />)

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
    setMainScreen(<GameStore toggleGameDetails={showGameDetails} toggleGameSearch={showGameSearch} toggleHomePage2={showHomePage2} />);
  }

  function showHomePage2(){
    setMainScreen(<Homepage2 togglePost={showExpandedPost} toggleArticle={showExpandedNewsArticle} toggleOtherProfile={showOtherProfile} />)
  }
  function showGameSearch(searchQuery) {
    setMainScreen(<SearchGame searchQuery={searchQuery} toggleGameSearch={showGameSearch} />);
  }

  function showGameDetails() {
    setMainScreen(<GameDetails toggleGameStore={showGameStore} />);
  }

  function showSearchScreen() {
    setMainScreen(<SearchResults />)
  }
  function showProfile() {

    setMainScreen(<MyProfile />)
  }

  function showOtherProfile() {
    setMainScreen(<OtherProfile></OtherProfile>)
  }
  function showDMOverLay() {
    hideAllOverLays()
    setDM(true)
  }
  function showExpandedPost() {
    setMainScreen(<ExpandedPost back={showHomePage} />)
  }
  function showExpandedNewsArticle() {
    setMainScreen(<ExpandedArticle back={showHomePage} />)
  }
  function showPostPreview() {
    hideAllOverLays()
    setPreviewPost(true)
  }


  return (
    <div>
      {login ? <LoginOverLay loginEvent={showHomePage} registerEvent={showRegister} cancelEvent={hideAllOverLays} /> : null}
      {register ? <RegisterOverLay loginEvent={showLogin} cancelEvent={hideAllOverLays} registerEvent={showHomePage} /> : null}
      {newPost ? <NewPostOverLay close={hideAllOverLays} data={data} setData={setData} showPostPreview={showPostPreview} /> : null}
      {DM ? <DMOverLay closeEvent={hideAllOverLays} close={hideAllOverLays} /> : null}
      {previewPost ? <PostPreview back={showNewPostOverLay} data={data} resetData={resetData} hidePosts={hideAllPostOverlays} /> : null}
      {navBar}
      {mainScreen}
    </div>
  );
}

export default App;
