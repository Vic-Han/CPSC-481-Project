import { Routes, Route } from "react-router-dom";
import { React, useState, useEffect } from "react";
import { Tags } from './Components/Posts/Tags.js';

// import LoginOverLay from './Login-Register/LoginOverlay';
// import RegisterOverLay from './Login-Register/RegisterOverLay.jsx'

// import NewPostOverLay from './Posts/NewPostOverLay';
// import DMOverLay from './DM/DMOverLay';
// import SearchResults from './Search/SearchResults';
// import GameStore from './Gamestore/Gamestore.jsx';
// import MyProfile from './Profile/MyProfile.jsx';
// import OtherProfile from "./Profile/OtherProfile.jsx";
// import ExpandedPost from "./Posts/ExpandedPost.jsx";
// import ExpandedArticle from "./Posts/ExpandedArticle.jsx";
// import PostPreview from "./Posts/PostPreview.jsx";
// import GameDetails from "./Gamestore/GameDetails.jsx";
// import SearchGame from "./Gamestore/SearchGame.jsx";
// import Homepage2 from "./Hompage/Homepage.jsx";

//Components Imports
import NewPostOverLay from "./Components/Posts/NewPostOverLay.jsx";
import PostPreview from "./Components/Posts/PostPreview.jsx";
import DMOverLay from "./Components/DM/DMOverLay.jsx";



//Pages Imports
import HomepageLoggedOut from "./pages/HomepageLoggedOut.jsx";
import HomepageLoggedIn from "./pages/HomepageLoggedIn.jsx";
import Store from "./pages/Store.jsx";
import Posts from "./pages/Posts.jsx";
import Articles from "./pages/Articles.jsx";
import Game from "./pages/Game.jsx";
import Account from "./pages/Account.jsx";
import Search from "./pages/Search.jsx";
import GameSearch from "./pages/GameSearch.jsx";

