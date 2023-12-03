import { Routes, Route, Navigate } from "react-router-dom";
import { React, useState, useEffect } from "react";
import { Tags } from './Components/Posts/Tags.js';

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
  const [bubble, setBubble] = useState(3);

  function decrementNotifcation() {
    const new_bub = bubble - 1;
    setBubble(new_bub)
  }

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
    openDM: handleDMOpen,
    bubble: bubble,
    setBubble: setBubble
  }

  //-----------------------------Main Elements-----------------------------

  return (
    <div>
      {/* {login ? <LoginOverLay loginEvent={showHomePage} registerEvent={showRegister} cancelEvent={hideAllOverLays} /> : null}
      {register ? <RegisterOverLay loginEvent={showLogin} cancelEvent={hideAllOverLays} registerEvent={showHomePage} /> : null}
      {newPost ? <NewPostOverLay close={hideAllOverLays} data={data} setData={setData} showPostPreview={showPostPreview} /> : null}
      {DM ? <DMOverLay closeEvent={hideAllOverLays} close={hideAllOverLays} /> : null}
      {previewPost ? <PostPreview back={showNewPostOverLay} data={data} resetData={resetData} hidePosts={hideAllPostOverlays} /> : null}
      {notifcation ? <NotificationOverLay back ={() => setNotification(false)} updateBubble = {decrementNotifcation}/> : null}
      {bubble > 0 ? <div id = "notification_bubble">{bubble}</div> : null}
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
        <Route path="*" element={<Navigate to={'/home'} replace/>} />
      </Routes>
    </div>
  );
}

export default App;
