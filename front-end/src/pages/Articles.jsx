import Navbar from "../Components/Navbar/Navbar";
import ExpandedArticle from "../Components/Posts/ExpandedArticle";

const Store = (props) => {

  return (
    <>
      <Navbar clickHandlers={props.clickHandlers} />
      <ExpandedArticle/>
    </>
  )
}

export default Store;