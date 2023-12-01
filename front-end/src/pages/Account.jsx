import Navbar from "../Components/Navbar/Navbar";
import Profile from "../Components/Profile/Profile";

const Store = (props) => {

  return (
    <>
      <Navbar clickHandlers={props.clickHandlers} />
      <Profile/>
    </>
  )
}

export default Store;