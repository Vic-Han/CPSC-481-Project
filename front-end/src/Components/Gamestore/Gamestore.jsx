import React, { useState, useEffect } from "react";
import { games } from "../../games";

import './Gamestore.css';
// Importing game images and platform logos
import PC from '../../assets/PC.png';
import PS from '../../assets/PS.png';
import XBOX from '../../assets/Xbox.png';
import SWITCH from '../../assets/Switch.png';

import StoreRecommended from "../../Elements/StoreRecommended";
import { Link, useNavigate } from "react-router-dom";


function GameStoreMain() {
  //--------------------------Slideshow Function/States--------------------------
  const [slideIndex, setSlideIndex] = useState(0);
  const [fade, setFade] = useState(false);

  const nextSlide = () => {
    const newIndex = (slideIndex === sortedGames.length - 1) ? 0 : slideIndex + 1;
    changeSlide(newIndex);
  };

  const previousSlide = () => {
    const newIndex = (slideIndex === 0) ? sortedGames.length - 1 : slideIndex - 1;
    changeSlide(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [slideIndex]);

  const changeSlide = (newIndex) => {
    setFade(true);
    setTimeout(() => {
      setSlideIndex(newIndex);
      setFade(false);
    }, 500);
  };

  //--------------------------Calculating Game Lists--------------------------
  const sortByReleaseDate = (gameA, gameB) => {
    const releaseDateA = new Date(gameA.release);
    const releaseDateB = new Date(gameB.release);
    return releaseDateB - releaseDateA;
  };

  const sortByRating = (gameA, gameB) => {
    const ratingA = gameA.rating;
    const ratingB = gameB.rating;
    return ratingB - ratingA;
  };

  const sortBySale = (gameA, gameB) => {
    const saleA = 100 - ((gameA.salePrice / gameA.price).toFixed(2)) * 100;
    const saleB = 100 - ((gameB.salePrice / gameB.price).toFixed(2)) * 100;
    return saleB - saleA;
  }

  function getRecommendedGames(chosenGames) {
    const temp = games.sort(sortByRating);
    const chosenIds = chosenGames.map(game => game.id);
    const recommended = temp.filter(function (game) {
      return !chosenIds.includes(game.id);
    })
    return recommended.slice(0, 3);
  }

  function getSaleGames() {
    const temp = games.sort(sortBySale);
    const temp1 = temp.filter(function (game) {
      return 100 - ((game.salePrice / game.price).toFixed(2)) * 100 !== 0;
    })
    const saleGames = temp1.filter(function (game) {
      return game.price !== 0;
    })
    return saleGames;
  }

  const sortedGames = games.sort(sortByReleaseDate).slice(0, 3);
  const recommendedGames = getRecommendedGames(sortedGames);
  const saleGames = getSaleGames();

  //---------------------------Games On Sale Sliding Functions---------------------------
  const gamesToShow = 4;
  const totalPages = Math.ceil(saleGames.length / gamesToShow);
  const [currentPage, setCurrentPage] = useState(0);

  const handleNextClick = () => {
    setCurrentPage((prevPage) => (prevPage + 1) % totalPages);
  };

  const handlePrevClick = () => {
    setCurrentPage((prevPage) => (prevPage - 1 + totalPages) % totalPages);
  };

  const displayedGames = saleGames.slice(
    currentPage * gamesToShow,
    (currentPage + 1) * gamesToShow
  );

  const navigate = useNavigate();

  function handleSearch() {
    navigate(`/game?query=${document.getElementById("game_store_search").value}`);
  }

  function keyboardHandler(e) {
    const input = document.getElementById("game_store_search")
    if (input.contains(e.target) && e.key === 'Enter') {
      handleSearch();
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', keyboardHandler)
    return () => { document.removeEventListener('keydown', keyboardHandler) }
  }, [])

  return (
    <div className="game_store">
      <div className="game_store_top">
        <input id="game_store_search" type='text' placeholder='Browse Games' onKeyDown={e => e.key === 'Enter' && handleSearch()}></input>
        <button className='game_store_search_button' onClick={handleSearch}></button>
      </div>

      <div className="game_store_main">
        <div className="game_store_release">
          <h1>New Releases</h1>
          <Link to={`/store/${sortedGames[slideIndex].id}`}><img className={`image-slide ${fade ? 'fade' : null}`} src={sortedGames[slideIndex].images[0]}></img></Link>
          <button className="release_prev_button" onClick={previousSlide}>&#10094;</button>
          <button className="release_next_button" onClick={nextSlide}>&#10095;</button>
          <div className="game_release_bottom">
            <div className="game_release_info">
              <Link to={`/store/${sortedGames[slideIndex].id}`}><h2>{sortedGames[slideIndex].title}</h2></Link>
              {((sortedGames[slideIndex].price - sortedGames[slideIndex].salePrice) > 0) ?
                <h3>Price: <p className='strikethrough'>${sortedGames[slideIndex].price}</p> <p>${sortedGames[slideIndex].salePrice}</p></h3> :
                <h3>Price: <p>${sortedGames[slideIndex].price}</p></h3>}
            </div>
            <div className="game_release_availability">
              {sortedGames[slideIndex].availability.map((type, i) => {
                if (type === "PC") return <img key={i} src={PC}></img>
                else if (type === "PS") return <img key={i} src={PS}></img>
                else if (type === "Xbox") return <img key={i} src={XBOX}></img>
                else if (type === "Switch") return <img key={i} src={SWITCH}></img>
              })}
            </div>
          </div>
          <div className="game_release_dots">
            {sortedGames.map((game, i) => (
              <span key={game.id} className={(i === slideIndex) ? "release_dot active_dot" : "release_dot"}></span>
            ))}
          </div>
        </div>

        <div>
          <div className="game_store_recommended">
            <h1>Recommended Games</h1>
          </div>
          <div className="game_store_recom_games">
            {recommendedGames.map((game, i) => (
              <StoreRecommended data={game} />
            ))}
          </div>
        </div>
      </div>
      <div className="line"></div>

      <div className="store_sale_section">
        <h1 className="sale_title">Games on Sale</h1>
        <div className="sale_slider">
          {displayedGames.map((game, i) => (
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
        <div className="slider-controls">
          <button className="prev-button" onClick={handlePrevClick} disabled={currentPage === 0}>&#10094;</button>
          <button className="next-button" onClick={handleNextClick} disabled={currentPage === totalPages - 1}>&#10095;</button>
        </div>
      </div>
    </div>
    // <div className="game-store">
    //   {/* Search bar section */}
    //   <div className="top-container">
    //     <div className="search-bar-container">
    //       <img onClick={toggleHomePage2} src={Back_Button} className="GS_BackButton" />
    //       <input className="search-bar" type="text" placeholder="Search Games" onKeyDown={e => e.key === 'Enter' && handleSearch()} />
    //       <button className='GameSearch-Button' onClick={handleSearch}></button>
    //     </div>
    //   </div>
    //   <div className="Space"></div>
    //   {/* Main content section */}
    //   <div className="main-content">
    //     {/* New releases slider */}
    //     <div className="new-releases-container">
    //       {/* ... New releases content */}
    //       <h1 className="new-releases-title">New Releases</h1>

    //       <div className="Slides">
    //         <img onClick={toggleGameDetails} className={`image-slide ${fade ? 'fade' : ''}`} src={slides[slideIndex]} alt="Slide" />
    //         <div className="dots-container">
    //           {slides.map((_, idx) => (
    //             <span key={idx}
    //               className={`dot ${slideIndex === idx ? 'active' : ''}`}
    //               onClick={() => setSlideIndex(idx)}></span>
    //           ))}
    //         </div>
    //       </div>

    //       <a className="prev" onClick={previousSlide}>&#10094;</a>
    //       <a className="next" onClick={nextSlide}>&#10095;</a>
    //       <div className="game-info-container">
    //         <div onClick={toggleGameDetails} className="game-name-display">
    //           {gameNames[slideIndex]}
    //         </div>
    //         <div className="game-compatibility-display">
    //           <img src={compatibility[slideIndex]} alt="Compatibility" />
    //         </div>
    //       </div>

    //       <div className="game-price-display">
    //         <span className="price-label">Price: </span>
    //         <span className="price-value">{gamePrice[slideIndex]}</span>
    //       </div>
    //     </div>

    //     {/* Recommended games section */}
    //     <div className="recommended-games-container">
    //       <h2 className="recommended-games-title">Recommended Games</h2>
    //       <div className="recommended-game">
    //         <img onClick={toggleGameDetails} src={MirageImage} alt="Assassin's Creed Mirage" className="game-image" />
    //         <div className="Right-Side1">
    //           <h3 onClick={toggleGameDetails} className="RG-Title">Assassin's Creed Mirage</h3>
    //           <p className="game-price">Price: $69.99 CAD</p>
    //           <img src={PCXBOXPS} />
    //         </div>
    //       </div>
    //       <div className="recommended-game">

    //         <img onClick={toggleGameDetails} src={SpiderMan2} alt="Marvel's Spider-Man 2" className="game-image" />

    //         <div className="Right-Side2">
    //           <h3 onClick={toggleGameDetails} className="RG-Title">Spider-Man 2</h3>
    //           <p className="game-price">PC Price: $69.99 CAD</p>
    //           <img src={PS} />
    //         </div>
    //       </div>
    //       <div className="recommended-game">
    //         <img onClick={toggleGameDetails} src={CS2} alt="Counter-Strike 2" className="game-image" />
    //         <div className="Right-Side3">
    //           <h3 onClick={toggleGameDetails} className="RG-Title">Counter-Strike 2</h3>
    //           <p className="game-price">Free</p>
    //           <img src={PC} />
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   {/* Games on sale section */}
    //   <div className="main-content2">
    //     <hr className="line"></hr>
    //     <div className="games-on-sale-title">Games on Sale</div>
    //     <div className="sale-slider">
    //       {displayedGames.map((game, index) => (
    //         <div key={index} className="sale-item">
    //           <img onClick={toggleGameDetails} src={game.image} alt={game.name} className="sale-image" style={{ width: '213.333px' }} />
    //           <div className="sale-info">
    //             <h3 onClick={toggleGameDetails} className="game-name">{game.name}</h3>
    //             <p className="original-price">{game.originalPrice}</p>
    //             <p className="sale-price">{game.salePrice}</p>
    //             <div className="discount">{game.discount}</div>
    //             <img onClick={toggleGameDetails} src={game.availability} className="availability" />
    //           </div>
    //         </div>
    //       ))}
    //     </div>
    //     <div className="slider-controls">
    //       <button
    //         className="prev-button"
    //         onClick={handlePrevClick}
    //         disabled={currentPage === 0}
    //       >
    //         &#10094;
    //       </button>
    //       <button
    //         className="next-button"
    //         onClick={handleNextClick}
    //         disabled={currentPage === totalPages - 1}
    //       >
    //         &#10095;
    //       </button>
    //     </div>
    //     <div className="Space1"></div>
    //   </div>
    // </div>
  );
}

export default GameStoreMain;