function App() {

  const [data, setData] = useState({
    Title: "",
    Description: "",
    Tags: [],
    UnusedTags: Tags,
    Files: []
  });

  // const navbarClickHandlers = {
  //   toggleHomePage: showHomePage,
  //   toggleNewPost: showNewPostOverLay,
  //   toggleSearchPage: showSearchScreen,
  //   toggleProfile: showProfile,
  //   toggleGameStore: showGameStore,
  //   toggleDM: showDMOverLay,
  // }



  // const [navBar, setNavBar] = useState(<LoggedOutNavbar loginEvent={showLogin} registerEvent={showRegister} />)
  // const [mainScreen, setMainScreen] = useState(<LoggedOutHomepage registerEvent2={showRegister} />)
  // const [login, setLogin] = useState(false)
  // const [register, setRegister] = useState(false)
  // const [newPost, setNewPost] = useState(false)
  // const [DM, setDM] = useState(false)
  // const [previewPost, setPreviewPost] = useState(false)
  // const [confirmDraft, setConfirmDraft] = useState(false)


  // function hideAllOverLays() {
  //   setLogin(false)
  //   setRegister(false)
  //   setNewPost(false)
  //   setDM(false)
  //   setPreviewPost(false)
  //   setConfirmDraft(false)
  // }

  // function hideAllPostOverlays() {
  //   setNewPost(false);
  //   setPreviewPost(false);
  // }

  // function resetData() {
  //   setData({
  //     Title: "",
  //     Description: "",
  //     Tags: [],
  //     UnusedTags: Tags,
  //     Files: []
  //   });
  // }

  // function showHomePage() {
  //   hideAllOverLays()
  //   setNavBar(<Navbar clickHandlers={navbarClickHandlers} />)
  //   setMainScreen(<Homepage togglePost={showExpandedPost} toggleArticle={showExpandedNewsArticle} toggleOtherProfile={showOtherProfile} />)

  // }


  // function showLogin() {
  //   hideAllOverLays()
  //   setLogin(true)
  // }

  // function showRegister() {
  //   hideAllOverLays()
  //   setRegister(true)
  // }

  // function showNewPostOverLay() {
  //   hideAllOverLays()
  //   setNewPost(true)
  // }

  // function showGameStore() {
  //   setMainScreen(<GameStore toggleGameDetails={showGameDetails} toggleGameSearch={showGameSearch} toggleHomePage2={showHomePage2} />);
  // }

  // function showHomePage2(){
  //   setMainScreen(<Homepage2 togglePost={showExpandedPost} toggleArticle={showExpandedNewsArticle} toggleOtherProfile={showOtherProfile} />)
  // }
  // function showGameSearch(searchQuery) {
  //   setMainScreen(<SearchGame searchQuery={searchQuery} toggleGameSearch={showGameSearch} />);
  // }

  // function showGameDetails() {
  //   setMainScreen(<GameDetails toggleGameStore={showGameStore} />);
  // }

  // function showSearchScreen() {
  //   setMainScreen(<SearchResults />)
  // }
  // function showProfile() {

  //   setMainScreen(<MyProfile />)
  // }

  // function showOtherProfile() {
  //   setMainScreen(<OtherProfile></OtherProfile>)
  // }
  // function showDMOverLay() {
  //   hideAllOverLays()
  //   setDM(true)
  // }
  // function showExpandedPost() {
  //   setMainScreen(<ExpandedPost back={showHomePage} />)
  // }
  // function showExpandedNewsArticle() {
  //   setMainScreen(<ExpandedArticle back={showHomePage} />)
  // }
  // function showPostPreview() {
  //   hideAllOverLays()
  //   setPreviewPost(true)
  // }

  //----------------------------Post Close/Open Functions----------------------------
  const [newPost, setNewPost] = useState(false);
  const [previewPost, setPreviewPost] = useState(false);

  const handlePostOpen = () => {
    setPreviewPost(false);
    setNewPost(true);
  }
  const handlePostClose = () => {
    setPreviewPost(false);
    setNewPost(false);
  }
  const handlePreviewOpen = () => {
    setPreviewPost(true);
    setNewPost(false);
  }

  const resetData = () => {
    setData({
      Title: "",
      Description: "",
      Tags: [],
      UnusedTags: Tags,
      Files: []
    });
  }

  //-------------------------DM Close/Open Functions-------------------------
  const [DMopen, setDMOpen] = useState(false);

  const handleDMOpen = () => {
    setDMOpen(true);
  }

  const handleDMClose = () => {
    setDMOpen(false);
  }

  //----------------------------Navbar Functions----------------------------
  const navbarClickHandlers = {
    openPost: handlePostOpen,
    openDM: handleDMOpen
  }

  //-----------------------------Main Elements-----------------------------

  return (
    <div>
      {/* {login ? <LoginOverLay loginEvent={showHomePage} registerEvent={showRegister} cancelEvent={hideAllOverLays} /> : null}
      {register ? <RegisterOverLay loginEvent={showLogin} cancelEvent={hideAllOverLays} registerEvent={showHomePage} /> : null}
      {newPost ? <NewPostOverLay close={hideAllOverLays} data={data} setData={setData} showPostPreview={showPostPreview} /> : null}
      {DM ? <DMOverLay closeEvent={hideAllOverLays} close={hideAllOverLays} /> : null}
      {previewPost ? <PostPreview back={showNewPostOverLay} data={data} resetData={resetData} hidePosts={hideAllPostOverlays} /> : null}
      {navBar}
      {mainScreen} */}
      {newPost ? <NewPostOverLay close={handlePostClose} data={data} setData={setData} showPostPreview={handlePreviewOpen} /> : null}
      {previewPost ? <PostPreview back={handlePostOpen} data={data} resetData={resetData} hidePosts={handlePostClose} /> : null}
      {DMopen ? <DMOverLay close={handleDMClose} /> : null}
      <Routes>
        <Route path="/" element={<HomepageLoggedOut />} />
        <Route path="/home" element={<HomepageLoggedIn clickHandlers={navbarClickHandlers} />} />
        <Route path="/post/:id" element={<Posts clickHandlers={navbarClickHandlers} />} />
        <Route path="/article/:id" element={<Articles clickHandlers={navbarClickHandlers} />} />
        <Route path="/store" element={<Store clickHandlers={navbarClickHandlers} />} />
        <Route path="/store/:id" element={<Game clickHandlers={navbarClickHandlers} />} />
        <Route path="/account" element={<Account clickHandlers={navbarClickHandlers} />} />
        <Route path="/account/:id" element={<Account clickHandlers={navbarClickHandlers} />} />
        <Route path="/search" element={<Search clickHandlers={navbarClickHandlers} />} />
        <Route path="/game" element={<GameSearch clickHandlers={navbarClickHandlers} />} />
      </Routes>
    </div>
  );
}

export default App;
