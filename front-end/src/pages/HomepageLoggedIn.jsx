import Navbar from "../Components/Navbar/Navbar";
import Homepage from "../Components/Hompage/Homepage.jsx"

const HomepageLoggedIn = (props) => {

  return (
    <>
      <Navbar />
      <Homepage loggedUser={props.loggedUser}/>
    </>
  )
}

export default HomepageLoggedIn;