import React, { useState, useEffect, useCallback } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { games } from "../../games";

import './SearchGame.css';
import PC from '../../assets/PC.png';
import PS from '../../assets/PS.png';
import XBOX from '../../assets/Xbox.png';
import SWITCH from '../../assets/Switch.png';

function SearchGame() {

  const gameDup = [...games];

  function getAllGenres() {
    const temp = [];
    for (let i = 0; i < games.length; i++) {
      temp.push(...games[i].genres);
    }
    return [...new Set(temp)];
  }

  const sortByReleaseDate = (gameA, gameB) => {
    const releaseDateA = new Date(gameA.release);
    const releaseDateB = new Date(gameB.release);
    return releaseDateB - releaseDateA;
  };

  const sortByPrice = (gameA, gameB) => {
    const priceA = gameA.salePrice;
    const priceB = gameB.salePrice;
    return priceA - priceB;
  };

  const sortByTitle = (gameA, gameB) => {
    return gameA.title.localeCompare(gameB.title);
  };

  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');
  const [sortType, setSortType] = useState(-1);
  const [priceType, setPriceType] = useState(-1);
  const [genreType, setGenreType] = useState(-1);
  const [filterPrice, setFilterPrice] = useState([0, 800]);
  const [filterGenre, setFilterGenre] = useState(null);
  const [gamesData, setGamesData] = useState(gameDup);
  const [resultCount, setResultCount] = useState(gamesData.filter(game => (game.title.toLowerCase().includes(query.toLowerCase())) &&
    (game.salePrice >= filterPrice[0] && game.salePrice <= filterPrice[1]) &&
    ((filterGenre === null || game.genres.includes(filterGenre)))).length);
  const allGenres = getAllGenres().sort();

  const [priceDropdownVisible, setPriceDropdownVisible] = useState(false);
  const [genreDropdownVisible, setGenreDropdownVisible] = useState(false);

  const priceDropdown = () => setPriceDropdownVisible(!priceDropdownVisible);
  const toggleDropdown5 = () => setGenreDropdownVisible(!genreDropdownVisible);

  useEffect(() => {
    setResultCount(gamesData.filter(game => (game.title.toLowerCase().includes(query.toLowerCase())) &&
      (game.salePrice >= filterPrice[0] && game.salePrice <= filterPrice[1]) &&
      ((filterGenre === null || game.genres.includes(filterGenre)))).length);
  }, [query, filterPrice, filterGenre]);

  useEffect(() => {
    let temp = undefined;
    if (sortType === 0) temp = gameDup.sort(sortByTitle);
    else if (sortType === 1) temp = gameDup.sort(sortByTitle).reverse();
    else if (sortType === 2) temp = gameDup.sort(sortByPrice);
    else if (sortType === 3) temp = gameDup.sort(sortByPrice).reverse();
    else if (sortType === 4) temp = gameDup.sort(sortByReleaseDate);
    else if (sortType === 5) temp = gameDup.sort(sortByReleaseDate).reverse();
    else if (sortType === -1) temp = [...games];
    setGamesData(temp);
  }, [sortType])


  useEffect(() => {
    if (priceType === 0) setFilterPrice([0, 0]);
    else if (priceType === 1) setFilterPrice([0, 30]);
    else if (priceType === 2) setFilterPrice([30, 70]);
    else if (priceType === 3) setFilterPrice([70, 800]);
    else if (priceType === -1) setFilterPrice([0, 800]);
  }, [priceType])

  useEffect(() => {
    if (genreType === -1) setFilterGenre(null);
    else setFilterGenre(allGenres[genreType]);
  }, [genreType])

  function handleSearch() {
    setSearchParams({ query: document.getElementById("filter_search").value });
  }

  function keyboardHandler(e) {
    const input = document.getElementById("filter_search")
    if (input.contains(e.target) && e.key === 'Enter') {
      handleSearch();
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', keyboardHandler)
    return () => { document.removeEventListener('keydown', keyboardHandler) }
  }, [])

  return (
    <div className="search_game_container">
      <div className="search_game_left">
        {gamesData.filter(game => (game.title.toLowerCase().includes(query.toLowerCase())) &&
          (game.salePrice >= filterPrice[0] && game.salePrice <= filterPrice[1]) &&
          ((filterGenre === null || game.genres.includes(filterGenre)))).map((game, i) => (
            <div key={i} className="sale_item">
              <Link to={`/store/${game.id}`}><img src={game.images[0]} alt={game.title} className="sale_image" /></Link>
              <Link to={`/store/${game.id}`}><h3 className="sale_game_title">{game.title}</h3></Link>
              <div className="sale_info_section">
                <div className="sale_price_section">
                  {(game.price === 0) ? <p className="game_price_free">Free</p> :
                    <>
                      <p className="sale_original_price">${game.price}</p>
                      <p className="sale_sale_price">${game.salePrice}</p>
                    </>}
                </div>
                {(game.price === 0) ? null : <div className="sale_discount">{(100 - ((game.salePrice / game.price).toFixed(2)) * 100)}%</div>}
              </div>
              <div className='sale_game_availability'>
                {game.availability.map((type, i) => {
                  if (type === "PC") return <img key={i} src={PC}></img>;
                  else if (type === "PS") return <img key={i} src={PS}></img>;
                  else if (type === "Xbox") return <img key={i} src={XBOX}></img>;
                  else if (type === "Switch") return <img key={i} src={SWITCH}></img>;
                  return null;
                })}
              </div>
            </div>
          ))}
      </div>

      <div className="search_game_right">
        <input id="filter_search" type="text" placeholder={"Search Games..."} value={query} onChange={(e) => setSearchParams({ query: e.target.value })} />
        <button className='filter_search_button img_btn' onClick={handleSearch}></button>
        <div className="search_game_info">
          <h1>Search Result: {resultCount}</h1>
          <button className="filter_clear_button txt_btn" onClick={() => { setSortType(-1); setPriceType(-1); setGenreType(-1) }}>Clear Sort & Filters</button>
        </div>
        <div className="sort_title">Sort By:</div>
        <button onClick={() => { setSortType(0) }} className={`sorting_button ${(sortType === 0) ? 'sort_enabled' : ''}`}>Alphabetically (A-Z)</button>
        <button onClick={() => { setSortType(1) }} className={`sorting_button ${(sortType === 1) ? 'sort_enabled' : ''}`}>Alphabetically (Z-A)</button>
        <button onClick={() => { setSortType(2) }} className={`sorting_button ${(sortType === 2) ? 'sort_enabled' : ''}`}>Price (Lowest-Highest)</button>
        <button onClick={() => { setSortType(3) }} className={`sorting_button ${(sortType === 3) ? 'sort_enabled' : ''}`}>Price (Highest-Lowest)</button>
        <button onClick={() => { setSortType(4) }} className={`sorting_button ${(sortType === 4) ? 'sort_enabled' : ''}`}>Release Date (Newest First)</button>
        <button onClick={() => { setSortType(5) }} className={`sorting_button ${(sortType === 5) ? 'sort_enabled' : ''}`}>Release Date (Oldest First)</button>
        <div className="filter_title">Filters</div>

        <button className="filter_option" onClick={priceDropdown}>{priceDropdownVisible ? 'Close Price' : 'Price'}</button>
        {priceDropdownVisible && (
          <div className="filter_dropdown">
            <button className={`filter_button ${(priceType === 0) ? 'sort_enabled' : ''}`} onClick={() => { setPriceType(0) }}>Free</button>
            <button className={`filter_button ${(priceType === 1) ? 'sort_enabled' : ''}`} onClick={() => { setPriceType(1) }}>Under $30</button>
            <button className={`filter_button ${(priceType === 2) ? 'sort_enabled' : ''}`} onClick={() => { setPriceType(2) }}>$30 - $70</button>
            <button className={`filter_button ${(priceType === 3) ? 'sort_enabled' : ''}`} onClick={() => { setPriceType(3) }}>Above $70</button>
          </div>
        )}

        <button className="filter_option" onClick={toggleDropdown5}>{genreDropdownVisible ? 'Close Genre' : 'Genre'}</button>
        {genreDropdownVisible && (
          <div className="filter_dropdown">
            {allGenres.map((genre, i) => (
              <>
                <button key={i} className={`filter_button ${(genreType === i) ? 'sort_enabled' : ''}`} id={`genre_button${i}`} onClick={() => setGenreType(i)}>{genre}</button>
              </>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}


export default SearchGame;