import './LoggedOutNavbar.css';

function LoggedOutNavbar(props) {
  const setLogin = props.loginClick;
  const setRegister = props.registerClick;

  return (
    <>
      <div className='navbar_container_logged_out'>
        <div className='navbar_left_container'>
          <button className='navbar_logo'></button>
          <div className='navbar_title'>ESports Zone</div>
        </div>
        <div className='navbar_right_container'>
          <a href='#about' className='navbar_about'>About Us</a>
          <a href={null} className='navbar_register' onClick={setRegister}>Sign Up</a>
          <button className='navbar_login_container' onClick={setLogin}>
            <div className='navbar_login'>Login</div>
          </button>
        </div>
      </div>
    </>
  );
}

export default LoggedOutNavbar;