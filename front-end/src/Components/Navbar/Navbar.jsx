import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { users } from '../../users';

import './Navbar.css';

function Navbar(props) {
  // const toggleHomePage = props.clickHandlers.toggleHomePage
  // const toggleNewPost = props.clickHandlers.toggleNewPost
  // const toggleSearchPage = props.clickHandlers.toggleSearchPage
  // const toggleProfile = props.clickHandlers.toggleProfile

  // const toggleGameStore = props.clickHandlers.toggleGameStore
  // const toggleDM = props.clickHandlers.toggleDM

  const toggleHomePage = null
  const toggleNewPost = null
  const toggleSearchPage = null
  const toggleProfile = null

  const toggleGameStore = null
  const toggleDM = null

  const currentUser = users.filter(function (user) {
    return user.username == JSON.parse(localStorage.getItem("loggedUser"));
  });

  const userImageStyle = {
    backgroundImage: `url(${require(`../../assets/${currentUser[0].profileURL}`)})`,
    borderRadius: "50%",
    border: "4px solid #7E82DF"
  }

  function keyboardHandler(e) {
    const input = document.getElementById("nav-bar-input")
    if (input.contains(e.target) && e.key === 'Enter') {
      toggleSearchPage()
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', keyboardHandler)
    return () => { document.removeEventListener('keydown', keyboardHandler) }
  }, [])

  return (
    <div className='navbar_container'>
      <div className='navbar_left'>
        <Link to={"/home"}>
          <button className='navbar_logo'></button>
        </Link>
        <button className='navbar_post_container' onClick={props.clickHandlers.openPost}>
          <div className='navbar_post'>New Post</div>
        </button>
      </div>
      <div className='navbar_middle'>
        <input id="nav-bar-input" type='text' placeholder='Search'></input>
        <button className='navbar_search btn' onClick={toggleSearchPage}></button>
      </div>
      <div className='navbar_right'>
        <Link to={"/store"}>
          <button className='navbar_game btn'></button>
        </Link>
        <button className='navbar_dm btn' onClick={props.clickHandlers.openDM}></button>
        <Link to={"/account"}>
          <button className='navbar_profile btn' style={(currentUser[0].profileURL === "ProfileDefault.png") ? null : userImageStyle}></button>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;