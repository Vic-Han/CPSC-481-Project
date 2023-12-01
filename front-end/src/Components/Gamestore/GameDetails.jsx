import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './GameDetails.css'
import TW3K1 from '../../assets/TotalWar3Kingdom.jpg';
import TW3K2 from '../../assets/TW3K2.jpg';
import TW3K3 from '../../assets/TW3K3.jpg';
import TW3K4 from '../../assets/TW3K4.jpg';
import TW3K5 from '../../assets/TW3K5.jpg';
import PC from '../../assets/PC.png';
import PS from '../../assets/PS.png';
import XBOX from '../../assets/Xbox.png';
import SWITCH from '../../assets/Switch.png';
import Redirect from '../../assets/Redirect.png';
import WarHammer3 from '../../assets/TWW3.jpg';
import HeartofIron4 from '../../assets/HOI4.jpg';
import TroyGame from '../../assets/Troy.bmp';
import AOE4 from '../../assets/AOE4.bmp';
import BackButtonStore from '../../assets/BackButton.png';

import { games } from '../../games';
import Games from '../../Elements/Games';

function GameDetails() {

  //Keep these only double == sign
  const { id } = useParams();
  const data = games.filter(function (game) {
    return game.id == id;
  })[0];

  const [shownGames, setShownGames] = useState(2);
  const [deletedGames, setDeletedGames] = useState([]);

  const similarGames = games.filter(function (game) {
    return game.id != id;
  });

  const slides = data.images.filter(function(image, i) {
    return i != 1;
  });

  const [slideIndex, setSlideIndex] = useState(0);
  const [fade, setFade] = useState(false);

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
    <div className='game_detail_page'>
      <div className='game_detail_left'>
        <h1 className='game_detail_title'>{data.title}</h1>
        <img className={`game_detail_slide_image ${fade ? 'fade' : ''}`} src={slides[slideIndex]} alt="Game_Slides" />
        <a className="detail_prev_button" onClick={previousSlide}>&#10094;</a>
        <a className="detail_next_button" onClick={nextSlide}>&#10095;</a>
        <div className="game_detail_dots">
          {slides.map((game, i) => (
            <span key={i} className={(i === slideIndex) ? "release_dot active_dot" : "release_dot"}></span>
          ))}
        </div>
        <div className='game_detail_bottom'>
          <ul className='game_detail_tags'>
            {data.genres.slice(0, 4).map((tag, i) => (
              <li key={i}>
                <button className='detail_tag'>{tag}</button>
              </li>
            ))}
            {(data.genres.length > 4) ? <li>+ {data.genres.length - 4} more</li> : <li></li>}
          </ul>
          <div className='game_detail_availability'>
            {data.availability.map((type, i) => {
              if (type === "PC") return <img key={i} src={PC}></img>
              else if (type === "PS") return <img key={i} src={PS}></img>
              else if (type === "Xbox") return <img key={i} src={XBOX}></img>
              else if (type === "Switch") return <img key={i} src={SWITCH}></img>
            })}
          </div>
        </div>
        <p className='game_detail_description'>{data.description}</p>
        <button className='detail_review_button' onClick={toggleDropdown}>
          {isDropdownVisible ? 'Close Reviews' : 'See Reviews'}
        </button>
        {isDropdownVisible && (
          <div>
            <p className='detail_review'><strong style={{ fontSize: '24px', color: '#7E82DF' }}>Epic in Scale and Detail!!</strong><span style={{ color: "#7E82DF" }}><br />Chad Faxmachine | Rating: 9.5/10<br /></span>
              I'm blown away by the depth of strategy and rich historical detail in Total War: Three Kingdoms.
              The art of war truly comes to life in this game. The diplomacy system is a game-changer, and
              managing my empire feels incredibly immersive. A solid 9.5/10 for me!
            </p>
            <p className='detail_review'><strong style={{ fontSize: '24px', color: '#7E82DF' }}>Visually Stunning, but Demanding on Hardware!</strong><span style={{ color: "#7E82DF" }}><br />Zaraki Kenpachi | Rating: 9.8/10<br /></span>
              The visuals in Three Kingdoms are nothing short of breathtaking, with some of the most impressive battle scenes
              I've ever experienced in a strategy game. However, be prepared for a demanding game in terms of system requirements.
              My older setup struggled a bit. Solid 8/10, but make sure your PC is up to it. </p>
            <p className='detail_review'><strong style={{ fontSize: '24px', color: '#7E82DF' }}>A Fresh Take on the Total War Series!</strong><span style={{ color: "#7E82DF" }}><br />Obito Uchiha | Rating: 9.0/10<br /></span>
              Total War: Three Kingdoms brings a fresh perspective to the series with its focus on Chinese history and lore.
              The character-driven gameplay adds a new layer of depth and intrigue. Some traditionalists might miss the old
              formula, but I absolutely love this new direction. It's a strong 9/10 from me.
            </p>
            <p className='detail_review'><strong style={{ fontSize: '24px', color: '#7E82DF' }}>A Strategist's Dream Come True!</strong><span style={{ color: "#7E82DF" }}><br />Alexa Tactician | Rating: 9.7/10<br /></span>
              From the intricate political machinations to the grandiose battlefields, Total War: Three Kingdoms captures
              the essence of ancient Chinese warfare with finesse. The strategic depth is unparalleled, offering a cerebral
              challenge that rewards cunning and adaptability. Every decision feels weighty, and the satisfaction of a well-executed plan
              is sheer bliss. A magnificent 9.7/10 from a strategy aficionado!
            </p>
            <p className='detail_review'><strong style={{ fontSize: '24px', color: '#7E82DF' }}>A Symphony of War!</strong><span style={{ color: "#7E82DF" }}><br />Boris Warlord | Rating: 9.0/10<br /></span>
              The game is a tour de force in the strategy genre, harmonizing the brutality of war with the poetry of Chinese history.
              The campaign map is a vibrant and dynamic playground for conquest, and the real-time battles are a visual spectacle.
              It's a symphony where every instrument of war plays its part to perfection. Truly,
              a compelling and captivating experience - 9/10! </p>
            <p className='detail_review'><strong style={{ fontSize: '24px', color: '#7E82DF' }}>The Emperor's New Game!</strong><span style={{ color: "#7E82DF" }}><br />Claire Dynasty | Rating: 9.2/10<br /></span>
              Total War: Three Kingdoms is a crowning achievement in historical strategy games. As I delve into the rich tapestry
              of the Three Kingdoms era, I'm not just playing a game; I'm living through history. The characters are as deep as
              the strategy, with alliances and betrayals that would make even Lu Bu take notice.  For its enthralling narrative and strategic complexity, I give it a regal 9.2/10.
            </p>
            <p className='detail_review'><strong style={{ fontSize: '24px', color: '#7E82DF' }}>A Feast for the Mind and Eyes!</strong><span style={{ color: "#7E82DF" }}><br />Derek Sage | Rating: 9.3/10<br /></span>
              This game is an absolute feast for the mind and eyes! The strategic layer is complex without being inscrutable,
              and the battles are a visual delight. I'm particularly impressed with the AI, which provides a worthy opponent.
              The cultural authenticity adds to the immersion, making me feel like a true Son of Heaven. A resounding 9.3/10 for this masterpiece.
            </p>
            <p className='detail_review'><strong style={{ fontSize: '24px', color: '#7E82DF' }}>A Tapestry of Tactical Triumph!</strong><span style={{ color: "#7E82DF" }}><br />Morgan Sun Tzu | Rating: 9.4/10<br /></span>
              In the grand landscape of strategy games, Total War: Three Kingdoms stands out as a masterful tapestry of tactical triumph.
              The game's depth is not just in its military maneuvers but also in its portrayal of the rich, complex relationships and
              rivalries of the era. The balance between cultural authenticity and gameplay innovation is struck with the precision of a
              Guan Yu strike. It's a testament to the genre and a beacon for future titles.  For its brilliance in design and execution, it earns a stalwart 9.4/10 from me!
            </p>
          </div>
        )}
      </div>
      <div className='game_detail_right'>
        <div className='game_detail_info'>
          <h2>Rating: <p>{(data.rating * 10).toFixed(1)}/10</p></h2>
          {((data.price - data.salePrice) > 0) ?
            <h2>Price: <p className='strikethrough'>${data.price}</p> <p>${data.salePrice}</p></h2> :
            <h2>Price: <p>${data.price}</p></h2>}
          <div className='game_detail_buttons'>
            {data.buyOn.map((store, i) => (
              <button key={i} className='txt_btn'>Buy on {store}</button>
            ))}
          </div>
          <div className='line'></div>
          <h3>Franchise: <p>{data.franchise}</p></h3>
          <h3>Developer: {data.developer.map((dev, i) => {
            if (i == data.developer.length - 1) return <p key={i}>{dev}</p>;
            else return <p key={i}>{dev}, </p>;
          })}</h3>
          <h3>Publisher: {data.publisher.map((pub, i) => {
            if (i == data.publisher.length - 1) return <p key={i}>{pub}</p>;
            else return <p key={i}>{pub}, </p>;
          })}</h3>
          <h3>Release Date: <p>{data.release}</p></h3>
        </div>
        <div className="detail_similar_games">
          <p className="home_element_titles">Similar Games</p>
          <div className="line"></div>
          {similarGames.slice(0, shownGames).map(game => {
            if (!deletedGames.includes(game.id))
              return <Games key={game.id} data={game} deletedGames={deletedGames} setDeletedGames={setDeletedGames} />;
            return null;
          })}
          {(shownGames >= similarGames.length) ?
            <p className="load_end">Reached the End</p> :
            <a href="#/" className="load_more" onClick={() => setShownGames(shownGames + 3)}>Load More</a>}
        </div>
      </div>
    </div>
  );
}
export default GameDetails;