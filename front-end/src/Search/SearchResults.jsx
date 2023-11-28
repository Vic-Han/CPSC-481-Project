import './SearchResults.css'
import {React, useState, useTransition} from "react"
import Person1 from '../assets/Person1.png'
import Person2 from '../assets/Person2.png'
const account1 = {
  img: Person1,
  desc: "I love video games. Use Code Ninja on item shop",
  title: "Tyler 'Ninja' Belvins",
  acc_name: "Ninja",
  type: "User"
}

const account2 = {
  img: Person2,
  desc: "Indie game developer and creator of hit games Bloons TD 6, Bloons TD Battles, Bloons TD 5, and SAS Zombie ...",
  title: "Ninja Kiwi",
  acc_name: "NinjaKiwiGames",
  type: "User"
}
const account3 = {
  img: Person1,
  desc: "I love video games. Use Code Ninja on item shop",
  title: "Tyler 'Ninja' Belvins",
  acc_name: "Ninja",
  type: "User"
}

const account4 = {
  img: Person2,
  desc: "Indie game developer and creator of hit games Bloons TD 6, Bloons TD Battles, Bloons TD 5, and SAS Zombie ...",
  title: "Ninja Kiwi",
  acc_name: "NinjaKiwiGames",
  type: "User"
}
const account5 = {
  img: Person2,
  desc: "Indie game developer and creator of hit games Bloons TD 6, Bloons TD Battles, Bloons TD 5, and SAS Zombie ...",
  title: "Ninja Kiwi",
  acc_name: "NinjaKiwiGames",
  type: "User"
}
const game1 = {
  img: Person2,
  desc: "Teenage Mutant Ninja Turtles: Shredders Revenge reunites Leonardo, Michaelangelo, Donatello, and Raphael as ...",
  title: "Teenage Mutant Ninja Turtles: Shredders Revenge",
  acc_name: "Dotemu",
  type: "Game"
}
const game2 = {
  img: Person2,
  desc: "Teenage Mutant Ninja Turtles: Shredders Revenge reunites Leonardo, Michaelangelo, Donatello, and Raphael as ...",
  title: "Teenage Mutant Ninja Turtles: Shredders Revenge",
  acc_name: "Dotemu",
  type: "Game"
}
const game3 = {
  img: Person2,
  desc: "Teenage Mutant Ninja Turtles: Shredders Revenge reunites Leonardo, Michaelangelo, Donatello, and Raphael as ...",
  title: "Teenage Mutant Ninja Turtles: Shredders Revenge",
  acc_name: "Dotemu",
  type: "Game"
}
const game4 = {
  img: Person2,
  desc: "Teenage Mutant Ninja Turtles: Shredders Revenge reunites Leonardo, Michaelangelo, Donatello, and Raphael as ...",
  title: "Teenage Mutant Ninja Turtles: Shredders Revenge",
  acc_name: "Dotemu",
  type: "Game"
}
const game5 = {
  img: Person2,
  desc: "Teenage Mutant Ninja Turtles: Shredders Revenge reunites Leonardo, Michaelangelo, Donatello, and Raphael as ...",
  title: "Teenage Mutant Ninja Turtles: Shredders Revenge",
  acc_name: "Dotemu",
  type: "Game"
}
const post1 = {
  img: Person2,
  desc: "I just finished Sekiro and I loved it. Wreaking havoc as a ninja was so fun. Please give me recommendations for ...",
  title: "Need good ninja game recommendations",
  acc_name: "WiseOldFella",
  type: "Post"
}
const post2 = {
  img: Person2,
  desc: "I just finished Sekiro and I loved it. Wreaking havoc as a ninja was so fun. Please give me recommendations for ...",
  title: "Need good ninja game recommendations",
  acc_name: "WiseOldFella",
  type: "Post"
}
const post3 = {
  img: Person2,
  desc: "I just finished Sekiro and I loved it. Wreaking havoc as a ninja was so fun. Please give me recommendations for ...",
  title: "Need good ninja game recommendations",
  acc_name: "WiseOldFella",
  type: "Post"
}
const post4 = {
  img: Person2,
  desc: "I just finished Sekiro and I loved it. Wreaking havoc as a ninja was so fun. Please give me recommendations for ...",
  title: "Need good ninja game recommendations",
  acc_name: "WiseOldFella",
  type: "Post"
}
const post5 = {
  img: Person2,
  desc: "I just finished Sekiro and I loved it. Wreaking havoc as a ninja was so fun. Please give me recommendations for ...",
  title: "Need good ninja game recommendations",
  acc_name: "WiseOldFella",
  type: "Post"
}
const article1 = {
  img: Person1,
  desc: "3 high speed ninja action titles are now available in one package!",
  title: "Ninja Gaiden: Master Collection",
  acc_name: "KOEI TECMO GAMES CO.",
  type: "Article"
}
const article2 = {
  img: Person1,
  desc: "3 high speed ninja action titles are now available in one package!",
  title: "Ninja Gaiden: Master Collection",
  acc_name: "KOEI TECMO GAMES CO.",
  type: "Article"
}
const article3 = {
  img: Person1,
  desc: "3 high speed ninja action titles are now available in one package!",
  title: "Ninja Gaiden: Master Collection",
  acc_name: "KOEI TECMO GAMES CO.",
  type: "Article"
}
const article4 = {
  img: Person1,
  desc: "3 high speed ninja action titles are now available in one package!",
  title: "Ninja Gaiden: Master Collection",
  acc_name: "KOEI TECMO GAMES CO.",
  type: "Article"
}
const article5 = {
  img: Person1,
  desc: "3 high speed ninja action titles are now available in one package!",
  title: "Ninja Gaiden: Master Collection",
  acc_name: "KOEI TECMO GAMES CO.",
  type: "Article"
}
function SearchResults(props) {
    const allItems = [game1,game4,account4,post4,article4]
    const userItems = [account1, account2, account3, account4,account5]
    const gameItems = [game1,game2,game3,game4,game5]
    const postItems = [post1,post2,post3,post4,post5]
    const articleItems = [article1,article2,article3,article4,article5]

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
            {toggledButton === 0 ? <div className='search-type'> {result.type}</div> : null}
          </div>
        ))}
    </div>
  );
}

export default SearchResults;