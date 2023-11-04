import './SearchResults.css'
import {React, useState} from "react"
function SearchResults(props) {
    const allItems = []
    const [searchItems, setSearchItems] = useState(allItems)
   
    const searchAll = () =>{

    }
    const searchUser = () =>{

    }
    const searchGame = () =>{

    }
    const searchPost = () =>{

    }
    const searchArticle = () =>{

    }
  return (
    <div>
        <div className='toggle_buttons'>
            <button onClick={searchAll}> All</button>
            <button onClick ={searchUser}>Users</button>
            <button onClick={searchGame}> Games</button>
            <button onClick={searchPost}> Posts</button>
            <button onClick={searchArticle}> Articles</button>
        </div>
    </div>
  );
}

export default SearchResults;