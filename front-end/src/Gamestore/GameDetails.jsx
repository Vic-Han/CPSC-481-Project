import React, { useState, useEffect } from 'react';
import './GameDetails.css'
import TW3K1 from '../assets/TotalWar3Kingdom.jpg';
import TW3K2 from '../assets/TW3K2.jpg';
import TW3K3 from '../assets/TW3K3.jpg';
import TW3K4 from '../assets/TW3K4.jpg';
import TW3K5 from '../assets/TW3K5.jpg';
import PC from '../assets/PC.png';
import Redirect from '../assets/Redirect.png';
import WarHammer3 from '../assets/TWW3.jpg';
import HeartofIron4 from '../assets/HOI4.jpg';
import TroyGame from '../assets/Troy.bmp';
import AOE4 from '../assets/AOE4.bmp';
import BackButtonStore from '../assets/BackButton.png';


function GameDetails(props) {
    const toggleGameDetails = props.toggleGameDetails;
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

    const [isDropdownVisible2, setIsDropdownVisible2] = useState(false);

    const toggleDropdownGames = () => {
        setIsDropdownVisible2(!isDropdownVisible2);
    }

    return (
        <div className='game-detail'>
            <div className='main-content'>
                <div className="Game_Slides">
                    <div className="title-container">
                        <img onClick={toggleGameStore} src={BackButtonStore} className='GS_BackButton2' />
                        <h1 className='TW3K_Title'>Total War: Three Kingdoms</h1>
                    </div>
                    <img onClick={toggleGameDetails} className={`Slide_Images ${fade ? 'fade' : ''}`} src={slides[slideIndex]} alt="Game_Slides" />
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
                        {isDropdownVisible ? 'Close Reviews' : 'See Reviews'}
                    </button>
                    {isDropdownVisible && (
                        <div className="dropdown-content">
                            <p className='Review1'><strong style={{ fontSize: '24px', color: '#7E82DF' }}>Epic in Scale and Detail!!</strong><span style={{ color: "#7E82DF" }}><br />Chad Faxmachine | Rating: 9.5/10<br /></span>
                                I'm blown away by the depth of strategy and rich historical detail in Total War: Three Kingdoms.
                                The art of war truly comes to life in this game. The diplomacy system is a game-changer, and
                                managing my empire feels incredibly immersive. A solid 9.5/10 for me!
                            </p>
                            <p className='Review2'><strong style={{ fontSize: '24px', color: '#7E82DF' }}>Visually Stunning, but Demanding on Hardware!</strong><span style={{ color: "#7E82DF" }}><br />Zaraki Kenpachi | Rating: 9.8/10<br /></span>
                                The visuals in Three Kingdoms are nothing short of breathtaking, with some of the most impressive battle scenes
                                I've ever experienced in a strategy game. However, be prepared for a demanding game in terms of system requirements.
                                My older setup struggled a bit. Solid 8/10, but make sure your PC is up to it. </p>
                            <p className='Review3'><strong style={{ fontSize: '24px', color: '#7E82DF' }}>A Fresh Take on the Total War Series!</strong><span style={{ color: "#7E82DF" }}><br />Obito Uchiha | Rating: 9.0/10<br /></span>
                                Total War: Three Kingdoms brings a fresh perspective to the series with its focus on Chinese history and lore.
                                The character-driven gameplay adds a new layer of depth and intrigue. Some traditionalists might miss the old
                                formula, but I absolutely love this new direction. It's a strong 9/10 from me.
                            </p>
                            <p className='Review2'><strong style={{ fontSize: '24px', color: '#7E82DF' }}>A Strategist's Dream Come True!</strong><span style={{ color: "#7E82DF" }}><br />Alexa Tactician | Rating: 9.7/10<br /></span>
                                From the intricate political machinations to the grandiose battlefields, Total War: Three Kingdoms captures
                                the essence of ancient Chinese warfare with finesse. The strategic depth is unparalleled, offering a cerebral
                                challenge that rewards cunning and adaptability. Every decision feels weighty, and the satisfaction of a well-executed plan
                                is sheer bliss. A magnificent 9.7/10 from a strategy aficionado!
                            </p>
                            <p className='Review2'><strong style={{ fontSize: '24px', color: '#7E82DF' }}>A Symphony of War!</strong><span style={{ color: "#7E82DF" }}><br />Boris Warlord | Rating: 9.0/10<br /></span>
                                The game is a tour de force in the strategy genre, harmonizing the brutality of war with the poetry of Chinese history.
                                The campaign map is a vibrant and dynamic playground for conquest, and the real-time battles are a visual spectacle.
                                It's a symphony where every instrument of war plays its part to perfection. Truly,
                                a compelling and captivating experience - 9/10! </p>
                            <p className='Review2'><strong style={{ fontSize: '24px', color: '#7E82DF' }}>The Emperor's New Game!</strong><span style={{ color: "#7E82DF" }}><br />Claire Dynasty | Rating: 9.2/10<br /></span>
                                Total War: Three Kingdoms is a crowning achievement in historical strategy games. As I delve into the rich tapestry
                                of the Three Kingdoms era, I'm not just playing a game; I'm living through history. The characters are as deep as
                                the strategy, with alliances and betrayals that would make even Lu Bu take notice.  For its enthralling narrative and strategic complexity, I give it a regal 9.2/10.
                            </p>
                            <p className='Review2'><strong style={{ fontSize: '24px', color: '#7E82DF' }}>A Feast for the Mind and Eyes!</strong><span style={{ color: "#7E82DF" }}><br />Derek Sage | Rating: 9.3/10<br /></span>
                                This game is an absolute feast for the mind and eyes! The strategic layer is complex without being inscrutable,
                                and the battles are a visual delight. I'm particularly impressed with the AI, which provides a worthy opponent.
                                The cultural authenticity adds to the immersion, making me feel like a true Son of Heaven. A resounding 9.3/10 for this masterpiece.
                            </p>
                            <p className='Review2'><strong style={{ fontSize: '24px', color: '#7E82DF' }}>A Tapestry of Tactical Triumph!</strong><span style={{ color: "#7E82DF" }}><br />Morgan Sun Tzu | Rating: 9.4/10<br /></span>
                                In the grand landscape of strategy games, Total War: Three Kingdoms stands out as a masterful tapestry of tactical triumph.
                                The game's depth is not just in its military maneuvers but also in its portrayal of the rich, complex relationships and
                                rivalries of the era. The balance between cultural authenticity and gameplay innovation is struck with the precision of a
                                Guan Yu strike. It's a testament to the genre and a beacon for future titles.  For its brilliance in design and execution, it earns a stalwart 9.4/10 from me!
                            </p>
                        </div>
                    )}
                </div>
                <div className="Rightside_Content">
                    <div className="Buy_Container">
                        <h1 className='Rating'><span style={{ color: "#7E82DF" }}>Rating:</span> 9.3/10</h1>
                        <h1 className='Rating'><span style={{ color: "#7E82DF" }}>PC Price:</span> $71.99 CAD</h1>
                        <div className='ButtonC'>
                            <div className='ButtonR'>
                                <a href="https://store.steampowered.com/app/779340/Total_War_THREE_KINGDOMS/" target="_blank" rel="noopener noreferrer" className='Buy_Link'>
                                    <div className='Buy_PC'>Buy on Steam  <img src={Redirect} className="Redirect_Img" alt="Redirect to Steam" /></div>
                                </a>
                                <a href="https://www.xbox.com/en-CA/games/store/total-war-three-kingdoms/9PJDSPZKQD6W" target="_blank" rel="noopener noreferrer" className='Buy_Link'>
                                    <div className="Buy_XBOX">Buy on Xbox <img src={Redirect} className="Redirect_Img" /></div>
                                </a>
                            </div>
                        </div>
                        <hr className='Line_Space'></hr>
                        <h2 className='Rating'><span style={{ color: "#7E82DF" }}>Franchise: </span>Total War</h2>
                        <h2 className='Rating'><span style={{ color: "#7E82DF" }}>Genres: </span>Action, Strategy</h2>
                        <h2 className='Rating'><span style={{ color: "#7E82DF" }}>Publisher: </span>Creative Assembly, Feral Interactive</h2>
                        <h2 className='Rating'><span style={{ color: "#7E82DF" }}>Release Date: </span>May 23, 2019</h2>
                    </div>

                    <div className="Similar_Games_Container">
                        <h1 className="Similar_Games_Title">Similar Games</h1>
                        <hr className='Line_Space'></hr>
                        <h3 onClick={toggleGameDetails} className='Similar_Game_Names'>Total War: Warhammar III</h3>
                        <h5>The cataclysmic conclusion to the Total War: WARHAMMER trilogy is here. Rally your forces
                            and step into the Realm of Chaos, a dimension of mind-bending horror where the very fate
                            of the world will be decided. Will you conquer your Daemons… or command them</h5>
                        <img onClick={toggleGameDetails} src={WarHammer3} className='WarHammer3' />
                        <hr className='Line_Space'></hr>
                        <h3 onClick={toggleGameDetails} className='Similar_Game_Names'>Hearts of Iron IV</h3>
                        <h5>Victory is at your fingertips! Your ability to lead your nation is your supreme weapon,
                            the strategy game Hearts of Iron IV lets you take command of any nation in World War II;
                            the most engaging conflict in world history.</h5>
                        <img onClick={toggleGameDetails} src={HeartofIron4} className='HeartofIron4' />
                        <hr className='Line_Space'></hr>
                        <button className='More_Similar_Games' onClick={toggleDropdownGames}>
                            {isDropdownVisible2 ? 'View Less' : 'View More'}
                        </button>
                        {isDropdownVisible2 && (
                            <div className="dropdown-content2">
                                <h3 onClick={toggleGameDetails} className='Similar_Game_Names'>Total War Saga: TROY</h3>
                                <h5>Inspired by The Iliad and brought to life through the award-winning strategy game series,
                                    A Total War Saga: TROY brings a blend of grand, turn-based empire management and spectacular
                                    real-time battles to the heart of the Trojan War</h5>
                                <img onClick={toggleGameDetails} src={TroyGame} className='TroyGame' />
                                <hr className='Line_Space2'></hr>
                                <h3 onClick={toggleGameDetails} className='Similar_Game_Names2'>Age of Empires IV</h3>
                                <h5>Age of Empires IV is an immersive real-time strategy game set in the medieval age,
                                    featuring 8 diverse civilizations, three ways to win a match, challenge missions and
                                    stunning visuals and audio designs. Players can choose their difficulty level and explore
                                    documentary-driven campaigns or team up with friends for AI battles or online multiplayer matches.</h5>
                                <img onClick={toggleGameDetails} src={AOE4} className='AOE4' />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
export default GameDetails;