import './Navbar.css';

function Navbar(props) {
  const toggleHomePage = props.clickHandlers.toggleHomePage
  const toggleNewPost = props.clickHandlers.toggleNewPost
  const toggleSearchPage = props.clickHandlers.toggleSearchPage
  const toggleProfile = props.clickHandlers.toggleProfile

  const toggleGameStore = props.clickHandlers.toggleGameStore
  const toggleDM = props.clickHandlers.toggleDM

  return (
    <div className='navbar_container'>
      <div className='navbar_left'>
        <button className='navbar_logo' onClick={toggleHomePage}></button>
        <button className='navbar_post_container' onClick={toggleNewPost}>
          <div className='navbar_post'>New Post</div>
        </button>
      </div>
      <div className='navbar_middle'>
        <input type='text' placeholder='Search'></input>
        <button className='navbar_search btn' onClick={toggleSearchPage}></button>
      </div>
      <div className='navbar_right'>
        <button className='navbar_game btn' onClick={toggleGameStore}></button>
        <button className='navbar_dm btn' onClick={toggleDM}></button>
        <button className='navbar_profile btn' onClick={toggleGameStore}></button>
      </div>
    </div>
  );
}

export default Navbar;