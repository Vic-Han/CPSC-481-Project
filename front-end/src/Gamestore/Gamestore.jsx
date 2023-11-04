import {react, useState} from "react"
import './Gamestore.css'
import GameDetails from "./GameDetails"
function Gamestore(props){
    const [mainPage, setMainPage] = useState(true)
    return(
        <div>
        {mainPage ? 
            <GameStoreMain toggleGameDetails ={() => setMainPage(false)}/> : 
            <GameDetails toggleMainPage = {() => setMainPage(true)}/>}
        </div>
    )
}
function GameStoreMain(props){
    const toggleGameDetails = props.toggleGameDetails;
    return(
        <div className="game-store">
            <h1>Game Store Page</h1>
            <button onClick={toggleGameDetails}> Toggle Three Kingdoms</button>
            </div>
    )
}
export default Gamestore