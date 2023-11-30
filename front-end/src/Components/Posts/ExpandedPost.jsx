import './ExpandedPost.css';
import { React, useState } from "react"
import postimage1 from '../assets/postimage1.png';
import SallyWilliams from '../assets/SallyWilliams.png';
import ChadFaxmachine from '../assets/ChadFaxmachine.png';
import Optic from '../assets/OGaming.bmp';

function ExpandedPost(props) {
  const back = props.back

  const [DropdownVisibleYes, setYesDropdownVisible] = useState(false);

  const toggleDropdownPost = () => {
    setYesDropdownVisible(!DropdownVisibleYes);
  }
  return (
    <div className='expanded-post'>
      <div className='post-overlay'>
        <div className='post-title-overlay'>
          <h1>Carlos steps down as CEO of G2 E-Sports</h1>
          <button className='options-button' />
        </div>
        <div className="post-info-overlay">
          <h1 className="User_Time">ahritina | Oct 24, 2023</h1>
          <div className="post-tags">
            <div className="tag1">
              <h2 className='tag-name'>League of Legends</h2>
            </div>
            <div className="tag1">
              <h2 className='tag-name'>G2 ESports</h2>
            </div>
            <div className="tag1">
              <h2 className='tag-name'>Counter-Strike</h2>
            </div>
          </div>
        </div>
        {/* Not sure why the line below isnt working */}
        <hr className='post-line-space'></hr>
        <p className='post-text'>
          Carlos "Ocelote" Rodriguez, the OG of G2 Esports, is stepping down as CEO. 🎮👋 He's been a legend in the scene, going from a pro player to running the show at G2, making them kings in games like League of Legends and CS:GO. 🏆 We don't know all the deets behind his departure yet, but it's bound to be a game-changer for G2. Fans are buzzing about who'll take the reins next. Ocelote's impact on ESports is massive, and the community is showing major love. 🥺🙌 In a nutshell, it's the end of an era, but G2's future is still a mystery waiting to be solved. 🕵️‍♂️🎮<br></br><br></br>
          It's also likely that after G2 failed with their Valorant bid, this was effectively the last "step" that pushed him to stand down.
          <br></br> <br></br>
          Carlos has also released a video, <a href="https://twitter.com/carlosr/status/1573426535104532480" style={{ color: '#0070E0' }}>https://twitter.com/carlosr/status/1573426535104532480</a>
        </p>
        {/* Not sure why the line below isnt working */}
        <hr className='post-line-space'></hr>
        <div className='comment-overlay'>
          <div className='like-and-comment'>
            <button className='like-button' />
            <div className='comment-button'>
              <h1 className='add-a-comment' >Add a Comment</h1>
            </div>
          </div>
          <div className='comment-section'>
            <div className='comment1'>
              <div className='poster-overlay'>
                <img src={SallyWilliams} className='pfp' />
                <h1 className='username'>Sally Williams</h1>
                <button className='comment-options-button' />
              </div>
              <p className='comment-text'>Carlos was the GOAT, I wonder if the new CEO will make any significant changes to the org</p>
              <div className='comment-reaction'>
                <h1 className='reply-button'>Reply</h1>
                <button className='comment-like-button' />
              </div>
            </div>
            <div className='comment2'>
              <div className='poster-overlay'>
                <img src={ChadFaxmachine} className='pfp' />
                <h1 className='username'>Chad Faxmachine</h1>
                <button className='comment-options-button' />
              </div>
              <p className='comment-text'>Maybe after this G2 will finally start winning some events, this was a needed change</p>
              <div className='comment-reaction'>
                <h1 className='reply-button'>Reply</h1>
                <button className='comment-like-button' />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='suggestion-overlay'>
        <h1 className='related-posts'>Related Posts</h1>
        <hr className='post-sug-line-space'></hr>
        <div className='sug-post'>
          <h1 className='sug-post-title'><u>Sentinels Gonna Win Next Valorant Esports!!!!</u></h1>
          <p className='sug-post-text'>Sentinels is on my mind, and I'm feeling stoked for the next Valorant Esports showdown. Seriously, it's a no-brainer...</p>
          <img src={postimage1} className='sug-post-image'></img>
          <div className='sug-tags'>
            <div className='tag2'>
              <h2 className='tag-name2'>Sentinels</h2>
            </div>
            <div className='tag2'>
              <h2 className='tag-name2'>Valorant</h2>
            </div>
            <div className='tag2'>
              <h2 className='tag-name2'>E-Sports Event</h2>
            </div>
          </div>
        </div>
        <hr className='post-sug-line-space'></hr>
        <div className='sug-post'>
          <h1 className='sug-post-title'><u>Opinions on upcoming League of Legends ESports Teams?</u></h1>
          <p className='sug-post-text'>Upcoming League of Legends ESports teams compared to the previous existing ones, in my opinion are very different. Their meta...</p>
          <div className='sug-tags'>
            <div className='tag3'>
              <h2 className='tag-name3'>Sentinels</h2>
            </div>
            <div className='tag3'>
              <h2 className='tag-name3'>Valorant</h2>
            </div>
          </div>
        </div>
        {/* Not sure why the line below isnt working */}
        <hr className='line-space'></hr>
        <button className="More_Post" onClick={toggleDropdownPost}>
          {DropdownVisibleYes ? 'View Less' : 'View More'}
        </button>
        {DropdownVisibleYes && (
          <div className="dropdown-post">
            <div className='sug-post'>
              <h1 className='sug-post-title'><u>Will OpTic Gaming make a comeback??</u></h1>
              <p className='sug-post-text'>OpTic Gaming are a close second to Gambit in terms of their place in Valorant history since 2020. </p>
              <img src={Optic} className='sug-post-image'></img>
              <div className='sug-tags'>
                <div className='tag2'>
                  <h2 className='tag-name2'>Sentinels</h2>
                </div>
                <div className='tag2'>
                  <h2 className='tag-name2'>Valorant</h2>
                </div>
                <div className='tag2'>
                  <h2 className='tag-name2'>E-Sports Event</h2>
                </div>
              </div>
            </div>
            <hr className='post-sug-line-space'></hr>
            <div className='sug-post'>
              <h1 className='sug-post-title'><u>Current state of Valorant Esports</u></h1>
              <p className='sug-post-text'>The current state of Valorent Esports seems to be pretty good considering the fund...</p>
              <div className='sug-tags'>
                <div className='tag3'>
                  <h2 className='tag-name3'>E-Sports</h2>
                </div>
                <div className='tag3'>
                  <h2 className='tag-name3'>Valorant</h2>
                </div>
              </div>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}

export default ExpandedPost;
