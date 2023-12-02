import Navbar from "../Components/Navbar/Navbar";
import SearchGame from "../Components/Gamestore/SearchGame";

const GameSearch = (props) => {

  return (
    <>
      <Navbar clickHandlers={props.clickHandlers} />
      <SearchGame />
    </>
  )
}

export default GameSearch;