import React, { useState, useEffect } from "react";
import './SearchGame.css';
import PC from '../assets/PC.png';
import Back_Button from '../assets/BackButton.png';

import Game2000 from '../TotalWar/1.bmp';
import Game2002 from '../TotalWar/2.bmp';
import Game2004 from '../TotalWar/3.bmp';
import Game2006 from '../TotalWar/4.bmp';

import Game2009 from '../TotalWar/5.bmp';
import Game2010 from '../TotalWar/6.bmp';
import Game2011 from '../TotalWar/7.bmp';
import Game2013 from '../TotalWar/8.bmp';

import Game2015 from '../TotalWar/9.bmp';
import Game2016 from '../TotalWar/10.bmp';
import Game2017 from '../TotalWar/11.bmp';
import Game2018 from '../TotalWar/12.bmp';

import Game2019 from '../TotalWar/13.bmp';
import Game2020 from '../TotalWar/14.bmp';
import Game2022 from '../TotalWar/15.bmp';
import Game2023 from '../TotalWar/16.bmp';

function SearchGame(props) {
    //Data for games by on the search "Total War"
    const { searchQuery, toggleGameStore } = props;
    const {toggleGameDetails, toggleGameSearch, toggleHomePage2} = props;
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

    const rows = chunkArray(displayedGames(), 4);

    const clearFilters = () => {
        setPriceFilter(null);
        setSortMethod(null);
        setGenreFilter(null);
    };

    return (

        <div className="searchGame-container">
            <div className="leftside-container">
                <img onClick={toggleGameStore} src={Back_Button} className="GSearch_BackButton"  />
                {rows.map((row, index) => (
                    <div key={index} className="SG-row">
                        {row.map(game => (
                            <div key={game.name} className="search-item">
                                <img  onClick={game.image === Game2019 ? toggleGameDetails : null} src={game.image} alt={game.name} className="searchGame-image" />
                                <div className="pricing-info">
                                    <h3 className="game-name">{game.name}</h3>
                                    <h3 className="discount2">{game.discount}</h3>
                                    <h3 className="original-price2">{game.originalPrice}</h3>
                                    <h3 className="sale-price2">{game.salePrice}</h3>
                                    <img src={game.availability} className="PC-icon" />
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
            <div className="rightside-container">
                <div className="filter-container">
                    <h1 className="Filter-title">Filters</h1>
                    <input className="small-search" type="text" placeholder={""} value={inputValue} onChange={e => setInputValue(e.target.value)}/>
                    <button className="clear-genre-button" onClick={clearFilters}>Clear</button>
                    <button className='GameSearch-Button2' ></button>
                    <div>
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
                    </div>

                    <div>
                        <button className="Sortby-filter" onClick={toggleDropdown4}>
                            {isDropdownVisible4 ? 'Close Price' : 'Price'}
                        </button>
                        {isDropdownVisible4 && (
                            <div className="dropdown-contentFilter">
                                <button className={`filter-button ${priceFilter === 'Under $10 CAD' ? 'active-filter' : ''}`}
                                    onClick={() => applyPriceFilter('Under $10 CAD')}>
                                    Under $10 CAD
                                </button>
                                <button className={`filter-button ${priceFilter === 'Under $20 CAD' ? 'active-filter' : ''}`}
                                    onClick={() => applyPriceFilter('Under $20 CAD')}>
                                    Under $20 CAD
                                </button>
                                <button className={`filter-button ${priceFilter === 'Under $40 CAD' ? 'active-filter' : ''}`}
                                    onClick={() => applyPriceFilter('Under $40 CAD')}>
                                    Under $40 CAD
                                </button>
                                <button className={`filter-button ${priceFilter === '$50 CAD and above' ? 'active-filter' : ''}`}
                                    onClick={() => applyPriceFilter('$50 CAD and above')}>
                                    $50 CAD and above
                                </button>
                            </div>
                        )}

                    </div>
                    <div>
                        <button className="Sortby-filter" onClick={toggleDropdown5}>
                            {isDropdownVisible5 ? 'Close Genre' : 'Genre'}
                        </button>
                        {isDropdownVisible5 && (
                            <div className="dropdown-contentFilter">
                                <button className={`genre-button ${genreFilter === 'Action' ? 'active-genre' : ''}`} onClick={() => applyGenreFilter('Action')}>Action</button>
                                <button className={`genre-button ${genreFilter === 'Adventure' ? 'active-genre' : ''}`} onClick={() => applyGenreFilter('Adventure')}>Adventure</button>
                                <button className={`genre-button ${genreFilter === 'RPG' ? 'active-genre' : ''}`} onClick={() => applyGenreFilter('RPG')}>RPG</button>
                                <button className={`genre-button ${genreFilter === 'Simulation' ? 'active-genre' : ''}`} onClick={() => applyGenreFilter('Simulation')}>Simulation</button>
                                <button className={`genre-button ${genreFilter === 'Strategy' ? 'active-genre' : ''}`} onClick={() => applyGenreFilter('Strategy')}>Strategy</button>
                                <button className={`genre-button ${genreFilter === 'Puzzle' ? 'active-genre' : ''}`} onClick={() => applyGenreFilter('Puzzle')}>Puzzle</button>
                                <button className={`genre-button ${genreFilter === 'Shooter' ? 'active-genre' : ''}`} onClick={() => applyGenreFilter('Shooter')}>Shooter</button>
                                <button className={`genre-button ${genreFilter === 'Fighting' ? 'active-genre' : ''}`} onClick={() => applyGenreFilter('Fighting')}>Fighting</button>
                                <button className={`genre-button ${genreFilter === 'Fantasy' ? 'active-genre' : ''}`} onClick={() => applyGenreFilter('Fantasy')}>Fantasy</button>
                                <button className={`genre-button ${genreFilter === 'Historical' ? 'active-genre' : ''}`} onClick={() => applyGenreFilter('Historical')}>Historical</button>
                                <button className={`genre-button ${genreFilter === 'Racing' ? 'active-genre' : ''}`} onClick={() => applyGenreFilter('Racing')}>Racing</button>
                                <button className={`genre-button ${genreFilter === 'SpoRPG' ? 'active-genre' : ''}`} onClick={() => applyGenreFilter('SpoRPG')}>SpoRPG</button>
                                <button className={`genre-button ${genreFilter === 'Horror' ? 'active-genre' : ''}`} onClick={() => applyGenreFilter('Horror')}>Horror</button>
                                <button className={`genre-button ${genreFilter === 'Platformer' ? 'active-genre' : ''}`} onClick={() => applyGenreFilter('Platformer')}>Platformer</button>
                                <button className={`genre-button ${genreFilter === 'Survival' ? 'active-genre' : ''}`} onClick={() => applyGenreFilter('Survival')}>Survival</button>
                                <button className={`genre-button ${genreFilter === 'Music/Rhythm' ? 'active-genre' : ''}`} onClick={() => applyGenreFilter('Music/Rhythm')}>Music/Rhythm</button>
                                <button className={`genre-button ${genreFilter === 'Visual Novel' ? 'active-genre' : ''}`} onClick={() => applyGenreFilter('Visual Novel')}>Visual Novel</button>
                                <button className={`genre-button ${genreFilter === 'Mythology' ? 'active-genre' : ''}`} onClick={() => applyGenreFilter('Mythology')}>Mythology</button>
                            </div>

                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}


export default SearchGame;