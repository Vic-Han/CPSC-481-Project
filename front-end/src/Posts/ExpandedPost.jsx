import './ExpandedPost.css';
import {React, useState} from "react"
function ExpandedPost(props) {
  const back = props.back
  return (
    <div className='expanded-post'>
      <div className='post-overlay'>
        <div className='title-overlay'>
          <h1>Carlos steps down as CEO of G2 E-Sports</h1>
          <button onClick={} className='options-button' />
        <div className="info-overlay">
          <h1>ahritina | Oct 24, 2023</h1>
          <div className="tags">
            <div className="tag">
              <h1 className='tag-name'>League of Legends</h1>
            </div>
            <div className="tag">
              <h1 className='tag-name'>G2 ESports</h1>
            </div>
            <div className="tag">
              <h1 className='tag-name'>Counter-Strike</h1>
            </div>
            </div>
          </div>
        </div>
        <hr className='line-space'></hr>
        <p className = 'post-text'>Carlos "Ocelote" Rodriguez, the OG of G2 Esports, is stepping down as CEO. 🎮👋 He's been a legend in the scene, going from a pro player to running the show at G2, making them kings in games like League of Legends and CS:GO. 🏆 We don't know all the deets behind his departure yet, but it's bound to be a game-changer for G2. Fans are buzzing about who'll take the reins next. Ocelote's impact on ESports is massive, and the community is showing major love. 🥺🙌 In a nutshell, it's the end of an era, but G2's future is still a mystery waiting to be solved. 🕵️‍♂️🎮

It's also likely that after G2 failed with their Valorant bid, this was effectively the last "step" that pushed him to stand down.

Carlos has also released a video, https://twitter.com/carlosr/status/1573426535104532480</p>
        <hr className='line-space'></hr>
        <div className='comment-overlay'>
          <div className='like-and-comment'>
            <button onClick={} className='like-button' />
            <div className='comment-button'>
              <h1 className='add-a-comment' onClick={}>Add a Comment</h1>
            </div>
          </div>
          <div className='comment-section'>
            <div className='comment'>
              <div className='poster-overlay'>
                <img src={} className='pfp'/>
                <h1 className='username'>Sally Williams</h1>
                <button onClick={} className='options-button' />
              </div>
              <p className='comment-text'>Carlos was the GOAT, I wonder if the new CEO will make any significant changes to the org</p>
              <div className='comment-reaction'>
                <h1 onClick={} className='reply-button'>Reply</h1>
                <button onClick={} className='comment-like-button' />
              </div>
            </div>
            <div className='comment'>
              <div className='poster-overlay'>
                <img src={} className='pfp'/>
                <h1 className='username'>Chad Faxmachine</h1>
                <button onClick={} className='options-button' />
              </div>
              <p className='comment-text'>Maybe after this G2 will finally start winning some events, this was a needed change</p>
              <div className='comment-reaction'>
                <h1 onClick={} className='reply-button'>Reply</h1>
                <button onClick={} className='comment-like-button' />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='suggestion-overlay'>
        <h1 className='related-posts'>Related Posts</h1>
        <hr className='line-space'></hr>
        <div className='sug-post'>
          <h1 OnClick={} className='sug-post-title'><u>Sentinels Gonna Win Next Valorant Esports!!!!</u></h1>
          <p className='sug-post-text'>Sentinels is on my mind, and I'm feeling stoked for the next Valorant Esports showdown. Seriously, it's a no-brainer...</p>
          <img src={} className='sug-post-image'></img>
          <div className='sug-tags'>
            <div className='tag'>
              <h1 className='tag-name'>Sentinels</h1>
            </div>
            <div className='tag'>
              <h1 className='tag-name'>Valorant</h1>
            </div>
            <div className='tag'>
              <h1 className='tag-name'>E-Sports Event</h1>
            </div>
          </div>
        </div>
        <hr className='line-space'></hr>
        <div className='sug-post'>
          <h1 OnClick={} className='sug-post-title'><u>Opinions on upcoming League of Legends ESports Teams?</u></h1>
          <p className='sug-post-text'>Upcoming League of Legends ESports teams compared to the previous existing ones, in my opion are very different. Their meta...</p>
          <div className='sug-tags'>
            <div className='tag'>
              <h1 className='tag-name'>Sentinels</h1>
            </div>
            <div className='tag'>
              <h1 className='tag-name'>Valorant</h1>
            </div>
          </div>
        </div>
        <hr className='line-space'></hr>
        <h1 OnClick={} className='load-more-btn'><u>Load More</u></h1>
      </div>
      <button onClick={back}>Go back to homepage</button>
    </div>
  );
}

export default ExpandedPost;
