import React, { useState, useEffect } from "react";
import './Gamestore.css';
import totalWar3Kingdom from '../assets/TotalWar3Kingdom.jpg';
import GenshinImpact from '../assets/GenshinImpact.png';
import RocketLeague from '../assets/RocketLeague.webp';
import PC from '../assets/PC.png';
import PCXBOXPS from '../assets/PC-XBOX-PS.png';

function GameStoreMain(props) {
    const [slideIndex, setSlideIndex] = useState(1);
    const [fade, setFade] = useState(false);
    const slides = [totalWar3Kingdom, GenshinImpact, RocketLeague];
    const gameNames = ["Total War: Three Kingdoms", "Genshin Impact", "Rocket League"];
    const gamePrice = ["$71.99 CAD", "Free", "Free"];
    const compatibility = [PC, PCXBOXPS, PCXBOXPS];
    const toggleGameDetails = props.toggleGameDetails;

    const changeSlide = (newIndex) => {
        setFade(true);
        setTimeout(() => {
            setSlideIndex(newIndex);
            setFade(false);
        }, 500);
    };

    const nextSlide = () => {
        const newIndex = slideIndex === slides.length - 1 ? 0 : slideIndex + 1;
        changeSlide(newIndex);
    };

    const previousSlide = () => {
        const newIndex = slideIndex === 0 ? slides.length - 1 : slideIndex - 1;
        changeSlide(newIndex);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 10000);

        return () => clearInterval(interval);
    }, [slideIndex]);

    return (
        <div className="game-store">
            <div className="top-container">
                <div className="search-bar-container">
                    <input className="search-bar" type="text" placeholder="Search Games"></input>
                </div>
            </div>

            <div className="main-content">

                <div className="Space"></div>

                <div className="new-releases-container">
                    <h1 className="new-releases-title">New Releases</h1>

                    <div className="Slides">
                        <img className={`image-slide ${fade ? 'fade' : ''}`} src={slides[slideIndex]} alt="Slide" />

                        <div className="dots-container">
                            {slides.map((_, idx) => (
                                <span key={idx} className={`dot ${slideIndex === idx ? 'active' : ''}`} onClick={() => setSlideIndex(idx)}></span>
                            ))}
                        </div>
                    </div>

                    <a className="prev" onClick={previousSlide}>&#10094;</a>
                    <a className="next" onClick={nextSlide}>&#10095;</a>
                    <div className="game-info-container">
                        <div className="game-name-display">
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

                <div className="recommended-games-container">
                    <h2 className="recommended-games-title">Recommended Games</h2>
                    <div className="recommended-games-list">
                        <h3>Assassin's Creed Mirage</h3>
                        <div className="game-info">
                        <img src='../assets/Mirage.png'></img>
                            <p className="game-price">Price: $69.99</p>
                        </div>
                        <h3>Spider-Man 2</h3>
                        <div className="game-info">
                            
                            <p className="game-price">Price: $69.99</p>
                        </div>
                        <h3>Counter-Strike 2</h3>
                        <div className="game-info">
                            <p className="game-price">Free</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default GameStoreMain;
