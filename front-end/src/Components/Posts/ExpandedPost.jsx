import { React, useState } from "react"
import { useParams } from 'react-router-dom';
import { users } from '../../users';
import { posts } from '../../posts';

import PostMini from "../../Elements/PostMini";

import './ExpandedPost.css';

function ExpandedPost(props) {
  const { id } = useParams();
  const data = posts.filter(function (post) {
    return post.id == id;
  })[0];

  const [shownPosts, setShownPosts] = useState(2);
  const relatedPosts = posts.filter(function (post) {
    return post.id != id;
  })

  const likePost = (e) => {
    if (e.target.classList.contains('expanded_filled')) e.target.classList.remove('expanded_filled');
    else e.target.classList.add('expanded_filled');
  }

  function profilePic(username) {
    const user = users.filter(function (user) {
      return user.username == username;
    })[0];
    return user.profileURL;
  }
  
  return (
    <div className='expanded_post_screen'>
      <div className='expanded_post'>
        <div className='expanded_post_title'>
          <h1>{data.title}</h1>
          <button className='three_dots'></button>
        </div>
        <div className='expanded_post_author'>
          <h1>{data.author}<p> | {data.date}</p></h1>
          <ul className='expanded_post_tags'>
            {data.tags.slice(0, 5).map((tag, i) => (
              <li key={i}>
                <button className='expanded_tag'>{tag}</button>
              </li>
            ))}
            {(data.tags.length > 5) ? <li>+ {data.tags.length - 5} more</li> : <li></li>}
          </ul>
        </div>
        <div className='line'></div>
        {data.description.split('\n').map((str, i) => <p key={i} className='expanded_post_description'>{str}</p>)}
        {data.images.length > 0 ? data.images.map((url, i) => (
          <img key={i} className='expanded_post_image' src={url}></img>)) : null}
        <div className='expanded_post_bottom'>
          <button className='expanded_post_like' onClick={likePost}></button>
        </div>
        <div className='line'></div>
        <div className='expanded_post_comment_top'>
          <p>Sort by: Latest</p>
          <button className='txt_btn'>Add a Comment</button>
        </div>
        <div className='expanded_post_comments'>
          {(data.comments.length > 0) ? data.comments.map((comment, i) => (
            <div key={`div1${i}`} className='post_comment'>
              <div key={`div2${i}`} className='post_comment_author'>
                <div key={`div3${i}`} className='post_comment_profile'>
                  <img key={i} className={(profilePic(comment.username) === "ProfileDefault.png") ?
                    "comment_default_image" : "comment_person_image"} src={require(`../../assets/${profilePic(comment.username)}`)}></img>
                  <p key={`p${i}`} >{comment.firstName} {comment.lastName}</p>
                </div>
                <button className='three_dots'></button>
              </div>
              <p className='comment_description'>{comment.comment}</p>
              <div className='comment_bottom'>
                <p>Reply</p>
                <button className='expanded_post_like' onClick={likePost}></button>
              </div>
            </div>
          )) : null}
        </div>
      </div>
      <div className='related_posts'>
        <p className="home_element_titles">Related Posts</p>
        <div className='line'></div>
        {relatedPosts.slice(0, shownPosts).map(post => (
          <PostMini key={post.id} data={post} />
        ))}
        {(shownPosts >= relatedPosts.length) ?
          <p className="load_end">Reached the End</p> :
          <a href="#/" className="load_more" onClick={() => setShownPosts(shownPosts + 2)}>Load More</a>}
      </div>
    </div>
  );
}

export default ExpandedPost;
