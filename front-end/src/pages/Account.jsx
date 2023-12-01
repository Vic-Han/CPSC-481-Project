import Navbar from "../Components/Navbar/Navbar";
import MyProfile from "../Components/Profile/MyProfile";

const Store = (props) => {

  return (
    <>
      <Navbar clickHandlers={props.clickHandlers} />
      <MyProfile/>
    </>
  )
}

export default Store;