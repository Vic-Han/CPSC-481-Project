import './LoggedOutNavbar.css';

function LoggedOutNavbar(props) {
  const registerEvent = props.registerEvent;
  const loginEvent = props.loginEvent;

  return (
    <div className='navbar_container_logged_out'>
      <div className='navbar_left_container'>
      <button className='navbar_logo'></button>
        <div className='navbar_title'>ESports Zone</div>
      </div>
      <div className='navbar_right_container'>
        <a href='#about' className='navbar_about'>About Us</a>
        <a href='/#' className='navbar_register' onClick={registerEvent}>Sign Up</a>
        <button className='navbar_login_container' onClick={loginEvent}>
          <div className='navbar_login'>Login</div>
        </button>
      </div>
    </div>
  );
}

export default LoggedOutNavbar;