import './ExpandedPost.css';
import {React, useState} from "react"
function ExpandedPost(props) {
  const back = props.back
  return (
    <div>
      Expanded Post!!!
      <button onClick={back}>Go back to homepage</button>
    </div>
  );
}

export default ExpandedPost;
