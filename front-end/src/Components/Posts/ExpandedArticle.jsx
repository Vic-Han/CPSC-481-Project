import './ExpandedArticle.css';
import {React, useState} from "react"
function ExpandedArticle(props) {
  const back = props.back
  return (
    <div>
      Expanded Article!!!
      <button onClick ={back}> Go back to homepage</button>
    </div>
  );
}

export default ExpandedArticle;