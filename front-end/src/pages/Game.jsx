import Navbar from "../Components/Navbar/Navbar";
import GameDetails from "../Components/Gamestore/GameDetails";

const Store = (props) => {

  return (
    <>
      <Navbar clickHandlers={props.clickHandlers} />
      <GameDetails/>
    </>
  )
}

export default Store;