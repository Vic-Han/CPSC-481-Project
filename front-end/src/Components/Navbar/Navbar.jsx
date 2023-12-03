import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { users } from '../../users';
import NotificationOverLay from "../../Components/Notification/NotificationOverLay.jsx";
import '../../bubble.css';

import Tooltip from "../Tooltip";

import './Navbar.css';

function Navbar(props) {
  const [bubble, setBubble] = useState(3);
  const [notifcation, setNotification] = useState(false);

  function decrementNotifcation() {
    const new_bub = bubble - 1;
    setBubble(new_bub)
  }
  const navigate = useNavigate();

  let currentUser = users.filter(function (user) {
    return user.username == JSON.parse(localStorage.getItem("loggedUser"));
  })[0];

  if (!currentUser) currentUser={"username": "", "profileURL": "ProfileDefault.png"};

  useEffect(() => {
    if (currentUser.username === "") navigate('/');
  }, [])

  const userImageStyle = {
    backgroundImage: `url(${require(`../../assets/${currentUser.profileURL}`)})`,
    borderRadius: "50%",
    border: "4px solid #7E82DF"
  }

  function searchClicked() {
    navigate(`/search?query=${document.getElementById("nav-bar-input").value}`);
  }

  function keyboardHandler(e) {
    const input = document.getElementById("nav-bar-input")
    if (input.contains(e.target) && e.key === 'Enter') {
      searchClicked();
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', keyboardHandler)
    return () => { document.removeEventListener('keydown', keyboardHandler) }
  }, [])

  return (
    <>
      {notifcation ? <NotificationOverLay back={() => setNotification(false)} updateBubble={decrementNotifcation} /> : null}
      {bubble > 0 ? <div id='notification_bubble'>{bubble}</div> : null}
      <div className='navbar_container'>
        <div className='navbar_left'>
          <Link to={"/home"}>
            <Tooltip text="Home">
              <button className='navbar_logo'></button>
            </Tooltip>
          </Link>
          <button className='navbar_post_container' onClick={props.clickHandlers.openPost}>
            <div className='navbar_post'>New Post</div>
          </button>
        </div>
        <div className='navbar_middle'>
          <input id="nav-bar-input" type='text' placeholder='Search'></input>
          <button className='navbar_search btn' onClick={searchClicked}></button>
        </div>
        <div className='navbar_right'>
          <Tooltip text="Notifications">
            <button className='navbar_notif btn' onClick={() => setNotification(true)}></button>
          </Tooltip>
          <Link to={"/store"}>
            <Tooltip text="Game Store">
              <button className='navbar_game btn'></button>
            </Tooltip>
          </Link>
          <Tooltip text="Direct Message">
            <button className='navbar_dm btn' onClick={props.clickHandlers.openDM}></button>
          </Tooltip>
          <Link to={"/account"}>
            <Tooltip text="Your Account">
              <button className='navbar_profile btn' style={(currentUser.profileURL === "ProfileDefault.png") ? null : userImageStyle}></button>
            </Tooltip>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;