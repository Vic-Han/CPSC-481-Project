import React, { useState, useEffect } from 'react';
import './GameDetails.css'
import TW3K1 from '../assets/TotalWar3Kingdom.jpg';
import TW3K2 from '../assets/TW3K2.jpg';
import TW3K3 from '../assets/TW3K3.jpg';
import TW3K4 from '../assets/TW3K4.jpg';
import TW3K5 from '../assets/TW3K5.jpg';
import PC from '../assets/PC.png';

function GameDetails(props) {
    const toggleGameStore = props.toggleGameStore;
    const [slideIndex, setSlideIndex] = useState(1);
    const [fade, setFade] = useState(false);

    const slides = [TW3K1, TW3K2, TW3K3, TW3K4, TW3K5];
    const changeSlide = (newIndex) => {
        setFade(true);
        setTimeout(() => {
            setSlideIndex(newIndex);
            setFade(false);
        }, 500);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 5000);

        return () => clearInterval(interval);
    }, [slideIndex]);

    // Functions to navigate to the next and previous slides
    const nextSlide = () => {
        const newIndex = slideIndex === slides.length - 1 ? 0 : slideIndex + 1;
        changeSlide(newIndex);
    };

    const previousSlide = () => {
        const newIndex = slideIndex === 0 ? slides.length - 1 : slideIndex - 1;
        changeSlide(newIndex);
    };

    const [isDropdownVisible, setIsDropdownVisible] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownVisible(!isDropdownVisible);
    };

    return (
        <div className='game-detail'>
            <button onClick={toggleGameStore}> go back to gamestore page</button>
            <div className='main-content'>
                <div className="Game_Slides">
                    <h1 className='TW3K_Title'>Total War: Three Kingdoms</h1>
                    <img className={`Slide_Images ${fade ? 'fade' : ''}`} src={slides[slideIndex]} alt="Game_Slides" />
                    <a className="Image_Prev" onClick={previousSlide}>&#10094;</a>
                    <a className="Image_Next" onClick={nextSlide}>&#10095;</a>
                    <div className="dots-container2">
                        {slides.map((_, idx) => (
                            <span key={idx}
                                className={`dot2 ${slideIndex === idx ? 'active' : ''}`}
                                onClick={() => setSlideIndex(idx)}></span>
                        ))}
                    </div>
                    <div className="TagsC">
                        <div className="TagsR">
                            <div className="Tag1">
                                <h1 className='TagName'>Real-Time Tactics</h1>
                            </div>
                            <div className="Tag2">
                                <h1 className='TagName'>Turned-Based</h1>
                            </div>
                            <div className="Tag3">
                                <h1 className='TagName'>Real Time Strategy</h1>
                            </div>
                            <div className='PC_Logo'>
                                <img src={PC} alt="PC Logo" />
                            </div>
                        </div>
                    </div>
                    <div className='Game_Description_Container'>
                        <p className='Game_Description'>
                            Total War: THREE KINGDOMS is the first in the award-winning series to recreate epic
                            conflict across ancient China. Combining a gripping turn-based campaign of empire-building
                            & conquest with stunning real-time battles, THREE KINGDOMS redefines the series in an age
                            of heroes & legends.</p>
                    </div>
                    <button className='Review_Button' onClick={toggleDropdown}>
                        {isDropdownVisible ? 'See Review' : 'Close Review'}
                    </button>
                    {isDropdownVisible && (
                        <div className="dropdown-content">
                            <p className='Review1'><strong style={{ fontSize: '24px' }}>Epic in Scale and Detail!!</strong><br />Chad Faxmachine<br />Rating: 9.5/10 <br />
                                I'm blown away by the depth of strategy and rich historical detail in Total War: Three Kingdoms.
                                The art of war truly comes to life in this game. The diplomacy system is a game-changer, and
                                managing my empire feels incredibly immersive. A solid 9.5/10 for me!
                            </p>
                            <p className='Review2'><strong style={{ fontSize: '24px' }}>Visually Stunning, but Demanding on Hardware!</strong><br />Zaraki Kenpachi<br />Rating: 8/10 <br />
                            The visuals in Three Kingdoms are nothing short of breathtaking, with some of the most impressive battle scenes 
                            I've ever experienced in a strategy game. However, be prepared for a demanding game in terms of system requirements.
                             My older setup struggled a bit. Solid 8/10, but make sure your PC is up to it. </p>
                             <p className='Review3'><strong style={{ fontSize: '24px' }}>A Fresh Take on the Total War Series!</strong><br />Obito Uchiha<br />Rating: 9/10 <br />
                             Total War: Three Kingdoms brings a fresh perspective to the series with its focus on Chinese history and lore. 
                             The character-driven gameplay adds a new layer of depth and intrigue. Some traditionalists might miss the old 
                             formula, but I absolutely love this new direction. It's a strong 9/10 from me.
                             </p> 
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
export default GameDetails;