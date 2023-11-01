import './LoggedOutHomepage.css';
import {React, useState} from "react"
function LoggedOutHomepage() {

  return (
    <div className='background'>
        <div className = "circle" id = "circle1"></div>
        <div className = "circle" id = "circle2"></div>
        <div className = "circle" id = "circle3"></div>
        <div className = "circle" id = "circle4"></div>
        <div className = "circle" id = "circle5"></div>
        <div className = "circle" id = "circle6"></div>
        <img src ="" alt = "image" className='circle' id ="image1"/> 
        <img src ="" alt = "image" className='circle' id ="image2"/>
        <img src ="" alt = "image" className='circle' id ="image3"/> 
        <div className='text_container'>
            <div>Welcome to the <strong>Ultimate</strong> Gaming Experience</div>
            <div>Get ready to explore the realms of epic battles, live ESports showdowns, 
                in-depth gaming insights, and a vibrant gaming community.</div>
        </div>
    </div>
  );
}

export default LoggedOutHomepage;
