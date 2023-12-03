import { React, useState } from "react"
import { users } from '../../users';

import './RegisterOverLay.css';


function RegisterOverLay(props) {
  const close = props.close;
  const loginClick = props.loginClick;

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [verifyPassword, setVerifyPassword] = useState("");

  const [firstValid, setFirstValid] = useState(true);
  const [lastValid, setLastValid] = useState(true);
  const [userValid, setUserValid] = useState(true);
  const [emailValid, setEmailValid] = useState(true);
  const [passValid, setPassValid] = useState(true);
  const [verifyValid, setVerifyValid] = useState(true);

  const emailReg = /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+).([a-zA-Z]{2,5})$/;
  const passReg = /[!-@[-`{-~]/;
  const nameReg = /([^a-zA-Z.])/;

  const firstNameChanged = (e) => {
    let name = e.target.value;

    if (nameReg.test(name) || name === "") setFirstValid(false);
    else setFirstValid(true);

    setFirstName(name);
  }

  const lastNameChanged = (e) => {
    let name = e.target.value;

    if (nameReg.test(name) || name === "") setLastValid(false);
    else setLastValid(true);

    setLastName(name);
  }

  const userChanged = (e) => {
    let user = e.target.value;

    if (user === "" || user.includes(" ")) setUserValid(false);
    else setUserValid(true);

    setUsername(user);
  }

  const emailChanged = (e) => {
    let mail = e.target.value;

    if (!emailReg.test(mail) || email === "") setEmailValid(false);
    else setEmailValid(true);

    setEmail(mail.toLowerCase());
  }

  const passwordChanged = (e) => {
    let pass = e.target.value;
    let limit1 = document.getElementById('characterLimit');
    let limit2 = document.getElementById('upperLimit');
    let limit3 = document.getElementById('numberLimit');

    if (pass.length >= 9) {
      limit1.style.color = "#7E82DF";
      setPassValid(true);
    }
    else {
      limit1.style.color = "#B0B0B0";
      setPassValid(false);
    }

    if (pass !== pass.toLowerCase()) {
      limit2.style.color = "#7E82DF";
      setPassValid(true);
    }
    else {
      limit2.style.color = "#B0B0B0";
      setPassValid(false);
    }

    if (passReg.test(pass)) {
      limit3.style.color = "#7E82DF";
      setPassValid(true);
    }
    else {
      limit3.style.color = "#B0B0B0";
      setPassValid(false);
    }

    setPassword(pass);
  }

  const verifyChanged = (e) => {
    let pass = e.target.value;

    if (pass !== password) setVerifyValid(false);
    else setVerifyValid(true);

    setVerifyPassword(pass);
  }

  const handleRegister = (e) => {
    e.preventDefault();

    if ((firstValid && lastValid && userValid && emailValid && passValid && verifyValid)
      && !(firstName === "" || lastName === "" || username === "" || email === "" || password === "" || verifyPassword === "")) {

      let tempObj = {
        id: users[(users.length-1)].id+1,
        firstName: firstName,
        lastName: lastName,
        username: username,
        email: email,
        password: password,
        profileURL: 'ProfileDefault.png',
        loggedIn: false,
        followers: [],
        following: [],
        bio: ""
      };

      if (!users.some(user => user.email === email)) {
        if (!users.some(user => user.username === username)) users.push(tempObj);
        else {
          alert("Username already exists");
          return;
        }
      } else {
        alert("Email already in use");
        return;
      }

      console.log(users);
      loginClick();
    } else alert("Some fields may be empty, or the highlighted fields hold incorrect data");
  }

  return (
    <>
      <div className='invis_background'></div>
      <div className='register_overlay_background'>
        <div className="register_overlay_title">
          <p>Sign Up</p>
          <button onClick={close}></button>
        </div>
        <form className="register_overlay_form">
          <label className='register_label'>First Name</label>
          <input className={firstValid ? 'overlay_input' : 'overlay_input field_error'} type="text" onChange={firstNameChanged} value={firstName}></input>
          <label className='register_label'>Last Name</label>
          <input className={lastValid ? 'overlay_input' : 'overlay_input field_error'} type="text" onChange={lastNameChanged} value={lastName}></input>
          <label className='register_label'>Username</label>
          <input className={userValid ? 'overlay_input' : 'overlay_input field_error'} type="text" onChange={userChanged} value={username}></input>
          <label className='register_label'>Email</label>
          <input className={emailValid ? 'overlay_input' : 'overlay_input field_error'} type="email" onChange={emailChanged} value={email}></input>
          <label className='register_label'>Password</label>
          <input className={passValid ? 'overlay_input' : 'overlay_input field_error'} type="password" required onChange={passwordChanged} value={password}></input>
          <div className='password_requirement' id="characterLimit">At least 9 Characters</div>
          <div className='password_requirement' id="upperLimit">At least 1 Uppercase Character</div>
          <div className='password_requirement' id="numberLimit">At least 1 non-alphabetic charcter</div>
          <label className='register_label'> Verify Password</label>
          <input className={verifyValid ? 'overlay_input' : 'overlay_input field_error'} type="password" onChange={verifyChanged} value={verifyPassword}></input>
          <button onClick={handleRegister} className='register_button txt_btn'>Register</button>
        </form>
        <div className="register_overlay_bottom">
          <p>Already Registered? <a href="#/" onClick={loginClick}>Sign In</a></p>
        </div>
      </div>
    </>
  );
}

export default RegisterOverLay;