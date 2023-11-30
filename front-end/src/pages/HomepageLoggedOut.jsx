import { useState } from "react";

import Navbar from "../Components/Navbar/LoggedOutNavbar";
import Homepage from "../Components/Hompage/LoggedOutHompage.jsx";
import RegisterOverLay from "../Components/Login-Register/RegisterOverLay";
import LoginOverlay from "../Components/Login-Register/LoginOverlay";

const HomepageLoggedOut = (props) => {

  const [login, setLogin] = useState(false);
  const [register, setRegister] = useState(false);

  const handleLoginClick = () => {
    setRegister(false);
    setLogin(true);
  }

  const handleRegisterClick = () => {
    setLogin(false);
    setRegister(true);
  }

  const handleClose = () => {
    setLogin(false);
    setRegister(false);
  }

  return (
    <>
      {login ? <LoginOverlay close={handleClose} registerClick={handleRegisterClick} setLoggedUser={props.setLoggedUser} /> : null}
      {register ? <RegisterOverLay close={handleClose} loginClick={handleLoginClick}/> : null}
      <Navbar loginClick={handleLoginClick} registerClick={handleRegisterClick}/>
      <Homepage registerClick={handleRegisterClick}/>
    </>
  )
}

export default HomepageLoggedOut;