import {react, useState} from "react"
import './GameDetails.css'
function GameDetails(props){
    const toggleMainPage = props.toggleMainPage
    return(
        <div>
            <h1>Game Details (three kingdoms)</h1>
            <button onClick={toggleMainPage}> go back to gamestore page</button>
        </div>
    )
}
export default GameDetails