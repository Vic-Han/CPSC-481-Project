import React, { useState, useEffect } from "react";
import './Gamestore.css';
// Importing game images and platform logos
import totalWar3Kingdom from '../assets/TotalWar3Kingdom.jpg';
import GenshinImpact from '../assets/GenshinImpact.png';
import RocketLeague from '../assets/RocketLeague.webp';
import PC from '../assets/PC.png';
import PS from '../assets/PS.png';
import PCXBOXPS from '../assets/PC-XBOX-PS.png';
import MirageImage from '../assets/Mirage.png';
import SpiderMan2 from '../assets/SM2.webp';
import CS2 from '../assets/CS2.png';
import BF2042 from '../assets/BF2042.png';
import NFL from '../assets/NFL.png';
import RD2 from '../assets/RD2.png';
import ReadyorNot from '../assets/ReadyorNot.png';
import mha from '../assets/mha.jpg';
import GoT from '../assets/Tsushima.jpg';
import theFinals from '../assets/theFinals.webp';
import GTA5 from '../assets/GTA5.bmp';
import Back_Button from '../assets/BackButton.png';

function GameStoreMain(props) {
  const toggleGameDetails = props.clickHandlers.toggleGameDetails;
  const toggleHomePage = props.clickHandlers.toggleHomePage;

  // State for managing slide index and fade effect in the slider
  const [slideIndex, setSlideIndex] = useState(1);
  const [fade, setFade] = useState(false);

  // Arrays for slider content
  const slides = [totalWar3Kingdom, GenshinImpact, RocketLeague];
  const gameNames = ["Total War: Three Kingdoms", "Genshin Impact", "Rocket League"];
  const gamePrice = ["$71.99 CAD", "Free", "Free"];
  const compatibility = [PC, PCXBOXPS, PCXBOXPS];

  // Function to change slides with fade effect
  const changeSlide = (newIndex) => {
    setFade(true);
    setTimeout(() => {
      setSlideIndex(newIndex);
      setFade(false);
    }, 500);
  };

  // Functions to navigate to the next and previous slides
  const nextSlide = () => {
    const newIndex = slideIndex === slides.length - 1 ? 0 : slideIndex + 1;
    changeSlide(newIndex);
  };

  const previousSlide = () => {
    const newIndex = slideIndex === 0 ? slides.length - 1 : slideIndex - 1;
    changeSlide(newIndex);
  };

  // Auto-slide effect with cleanup
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [slideIndex]);

  // Data for games on sale
  const saleGames = [
    {
      image: BF2042,
      name: 'Battlefield 2042',
      originalPrice: '$79.99 CAD',
      salePrice: '$12.79 CAD',
      discount: '-84%',
      availability: PCXBOXPS
    },

    {
      image: NFL,
      name: 'Madden NFL 24',
      originalPrice: '$89.99 CAD',
      salePrice: '$58.49 CAD',
      discount: '-35%',
      availability: PCXBOXPS
    },

    {
      image: RD2,
      name: 'Red Dead Redemption 2',
      originalPrice: '$79.99 CAD',
      salePrice: '$31.99 CAD',
      discount: '-60%',
      availability: PCXBOXPS
    },
    {
      image: ReadyorNot,
      name: 'Ready or Not',
      originalPrice: '$45.99 CAD',
      salePrice: '$36.79 CAD',
      discount: '-20%',
      availability: PC
    },

    {
      image: mha,
      name: 'My Hero Ultra Rumble',
      originalPrice: '$79.99 CAD',
      salePrice: '$0.80 CAD',
      discount: '-99%',
      availability: PC
    },

    {
      image: GoT,
      name: 'Ghost of Tsushima',
      originalPrice: '$79.99 CAD',
      salePrice: '$39.99 CAD',
      discount: '-50%',
      availability: PS
    },
    {
      image: theFinals,
      name: 'The Finals',
      originalPrice: '$79.99 CAD',
      salePrice: '$71.99 CAD',
      discount: '-10%',
      availability: PC
    },
    {
      image: GTA5,
      name: 'Grand Theft Auto V',
      originalPrice: '$19.99 CAD',
      salePrice: '$14.99 CAD',
      discount: '-25%',
      availability: PCXBOXPS
    }
  ];

  // Pagination logic for sale games
  const gamesToShow = 4;
  const totalPages = Math.ceil(saleGames.length / gamesToShow);
  const [currentPage, setCurrentPage] = useState(0);

  // Functions for handling page navigation in sale games
  const handleNextClick = () => {
    setCurrentPage((prevPage) => (prevPage + 1) % totalPages);
  };

  const handlePrevClick = () => {
    setCurrentPage((prevPage) => (prevPage - 1 + totalPages) % totalPages);
  };

  // Calculating games to be displayed on the current page
  const displayedGames = saleGames.slice(
    currentPage * gamesToShow,
    (currentPage + 1) * gamesToShow
  );

  return (
    <div className="game-store">
      {/* Search bar section */}
      <div className="top-container">
        <div className="search-bar-container">
          <img onClick={toggleHomePage} src={Back_Button} className="GS_BackButton" />
          <input className="search-bar" type="text" placeholder="Search Games"></input>
        </div>
      </div>
      <div className="Space"></div>
      {/* Main content section */}
      <div className="main-content">
        {/* New releases slider */}
        <div className="new-releases-container">
          {/* ... New releases content */}
          <h1 className="new-releases-title">New Releases</h1>

          <div className="Slides">
            <img onClick={toggleGameDetails} className={`image-slide ${fade ? 'fade' : ''}`} src={slides[slideIndex]} alt="Slide" />
            <div className="dots-container">
              {slides.map((_, idx) => (
                <span key={idx}
                  className={`dot ${slideIndex === idx ? 'active' : ''}`}
                  onClick={() => setSlideIndex(idx)}></span>
              ))}
            </div>
          </div>

          <a className="prev" onClick={previousSlide}>&#10094;</a>
          <a className="next" onClick={nextSlide}>&#10095;</a>
          <div className="game-info-container">
            <div onClick={toggleGameDetails} className="game-name-display">
              {gameNames[slideIndex]}
            </div>
            <div className="game-compatibility-display">
              <img src={compatibility[slideIndex]} alt="Compatibility" />
            </div>
          </div>

          <div className="game-price-display">
            <span className="price-label">Price: </span>
            <span className="price-value">{gamePrice[slideIndex]}</span>
          </div>
        </div>

        {/* Recommended games section */}
        <div className="recommended-games-container">
          <h2 className="recommended-games-title">Recommended Games</h2>
          <div className="recommended-game">
            <img onClick={toggleGameDetails} src={MirageImage} alt="Assassin's Creed Mirage" className="game-image" />
            <div className="Right-Side1">
              <h3 onClick={toggleGameDetails} className="RG-Title">Assassin's Creed Mirage</h3>
              <p className="game-price">Price: $69.99 CAD</p>
              <img src={PCXBOXPS} />
            </div>
          </div>
          <div className="recommended-game">

            <img onClick={toggleGameDetails} src={SpiderMan2} alt="Marvel's Spider-Man 2" className="game-image" />

            <div className="Right-Side2">
              <h3 onClick={toggleGameDetails} className="RG-Title">Spider-Man 2</h3>
              <p className="game-price">PC Price: $69.99 CAD</p>
              <img src={PS} />
            </div>
          </div>
          <div className="recommended-game">
            <img onClick={toggleGameDetails} src={CS2} alt="Counter-Strike 2" className="game-image" />
            <div className="Right-Side3">
              <h3 onClick={toggleGameDetails} className="RG-Title">Counter-Strike 2</h3>
              <p className="game-price">Free</p>
              <img src={PC} />
            </div>
          </div>
        </div>
      </div>
      {/* Games on sale section */}
      <div className="main-content2">
        <hr className="line"></hr>
        <div className="games-on-sale-title">Games on Sale</div>
        <div className="sale-slider">
          {displayedGames.map((game, index) => (
            <div key={index} className="sale-item">
              <img onClick={toggleGameDetails} src={game.image} alt={game.name} className="sale-image" style={{ width: '213.333px' }} />
              <div className="sale-info">
                <h3 onClick={toggleGameDetails} className="game-name">{game.name}</h3>
                <p className="original-price">{game.originalPrice}</p>
                <p className="sale-price">{game.salePrice}</p>
                <div className="discount">{game.discount}</div>
                <img onClick={toggleGameDetails} src={game.availability} className="availability" />
              </div>
            </div>
          ))}
        </div>
        <div className="slider-controls">
          <button
            className="prev-button"
            onClick={handlePrevClick}
            disabled={currentPage === 0}
          >
            &#10094;
          </button>
          <button
            className="next-button"
            onClick={handleNextClick}
            disabled={currentPage === totalPages - 1}
          >
            &#10095;
          </button>
        </div>
        <div className="Space1"></div>
      </div>
    </div>
  );
}

export default GameStoreMain;
