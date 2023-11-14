import './SearchResults.css'
import {React, useState, useTransition} from "react"
import Person1 from '../assets/Person1.png'
import Person2 from '../assets/Person2.png'
const ninjaUser = {
  img: Person1,
  desc: "I love video games. Use Code Ninja on item shop",
  title: "Tyler 'Ninja' Belvins",
  acc_name: "Ninja"
}

const ninjaKiwi = {
  img: Person2,
  desc: "Indie game developer and creator of hit games Bloons TD 6, Bloons TD Battles, Bloons TD 5, and SAS Zombie ...",
  title: "Ninja Kiwi",
  acc_name: "NinjaKiwiGames"
}
const ninjaTurtles = {
  img: Person2,
  desc: "Teenage Mutant Ninja Turtles: Shredders Revenge reunites Leonardo, Michaelangelo, Donatello, and Raphael as ...",
  title: "Teenage Mutant Ninja Turtles: Shredders Revenge",
  acc_name: "Dotemu"
}
const ninjaGameRecommendations = {
  img: Person2,
  desc: "I just finished Sekiro and I loved it. Wreaking havoc as a ninja was so fun. Please give me recommendations for ...",
  title: "Need good ninja game recommendations",
  acc_name: "WiseOldFella"
}
const ninjaGaiden = {
  img: Person1,
  desc: "3 high speed ninja action titles are now available in one package!",
  title: "Ninja Gaiden: Master Collection",
  acc_name: "KOEI TECMO GAMES CO."
}
function SearchResults(props) {
    const allItems = [ninjaUser,ninjaTurtles,ninjaKiwi,ninjaGameRecommendations,ninjaGaiden]
    const userItems = [ninjaUser,ninjaKiwi]
    const gameItems = [ninjaTurtles]
    const postItems = [ninjaGameRecommendations]
    const articleItems = [ninjaGaiden]

    const [searchItems, setSearchItems] = useState(allItems)
    const [toggledButton, setToggledButton] = useState(0)
    const searchAll = () =>{
      setSearchItems(allItems)
      setToggledButton(0)
    }
    const searchUser = () =>{
      setSearchItems(userItems)
      setToggledButton(1)
    }
    const searchGame = () =>{ 
      setSearchItems(gameItems)
      setToggledButton(2)
    }
    const searchPost = () =>{
      setSearchItems(postItems)
      setToggledButton(3)
    }
    const searchArticle = () =>{
      setSearchItems(articleItems)
      setToggledButton(4)
    }
  return (
    <div className='search-page-container'>
        <div className ='toggle_buttons-search'>
            <div className = "search-label"> Search by: </div>
            <button onClick={searchAll} className= {`search-button ${toggledButton === 0 ? "toggled" : ""} `}> All</button>
            <button onClick ={searchUser} className= {`search-button ${toggledButton === 1 ? "toggled" : ""} `}>Users</button>
            <button onClick={searchGame} className= {`search-button ${toggledButton === 2 ? "toggled" : ""} `}> Games</button>
            <button onClick={searchPost} className= {`search-button ${toggledButton === 3 ? "toggled" : ""} `}> Posts</button>
            <button onClick={searchArticle} className= {`search-button ${toggledButton === 4 ? "toggled" : ""} `}> Articles</button>
        </div>
        {searchItems.map((result,index) =>(
          <div key = {index} className='search-result'>
            <img className ='search-result-img' src= {result.img}></img>
            <div className='search-result-text'>
              <div className='search-result-title'>{result.title}</div>
              <div className='search-result-author'>{result.acc_name}</div>
              <div className='search-result-description'>{result.desc}</div>
            </div>
          </div>
        ))}
    </div>
  );
}

export default SearchResults;