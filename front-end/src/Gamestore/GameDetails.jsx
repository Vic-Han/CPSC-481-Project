import React, { useState, useEffect } from 'react';
import './GameDetails.css'
function GameDetails(props){
    const toggleGameStore = props.toggleGameStore;
    return(
        <div>
            <h1>Game Details (three kingdoms)</h1>
            <button onClick={toggleGameStore}> go back to gamestore page</button>
        </div>
    )
}
export default GameDetails;