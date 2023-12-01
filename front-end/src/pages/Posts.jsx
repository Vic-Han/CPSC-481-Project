import Navbar from "../Components/Navbar/Navbar";
import ExpandedPost from "../Components/Posts/ExpandedPost";

const Store = (props) => {

  return (
    <>
      <Navbar clickHandlers={props.clickHandlers} />
      <ExpandedPost/>
    </>
  )
}

export default Store;