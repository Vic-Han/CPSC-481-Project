import React, { useState, useEffect, useCallback } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { games } from "../../games";

import './SearchGame.css';
import PC from '../../assets/PC.png';
import PS from '../../assets/PS.png';
import XBOX from '../../assets/Xbox.png';
import SWITCH from '../../assets/Switch.png';

import Game2000 from '../../TotalWar/1.bmp';
import Game2002 from '../../TotalWar/2.bmp';
import Game2004 from '../../TotalWar/3.bmp';
import Game2006 from '../../TotalWar/4.bmp';

import Game2009 from '../../TotalWar/5.bmp';
import Game2010 from '../../TotalWar/6.bmp';
import Game2011 from '../../TotalWar/7.bmp';
import Game2013 from '../../TotalWar/8.bmp';

import Game2015 from '../../TotalWar/9.bmp';
import Game2016 from '../../TotalWar/10.bmp';
import Game2017 from '../../TotalWar/11.bmp';
import Game2018 from '../../TotalWar/12.bmp';

import Game2019 from '../../TotalWar/13.bmp';
import Game2020 from '../../TotalWar/14.bmp';
import Game2022 from '../../TotalWar/15.bmp';
import Game2023 from '../../TotalWar/16.bmp';

function SearchGame(props) {
  //Data for games by on the search "Total War"
  const { searchQuery, toggleGameStore } = props;
  const { toggleGameDetails, toggleGameSearch, toggleHomePage2 } = props;
  const [inputValue, setInputValue] = useState(searchQuery || '');
  useEffect(() => {
    setInputValue(searchQuery);
  }, [searchQuery]);

  const TotalWarGames = [
    {
      image: Game2000,
      name: 'Shogun: Total War',
      originalPrice: '$11.99 CAD',
      salePrice: '$2.99 CAD',
      IntPrice: 2.99,
      discount: '-75%',
      availability: PC,
      releaseDate: 2000,
      tag: ["Strategy", "Historical"]
    },
    {
      image: Game2002,
      name: 'Medieval: Total War',
      originalPrice: '$11.99 CAD',
      salePrice: '$2.99 CAD',
      IntPrice: 2.99,
      discount: '-75%',
      availability: PC,
      releaseDate: 2002,
      tag: ["Strategy", "Historical"]
    },
    {
      image: Game2004,
      name: 'Rome: Total War',
      originalPrice: '$39.99 CAD',
      salePrice: '$13.59 CAD',
      IntPrice: 13.59,
      discount: '-66%',
      availability: PC,
      releaseDate: 2004,
      tag: ["Strategy", "Historical", "RPG", "Simulation"]
    },
    {
      image: Game2006,
      name: 'Medieval: Total War 2',
      originalPrice: '$29.99 CAD',
      salePrice: '$7.49 CAD',
      IntPrice: 7.49,
      discount: '-75%',
      availability: PC,
      releaseDate: 2006,
      tag: ["Strategy", "Historical", "Simulation"]
    },
    {
      image: Game2009,
      name: 'Empire: Total War',
      originalPrice: '$29.99 CAD',
      salePrice: '$7.49 CAD',
      IntPrice: 7.49,
      discount: '-75%',
      availability: PC,
      releaseDate: 2009,
      tag: ["Strategy", "Historical", "Simulation"]

    },
    {
      image: Game2010,
      name: 'Napoleon: Total War',
      originalPrice: '$29.99 CAD',
      salePrice: '$5.99 CAD',
      IntPrice: 5.99,
      discount: '-80%',
      availability: PC,
      releaseDate: 2010,
      tag: ["Strategy", "Historical", "Simulation"]
    },
    {
      image: Game2011,
      name: 'Total War: Shogun 2',
      originalPrice: '$35.99 CAD',
      salePrice: '$8.99 CAD',
      IntPrice: 8.99,
      discount: '75%',
      availability: PC,
      releaseDate: 2011,
      tag: ["Strategy", "Historical", "Simulation"]

    },
    {
      image: Game2013,
      name: 'Total War: Rome 2',
      originalPrice: '$71.99 CAD',
      salePrice: '$17.99 CAD',
      IntPrice: 17.99,
      discount: '75%',
      availability: PC,
      releaseDate: 2013,
      tag: ["Strategy", "Historical", "Simulation"]
    },
    {
      image: Game2015,
      name: 'Total War: Attila',
      originalPrice: '$53.99 CAD',
      salePrice: '$13.49 CAD',
      IntPrice: 13.49,
      discount: '75%',
      availability: PC,
      releaseDate: 2015,
      tag: ["Strategy", "Historical", "Survival"]
    },
    {
      image: Game2016,
      name: 'Total War: Warhammer',
      originalPrice: '$71.99 CAD',
      salePrice: '$17.99 CAD',
      IntPrice: 17.99,
      discount: '75%',
      availability: PC,
      releaseDate: 2016,
      tag: ["Strategy", "Fantasy", "RPG"]
    },
    {
      image: Game2017,
      name: 'Total War: Warhammer 2',
      originalPrice: '$71.99 CAD',
      salePrice: '24.47 CAD',
      IntPrice: 24.47,
      discount: '66%',
      availability: PC,
      releaseDate: 2017,
      tag: ["Strategy", "Fantasy", "RPG"]
    },
    {
      image: Game2018,
      name: 'Total War Saga: Thrones of Britannia',
      originalPrice: '$47.99 CAD',
      salePrice: '11.99 CAD',
      IntPrice: 11.99,
      discount: '75%',
      availability: PC,
      releaseDate: 2018,
      tag: ["Strategy", "Historical"]
    },
    {
      image: Game2019,
      name: 'Total War: Three Kingdoms',
      originalPrice: '$71.99 CAD',
      salePrice: '24.47 CAD',
      IntPrice: 24.47,
      discount: '66%',
      availability: PC,
      releaseDate: 2019,
      tag: ["Strategy", "Historical", "RPG"]
    },
    {
      image: Game2020,
      name: 'Total War Saga: Troy',
      originalPrice: '$44.99 CAD',
      salePrice: '22.49 CAD',
      IntPrice: 22.49,
      discount: '50%',
      availability: PC,
      releaseDate: 2020,
      tag: ["Strategy", "Historical", "Mythology"]

    },
    {
      image: Game2022,
      name: 'Total War: Warhammer 3',
      originalPrice: '$79.99 CAD',
      salePrice: '39.99 CAD',
      IntPrice: 39.99,
      discount: '50%',
      availability: PC,
      releaseDate: 2022,
      tag: ["Strategy", "Fantasy", "RPG"]

    },
    {
      image: Game2023,
      name: 'Total War: Pharaoh',
      originalPrice: '$79.99 CAD',
      salePrice: '$71.99 CAD',
      IntPrice: 71.99,
      discount: '90%',
      availability: PC,
      releaseDate: 2023,
      tag: ["Strategy", "Historical", "Simulation"]
    }
  ]

  const chunkArray = (array, size) => {
    const chunks = [];
    for (let i = 0; i < array.length; i += size) {
      chunks.push(array.slice(i, Math.min(i + size, array.length)));
    }
    return chunks;
  };


  const [priceFilter, setPriceFilter] = useState(null);
  const [sortMethod, setSortMethod] = useState(null);
  const [genreFilter, setGenreFilter] = useState(null);
  const [isDropdownVisible3, setIsDropdownVisible3] = useState(false);
  const [isDropdownVisible4, setIsDropdownVisible4] = useState(false);
  const [isDropdownVisible5, setIsDropdownVisible5] = useState(false);

  // Toggle functions for dropdowns
  const toggleDropdown3 = () => setIsDropdownVisible3(!isDropdownVisible3);
  const toggleDropdown4 = () => { setIsDropdownVisible4(!isDropdownVisible4); };
  const toggleDropdown5 = () => setIsDropdownVisible5(!isDropdownVisible5);

  // Price filter function
  const applyPriceFilter = (price) => {
    if (priceFilter === price) {
      setPriceFilter(null); // Reset if the same filter is clicked again
    } else {
      setPriceFilter(price);
    }
  };

  const sortGames = (method) => {
    if (sortMethod === method) {
      setSortMethod(null); // Reset if the same sort method is clicked again
    } else {
      setSortMethod(method);
    }
  };

  const applyGenreFilter = (genre) => {
    if (genreFilter === genre) {
      setGenreFilter(null); // Unselect if the same genre is clicked again
    } else {
      setGenreFilter(genre);
    }
  };

  const displayedGames = () => {
    let games = [...TotalWarGames];

    // Filtering
    if (priceFilter) {
      games = games.filter(game => {
        switch (priceFilter) {
          case 'Under $10 CAD':
            return game.IntPrice < 10;
          case 'Under $20 CAD':
            return game.IntPrice < 20;
          case 'Under $40 CAD':
            return game.IntPrice < 40;
          case '$50 CAD and above':
            return game.IntPrice >= 50;
          default:
            return true;
        }
      });
    }

    // Genre filtering
    if (genreFilter) {
      games = games.filter(game => {
        console.log("Filtering for genre:", genreFilter);
        console.log("Game tags:", game.tag);
        return game.tag && game.tag.includes(genreFilter);
      });
    }

    // Sorting
    switch (sortMethod) {
      case 'Alphabetical: A-Z':
        return games.sort((a, b) => a.name.localeCompare(b.name));
      case 'Alphabetical: Z-A':
        return games.sort((a, b) => b.name.localeCompare(a.name));
      case 'Lowest Price':
        return games.sort((a, b) => a.IntPrice - b.IntPrice);
      case 'Highest Price':
        return games.sort((a, b) => b.IntPrice - a.IntPrice);
      case 'Release date: Newest first':
        return games.sort((a, b) => b.releaseDate - a.releaseDate);
      case 'Release date: Oldest first':
        return games.sort((a, b) => a.releaseDate - b.releaseDate);
      default:
        return games;
    }

  };

  const rows = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  const clearFilters = () => {
    setPriceFilter(null);
    setSortMethod(null);
    setGenreFilter(null);
  };


  const sortBySale = (gameA, gameB) => {
    const saleA = 100 - ((gameA.salePrice / gameA.price).toFixed(2)) * 100;
    const saleB = 100 - ((gameB.salePrice / gameB.price).toFixed(2)) * 100;
    return saleB - saleA;
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

  function sortFunction() {
    if (sortType === 0) setGamesData(games.sort(sortByTitle));
  }

  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');
  const [sortType, setSortType] = useState(-1);
  const [gamesData, setGamesData] = useState(games);

  useEffect(() => {
    let temp = undefined;
    setGamesData(temp);
    if (sortType === 0) temp = games.sort(sortByTitle)
    else if (sortType === 1) temp = games.sort(sortByTitle).reverse();
    else if (sortType === 2) temp = games.sort(sortByPrice);
    else if (sortType === 3) temp = games.sort(sortByPrice).reverse();
    else if (sortType === 4) temp = games.sort(sortByReleaseDate);
    else if (sortType === 5) temp = games.sort(sortByReleaseDate).reverse();
    else if (sortType === -1) temp = games;
    setGamesData(temp);
  }, [sortType])

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
        {gamesData.filter(game => (game.title.toLowerCase().includes(query.toLowerCase()))).map((game, i) => (
          <div key={i} className="sale_item">
            <Link to={`/store/${game.id}`}><img src={game.images[0]} alt={game.title} className="sale_image" /></Link>
            <Link to={`/store/${game.id}`}><h3 className="sale_game_title">{game.title}</h3></Link>
            <div className="sale_info_section">
              <div className="sale_price_section">
                <p className="sale_original_price">${game.price}</p>
                <p className="sale_sale_price">${game.salePrice}</p>
              </div>
              <div className="sale_discount">{(100 - ((game.salePrice / game.price).toFixed(2)) * 100)}%</div>
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
        <input id="filter_search" type="text" placeholder={"Search Games..."} />
        <button className='filter_search_button img_btn' onClick={handleSearch}></button>
        <button className="filter_clear_button txt_btn" onClick={null}>Clear Filters</button>
        <div className="sort_title">Sort By:</div>
        <button onClick={() => {setGamesData([]); setSortType(0)}} className="sorting_button">Alphabetically (A-Z)</button>
        <button onClick={() => {setGamesData([]); setSortType(1)}} className="sorting_button">Alphabetically (Z-A)</button>
        <button onClick={() => {setGamesData([]); setSortType(2)}} className="sorting_button">Price (Lowest-Highest)</button>
        <button onClick={() => {setGamesData([]); setSortType(3)}} className="sorting_button">Price (Highest-Lowest)</button>
        <button onClick={() => {setGamesData([]); setSortType(4)}} className="sorting_button">Release Date (Newest First)</button>
        <button onClick={() => {setGamesData([]); setSortType(5)}} className="sorting_button">Release Date (Oldest First)</button>
        <div className="filter_title">Filters</div>

        {/* <div>
          <button className="Sortby-filter" onClick={toggleDropdown3}>
            {isDropdownVisible3 ? 'Close Sort by' : 'Sort by'}
          </button>
          {isDropdownVisible3 && (
            <div className="dropdown-contentFilter">
              <button className={`sort-button ${sortMethod === 'Alphabetical: A-Z' ? 'active-sort' : ''}`}
                onClick={() => sortGames('Alphabetical: A-Z')}>
                Alphabetical: A-Z
              </button>
              <button className={`sort-button ${sortMethod === 'Alphabetical: Z-A' ? 'active-sort' : ''}`}
                onClick={() => sortGames('Alphabetical: Z-A')}>
                Alphabetical: Z-A
              </button>
              <button className={`sort-button ${sortMethod === 'Lowest Price' ? 'active-sort' : ''}`}
                onClick={() => sortGames('Lowest Price')}>
                Lowest Price
              </button>
              <button className={`sort-button ${sortMethod === 'Highest Price' ? 'active-sort' : ''}`}
                onClick={() => sortGames('Highest Price')}>
                Highest Price
              </button>
              <button className={`sort-button ${sortMethod === 'Release date: Newest first' ? 'active-sort' : ''}`}
                onClick={() => sortGames('Release date: Newest first')}>
                Release date: Newest first
              </button>
              <button className={`sort-button ${sortMethod === 'Release date: Oldest first' ? 'active-sort' : ''}`}
                onClick={() => sortGames('Release date: Oldest first')}>
                Release date: Oldest first
              </button>
            </div>
          )}
        </div> */}

        <button className="filter_option" onClick={toggleDropdown4}>
          {isDropdownVisible4 ? 'Close Price' : 'Price'}
        </button>
        {isDropdownVisible4 && (
          <div className="filter_dropdown">
            <button className={`filter_button ${priceFilter === 'Under $10 CAD' ? 'active-filter' : ''}`}
              onClick={() => applyPriceFilter('Under $10 CAD')}>
              {`Free`}
            </button>
            <button className={`filter_button ${priceFilter === 'Under $20 CAD' ? 'active-filter' : ''}`}
              onClick={() => applyPriceFilter('Under $20 CAD')}>
              {`Under $30`}
            </button>
            <button className={`filter_button ${priceFilter === 'Under $40 CAD' ? 'active-filter' : ''}`}
              onClick={() => applyPriceFilter('Under $40 CAD')}>
              {`Under $70`}
            </button>
            <button className={`filter_button ${priceFilter === '$50 CAD and above' ? 'active-filter' : ''}`}
              onClick={() => applyPriceFilter('$50 CAD and above')}>
              {`Above $70`}
            </button>
          </div>
        )}

        <button className="filter_option" onClick={toggleDropdown5}>
          {isDropdownVisible5 ? 'Close Genre' : 'Genre'}
        </button>
        {isDropdownVisible5 && (
          <div className="filter_dropdown">
            <button className={`filter_button ${genreFilter === 'Action' ? 'active-genre' : ''}`} onClick={() => applyGenreFilter('Action')}>Action</button>
            <button className={`filter_button ${genreFilter === 'Adventure' ? 'active-genre' : ''}`} onClick={() => applyGenreFilter('Adventure')}>Adventure</button>
            <button className={`filter_button ${genreFilter === 'RPG' ? 'active-genre' : ''}`} onClick={() => applyGenreFilter('RPG')}>RPG</button>
            <button className={`filter_button ${genreFilter === 'Simulation' ? 'active-genre' : ''}`} onClick={() => applyGenreFilter('Simulation')}>Simulation</button>
            <button className={`filter_button ${genreFilter === 'Strategy' ? 'active-genre' : ''}`} onClick={() => applyGenreFilter('Strategy')}>Strategy</button>
            <button className={`filter_button ${genreFilter === 'Puzzle' ? 'active-genre' : ''}`} onClick={() => applyGenreFilter('Puzzle')}>Puzzle</button>
            <button className={`filter_button ${genreFilter === 'Shooter' ? 'active-genre' : ''}`} onClick={() => applyGenreFilter('Shooter')}>Shooter</button>
            <button className={`filter_button ${genreFilter === 'Fighting' ? 'active-genre' : ''}`} onClick={() => applyGenreFilter('Fighting')}>Fighting</button>
            <button className={`filter_button ${genreFilter === 'Fantasy' ? 'active-genre' : ''}`} onClick={() => applyGenreFilter('Fantasy')}>Fantasy</button>
            <button className={`filter_button ${genreFilter === 'Historical' ? 'active-genre' : ''}`} onClick={() => applyGenreFilter('Historical')}>Historical</button>
            <button className={`filter_button ${genreFilter === 'Racing' ? 'active-genre' : ''}`} onClick={() => applyGenreFilter('Racing')}>Racing</button>
            <button className={`filter_button ${genreFilter === 'Sport' ? 'active-genre' : ''}`} onClick={() => applyGenreFilter('Sport')}>Sport</button>
            <button className={`filter_button ${genreFilter === 'Horror' ? 'active-genre' : ''}`} onClick={() => applyGenreFilter('Horror')}>Horror</button>
            <button className={`filter_button ${genreFilter === 'Platformer' ? 'active-genre' : ''}`} onClick={() => applyGenreFilter('Platformer')}>Platformer</button>
            <button className={`filter_button ${genreFilter === 'Survival' ? 'active-genre' : ''}`} onClick={() => applyGenreFilter('Survival')}>Survival</button>
            <button className={`filter_button ${genreFilter === 'Music/Rhythm' ? 'active-genre' : ''}`} onClick={() => applyGenreFilter('Music/Rhythm')}>Music/Rhythm</button>
            <button className={`filter_button ${genreFilter === 'Visual Novel' ? 'active-genre' : ''}`} onClick={() => applyGenreFilter('Visual Novel')}>Visual Novel</button>
            <button className={`filter_button ${genreFilter === 'Mythology' ? 'active-genre' : ''}`} onClick={() => applyGenreFilter('Mythology')}>Mythology</button>
          </div>
        )}
      </div>
    </div>
  );
}


export default SearchGame;