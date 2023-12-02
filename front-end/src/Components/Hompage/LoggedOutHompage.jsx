import './LoggedOutHomepage.css';
import './Circles.css';
import { React, useEffect, useState } from "react";
import example1 from '../../assets/example1.png';
import example2 from '../../assets/example2.png';

function LoggedOutHomepage(props) {
  const registerEvent = props.registerEvent2;

  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.scrollY);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  const [DropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdownQA = () => {
    setDropdownVisible(!DropdownVisible);
  };

  return (
    <div className='main_content'>
      <div>
        <div className="circle" id="circle1" style={{ transform: `translateY(${offsetY * 0.20}px)` }}></div>
        <div className="circle" id="circle2" style={{ transform: `translateY(${offsetY * 0.17}px)` }}></div>
        <div className="circle" id="circle3" style={{ transform: `translateY(${offsetY * 0.23}px)` }}></div>
        <div className="circle" id="circle4" style={{ transform: `translateY(${offsetY * 0.18}px)` }}></div>
        <div className="circle" id="circle5" style={{ transform: `translateY(${offsetY * 0.22}px)` }}></div>
        <div className="circle" id="circle6" style={{ transform: `translateY(${offsetY * 0.19}px)` }}></div>
        <div className="circle" id="circle7" style={{ transform: `translateY(${offsetY * -0.073}px)` }}></div>
        <div className="circle" id="circle8" style={{ transform: `translateY(${offsetY * -0.065}px)` }}></div>
        <div className="circle" id="circle9" style={{ transform: `translateY(${offsetY * -0.05}px)` }}></div>
        <div className="circle" id="circle10" style={{ transform: `translateY(${offsetY * -0.045}px)` }}></div>
        <div className="circle" id="circle11" style={{ transform: `translateY(${offsetY * -0.03}px)` }}></div>
        <div className="circle" id="circle12" style={{ transform: `translateY(${offsetY * -0.07}px)` }}></div>
        <div className="circle" id="circle13" style={{ transform: `translateY(${offsetY * -0.06}px)` }}></div>
        <div className="circle" id="circle14" style={{ transform: `translateY(${offsetY * -0.055}px)` }}></div>
        <div className="circle" id="circle15" style={{ transform: `translateY(${offsetY * -0.04}px)` }}></div>
        <div className="circle" id="circle16" style={{ transform: `translateY(${offsetY * -0.03}px)` }}></div>
        <div className='circle' id='image1' style={{ transform: `translateY(${offsetY * 0.1}px)` }}></div>
        <div className='circle' id='image2' style={{ transform: `translateY(${offsetY * 0.1}px)` }}></div>
        <div className='circle' id='image3' style={{ transform: `translateY(${offsetY * 0.1}px)` }}></div>
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
      <br></br>
      <br></br>
      <br></br>
      <div className='FAQ_container'>
        <div className='intro_title'>Frequently Asked Questions</div>
        <div className="FAQ_Question">
          <button className="QuestionButton" onClick={toggleDropdownQA}>
            {DropdownVisible ? 'Close' : 'View Questions'}
          </button>
          {DropdownVisible && (
            <div className="QuestionContainer">
              <h1 className='Question'>How do I sign up?</h1>
              <h3 className='Answer'>Signing up for an account on ESports Zone is a straightforward process. First, navigate to the top 
              of the website and click the 'Sign Up' button. You'll be prompted to enter your first and last name. Next, create a unique 
              and creative username. After this, input a valid email address. For your password, ensure it meets the security criteria: 
              at least 9 characters long, includes 1 uppercase character, and contains at least 1 non-alphabetic character. Confirm your 
              password by re-entering it. Once all these steps are completed, you can proceed to register your account on ESports Zone. </h3>

              <h1 className='Question'>How do I sign out?</h1>
              <h3 className='Answer'>To sign out of the platform, first ensure that you are signed in. Then, navigate to the top right corner of the page 
              and click on the profile icon. In the menu that appears, you will find a Logout button, highlighted in red. 
              Click on this button to successfully log out of your account. </h3>
              
              <h1 className='Question'>How do I create a post and post content?</h1>
              <h3 className='Answer'>To create a post, first ensure you are logged in. Once logged in, navigate to the top of the page and
                click the "New Post" button. When creating your post, it's important to include a clear title for easy identification by
                other users. Additionally, providing a detailed description will help others understand the content of your post better.
                You can also upload images using the upload button located at the bottom left of the page. Adding relevant tags to your
                post can improve its visibility and help users identify its theme or topic. Before posting, you have the option to save
                your post as a draft or use the "Preview & Post" feature to see how your post will appear to others. Once you're satisfied
                with your post, click "Post" to upload it to the platform. </h3>

              <h1 className='Question'>Can I purchase games on this website?</h1>
              <h3 className='Answer'>Unfortunately, driect game purchases are not available on our website. However, we provide links to the official game websites where you can make your purchase directly.</h3>

              <h1 className='Question'>How do I direct message someone on the platform?</h1>
              <h3 className='Answer'>To send a direct message (DM) on the platform, first ensure you are logged into your account. Then, locate the DM icon, which is positioned at the top right of the page, between 'Gamestore' and 'Profile'. 
              Click on the top left button within the DM area to initiate a new conversation. Use the search bar to find the user you wish to message. Once you have located the user, type your message in the text box provided and send it. 
              This process allows you to easily communicate directly with other users on the platform.</h3>
            </div>

          )}

          <div className='Space'></div>
        </div>
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
