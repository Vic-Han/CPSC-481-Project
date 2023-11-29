import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { users } from '../../users';

import './LoginOverLay.css';

function LoginOverLay(props) {
  const close = props.close;
  const registerClick = props.registerClick;

  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userValid, setUserValid] = useState(true);
  const [passwordValid, setPasswordValid] = useState(true);

  const handleLogin = (e) => {
    e.preventDefault();
    setPasswordValid(true);
    setUserValid(true);

    if (users.some(user=>user.username === username && user.password === password)) {
      setPasswordValid(true);
      setUserValid(true);
      navigate("/home");
    } else if (username === "" || password === "") {

      if (username === "" && password !== "") setUserValid(false);
      if (password === "" && username !== "") setPasswordValid(false);
      if (username === "" && password === "") {
        setPasswordValid(false);
        setUserValid(false);
      }
      
      alert("Please fill the highlighted fields");
    } else alert("Username or Password or both are incorrect");
  }

  return (
    <>
      <div className='invis_background'></div>
      <div className='login_overlay_background'>
        <div className="login_overlay_title">
          <p>Log In</p>
          <button onClick={close}></button>
        </div>
        <form className="login_overlay_form">
          <label className='login_label'>Username</label>
          <input
            type="text"
            className={userValid ? 'overlay_input' : 'overlay_input field_error'}
            onChange={(e) => {setUsername(e.target.value)}}
            value={username}
          />
          <div className='login_forgot_label'>Forgot Username?</div>

          <label className='login_label'>Password</label>
          <input
            type="password"
            className={passwordValid ? 'overlay_input' : 'overlay_input field_error'}
            onChange={(e) => {setPassword(e.target.value)}}
            value={password}
          />
          <div className='login_forgot_label'>Forgot Password?</div>

          <button onClick={handleLogin} className='login_button txt_btn'>Login</button>
        </form>
        <div className="login_overlay_bottom">
          <p>Not Registered? <a href={null} onClick={registerClick}>Create an Account</a></p>
        </div>
      </div>
    </>
  );
}

export default LoginOverLay;