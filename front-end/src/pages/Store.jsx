import Navbar from "../Components/Navbar/Navbar";
import Gamestore from "../Components/Gamestore/Gamestore.jsx";

const Store = (props) => {

  return (
    <>
      <Navbar clickHandlers={props.clickHandlers} />
      <Gamestore/>
    </>
  )
}

export default Store;