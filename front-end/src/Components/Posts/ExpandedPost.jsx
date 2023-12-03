import { React, useEffect, useState } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import { posts } from '../../posts';
import { users } from '../../users';
import Tooltip from "../Tooltip";
import PostMini from "../../Elements/PostMini";

import './ExpandedPost.css';

function ExpandedPost(props) {
  const { id } = useParams();
  let data = posts.filter(function (post) {
    return post.id == id;
  })[0];

  const navigate = useNavigate();
  if (data === undefined) {
    data = {
      "id": -1,
      "title": "",
      "author": "",
      "date": "",
      "tags": ['', ''],
      "description": "",
      "images": [],
      "comments": []
    }
  }

  const [shownPosts, setShownPosts] = useState(2);
  const relatedPosts = posts.filter(function (post) {
    return post.id != id;
  })

  const Description = (props) => {
    const limit = props.limit;
    const string = props.string;

    let charCount = 0;
    let inside = false;
    let htmlCode = [];
    let tempFileName = "";
    let tempText = "";
    let tempImg;

    for (let i = 0; i < string.length; i++) {
      if (limit > 0) {
        if (!inside) charCount += 1;
        if ((charCount > limit) && !inside) {
          tempText += '...';
          break;
        }
      }
      if (string.charAt(i) === "`" || inside) {
        if (string.charAt(i) === "`") inside = !inside;
        if (string.charAt(i) === "`" && !inside) {
          for (let j = 0; j < data.images.length; j++) {
            if (data.images[j].name === tempFileName) {
              htmlCode.push(tempText);
              tempText = "";
              tempImg = <img alt='Post Image' key={i} className='expanded_post_image' src={data.images[j].URL} />;
              htmlCode.push(tempImg);
              tempFileName = "";
            }
          }
        } else if (string.charAt(i) !== "`") {
          tempFileName += string.charAt(i);
        }
      } else {
        tempText += string.charAt(i);
      }
    }
    htmlCode.push(tempText);
    return <p className='expanded_post_description'>{htmlCode}</p>;
  }

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

  useEffect(() => {
    if (data.id === -1) navigate('/home');
  })

  return (
    <div className='expanded_post_screen'>
      <div className='expanded_post'>
        <div className='expanded_post_title'>
          <h1>{data.title}</h1>
          <Tooltip text="Under Development"><button className='three_dots'></button></Tooltip>

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
        {data.description.split('\n').map((str, i) => (
          <Description key={i} limit={-1} string={str} />
        ))}
        {/* {data.description.split('\n').map((str, i) => <p key={i} className='expanded_post_description'>{str}</p>)}
        {data.images.length > 0 ? data.images.map((url, i) => (
          <img key={i} className='expanded_post_image' src={url}></img>)) : null} */}
        <div className='expanded_post_bottom'>
          <button className='expanded_post_like' onClick={likePost}></button>
        </div>
        <div className='line'></div>
        <div className='expanded_post_comment_top'>
          <p>Sort by: Latest</p>
          <Tooltip text="Under Development"><button className='txt_btn'>Add a Comment</button></Tooltip>
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
                <Tooltip text="Under Development"><button className='three_dots'></button></Tooltip>
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
          <PostMini key={post.id} data={post} type={"post"} />
        ))}
        {(shownPosts >= relatedPosts.length) ?
          <p className="load_end">Reached the End</p> :
          <a href="#/" className="load_more" onClick={() => setShownPosts(shownPosts + 2)}>Load More</a>}
      </div>
    </div>
  );
}

export default ExpandedPost;
