import Homepage from "../Components/Hompage/Homepage.jsx"
import Navbar from "../Components/Navbar/Navbar.jsx";

const HomepageLoggedIn = (props) => {

  return (
    <>
      <Navbar clickHandlers={props.clickHandlers} />
      <Homepage />
    </>
  )
}

export default HomepageLoggedIn;