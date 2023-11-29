import {React, useEffect, useState} from "react";

import example1 from '../../assets/example1.png';
import example2 from '../../assets/example2.png';

import './LoggedOutHomepage.css';
import './Circles.css';

function LoggedOutHomepage(props) {
  const registerEvent = props.registerEvent2;

  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.scrollY);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <div className='main_content'>
      <div>
        <div className="circle" id="circle1" style={{transform: `translateY(${offsetY * 0.20}px)`}}></div>
        <div className="circle" id="circle2" style={{transform: `translateY(${offsetY * 0.17}px)`}}></div>
        <div className="circle" id="circle3" style={{transform: `translateY(${offsetY * 0.23}px)`}}></div>
        <div className="circle" id="circle4" style={{transform: `translateY(${offsetY * 0.18}px)`}}></div>
        <div className="circle" id="circle5" style={{transform: `translateY(${offsetY * 0.22}px)`}}></div>
        <div className="circle" id="circle6" style={{transform: `translateY(${offsetY * 0.19}px)`}}></div>
        <div className="circle" id="circle7" style={{transform: `translateY(${offsetY * -0.073}px)`}}></div>
        <div className="circle" id="circle8" style={{transform: `translateY(${offsetY * -0.065}px)`}}></div>
        <div className="circle" id="circle9" style={{transform: `translateY(${offsetY * -0.05}px)`}}></div>
        <div className="circle" id="circle10" style={{transform: `translateY(${offsetY * -0.045}px)`}}></div>
        <div className="circle" id="circle11" style={{transform: `translateY(${offsetY * -0.03}px)`}}></div>
        <div className="circle" id="circle12" style={{transform: `translateY(${offsetY * -0.07}px)`}}></div>
        <div className="circle" id="circle13" style={{transform: `translateY(${offsetY * -0.06}px)`}}></div>
        <div className="circle" id="circle14" style={{transform: `translateY(${offsetY * -0.055}px)`}}></div>
        <div className="circle" id="circle15" style={{transform: `translateY(${offsetY * -0.04}px)`}}></div>
        <div className="circle" id="circle16" style={{transform: `translateY(${offsetY * -0.03}px)`}}></div>
        <div className='circle' id='image1' style={{transform: `translateY(${offsetY * 0.1}px)`}}></div>
        <div className='circle' id='image2' style={{transform: `translateY(${offsetY * 0.1}px)`}}></div>
        <div className='circle' id='image3' style={{transform: `translateY(${offsetY * 0.1}px)`}}></div>
      </div>
      <div className='text_container1'>
        <h1 className='intro_title'>Welcome to the <span className='highlighted'>Ultimate</span> Gaming Experience!</h1>
        <p className='intro_text'>Get ready to explore the realms of epic battles, live ESports showdowns, 
          in-depth gaming insights, and a vibrant gaming community.</p>
      </div>
      <div className='text_container2'>
        <h1 className='intro_title'>Don't want to miss all the <span className='highlighted'>ACTION</span>?</h1>
        <p className='intro_text'><a className='link' onClick={registerEvent}>Create an Account</a> and dive right in and explore the fun.</p>
      </div>
      <img className='example' id='example1' src={example1}></img>
      <img className='example' id='example2' src={example2}></img>
      <div className='text_container3' id='about'>
        <h1 className='intro_title'>Who are <span className='highlighted'>we</span>?</h1>
        <br></br>
        <p className='text'>We are a group of like-minded student who want to create a space for all things ESports and Gaming.</p>
        <br></br>
        <br></br>
        <p className='text2'>Our mission is to provide a vibrant online community and resource hub for gamers and Esports 
        aficionados. We aim to connect, inform, and inspire the gaming community through our platform.</p>
        <br></br>
        <br></br>
        <p className='text'>We hope to become the go-to platform for the Gaming and ESports Communitiy, fostering a sense of 
        belonging and excitement in this dynamic and rapidly growing industry.</p>
        <br></br>
        <br></br>
        <p className='text2'> Our website offers unique elements to the gaming and ESports community. We have latest ESports 
        news for those who like to keep up with all the latest events, we also have a game store where gamers can browse for games 
        and find the hottest deals going on.</p>
      </div>
      <div className="faq-section">

      </div>
      <div className='footer'>
        <div className='left_footer'>© 2023 ESports Zone Inc. All rights reserved.</div>
        <div className='right_footer'>
          <a href='#'>Feedback</a>
          <a href='#'>User Agreement</a>
          <a href='#'>Privacy Policy</a>
        </div>
      </div>
    </div>
  );
}

export default LoggedOutHomepage;
