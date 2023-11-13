import ExpandArticle from '../Posts/ExpandedArticle';
import ExpandedPost from '../Posts/ExpandedPost';
import './Homepage.css';
import {React, useState} from "react"

function Homepage(props) {
  const togglePost = props.togglePost
  const toggleArticle = props.toggleArticle
  const toggleOtherProfile = props.toggleOtherProfile
  return (
    <div>
      <button onClick={togglePost}> Show the full Post</button>
      <button onClick={toggleArticle}> Show the full article</button>
      <button onClick = {toggleOtherProfile}> Show Sally William</button>
    </div>
  );
}



export default Homepage;