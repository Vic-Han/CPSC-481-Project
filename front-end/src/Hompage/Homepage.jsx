import ExpandArticle from '../Posts/ExpandedArticle';
import ExpandedPost from '../Posts/ExpandedPost';
import './Homepage.css';
import {React, useState} from "react"
function HomePageController(){
  const [screen,setScreen] = useState(<Homepage/>)
  return(
    {screen}
  )
}
function Homepage() {
  return (
    <div>
      HomePage =)
    </div>
  );
}

export default Homepage;