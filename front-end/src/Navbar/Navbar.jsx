import { useEffect } from 'react';
import './Navbar.css';

function Navbar(props) {
  const toggleHomePage = props.clickHandlers.toggleHomePage
  const toggleNewPost = props.clickHandlers.toggleNewPost
  const toggleSearchPage = props.clickHandlers.toggleSearchPage
  const toggleProfile = props.clickHandlers.toggleProfile
  const toggleNotification = props.clickHandlers.showNotification;
  const toggleGameStore = props.clickHandlers.toggleGameStore
  const toggleDM = props.clickHandlers.toggleDM
  function keyboardHandler(e){
    const input = document.getElementById("nav-bar-input")
    if(input.contains(e.target) && e.key === 'Enter'){
      toggleSearchPage()
    }
  }
  useEffect(()=>{
    document.addEventListener('keydown', keyboardHandler)
    return () => {document.removeEventListener('keydown', keyboardHandler)}
  },[])
  return (
    <div className='navbar_container'>
      <div className='navbar_left'>
        <button className='navbar_logo' onClick={toggleHomePage}></button>
        <button className='navbar_post_container' onClick={toggleNewPost}>
          <div className='navbar_post'>New Post</div>
        </button>
      </div>
      <div className='navbar_middle'>
        <input id ="nav-bar-input" type='text' placeholder='Search'></input>
        <button className='navbar_search btn' onClick={toggleSearchPage}></button>
      </div>
      <div className='navbar_right'>
        <button className='navbar_notif btn' onClick={toggleNotification}></button>
        <button className='navbar_game btn' onClick={toggleGameStore}></button>
        <button className='navbar_dm btn' onClick={toggleDM}></button>
        <button className='navbar_profile btn' onClick={toggleProfile}></button>
      </div>
    </div>
  );
}

export default Navbar;