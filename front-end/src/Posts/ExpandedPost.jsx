import './ExpandedPost.css';
import {React, useState} from "react"
function ExpandedPost(props) {
  const back = props.back
  return (
    <div className='expanded-post'>
      <div className='post-overlay'>
        <div className='title-overlay'>
          <h1 className = 'title-text'>Post title</h1>
          <img onClick={} src={} className='options-button' />
        <div className="info-overlay">
          <h1 classname='author-date-text'>Author | Mon dd, yyyy</h1>
          <div className="tags">
            <div className="tag1">
              <h1 className='tag-name'>League of Legends</h1>
            </div>
            <div className="tag2">
              <h1 className='tag-name'>G2 ESports</h1>
            </div>
            <div className="tag3">
              <h1 className='tag-name'>Counter-Strike</h1>
            </div>
            </div>
          </div>
        </div>
        <hr className='line-space'></hr>
        <p className = 'post-text'>Post text</p>
        <hr className='line-space'></hr>
        <div className='comment-overlay'>
          <div className='like-and-comment'>
            <img onClick={} src={} className='like-button' />
            <div className='comment-button'>
              <h1 className='add-a-comment' onClick={}>Add a Comment</h1>
            </div>
          </div>
          <div className='comment-section'>
            <div className='comment1'>
              <div className='poster-overlay'>
                <img src={} className='pfp'/>
                <h1 className='username'>Sally Williams</h1>
                <img onClick={} src={} className='options-button' />
              </div>
              <p className='comment-text'>Comment text</p>
              <div className='comment-reaction'>
                <h1 onClick={} className='reply-button'>Reply</h1>
                <img onClick={} src={} className='like-button' />
              </div>
            </div>
            <div className='comment2'>
              <div className='poster-overlay'>
                <img src={} className='pfp'/>
                <h1 className='username'>Chad Faxmachine</h1>
                <img onClick={} src={} className='options-button' />
              </div>
              <p className='comment-text'>Comment text</p>
              <div className='comment-reaction'>
                <h1 onClick={} className='reply-button'>Reply</h1>
                <img onClick={} src={} className='like-button' />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='suggestion-overlay'>
        <h1 className='related-posts'>Related Posts</h1>
        <hr className='sug-line-space'></hr>
        <div className='sug-post1'>
          <h1 OnClick={} className='sug-post-title'><u>Sentinels Gonna Win Next Valorant Esports!!!!</u></h1>
          <p className='sug-post-text'>Sentinels is on my mind, and I'm feeling stoked for the next Valorant Esports showdown. Seriously, it's a no-brainer...</p>
          <img src={} className='sug-post-image'></img>
          <div className='tags'>
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
        <hr className='sug-line-space'></hr>
        <div className='sug-post2'>
          <h1 OnClick={} className='sug-post-title'><u>Opinions on upcoming League of Legends ESports Teams?</u></h1>
          <p className='sug-post-text'>Upcoming League of Legends ESports teams compared to the previous existing ones, in my opion are very different. Their meta...</p>
          <div className='tags'>
            <div className='tag'>
              <h1 className='tag-name'>Sentinels</h1>
            </div>
            <div className='tag'>
              <h1 className='tag-name'>Valorant</h1>
            </div>
          </div>
        </div>
        <hr className='sug-line-space'></hr>
        <h1 OnClick={} className='load-more-btn'><u>Load More</u></h1>
      </div>
      <button onClick={back}>Go back to homepage</button>
    </div>
  );
}

export default ExpandedPost;
