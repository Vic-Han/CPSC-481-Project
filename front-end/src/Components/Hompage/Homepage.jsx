import { React, useState } from "react";
import { articles } from "../../articles";
import { posts } from "../../posts";

import Article from "../../Article/Article";
import Post from "../../Posts/Post";

import './Homepage.css';

function Homepage(props) {
  const togglePost = props.togglePost
  const toggleArticle = props.toggleArticle
  const toggleOtherProfile = props.toggleOtherProfile

  return (
    <>
      <div className='home_main'>
        <div className='home_articles'>
          <p>Latest ESports News</p>
          <div className='line'></div>
          {articles.map((art, i) => (
            <Article key={i} data={art} />
          ))}
          <a className="article_load_more">Load More</a>
        </div>
        <div className='home_posts'>
          {posts.map((post, i) => (
            <Post key={i} data={post} />
          ))}
        </div>
        <div className='home_extra'>

        </div>
      </div>
      <button onClick={togglePost}> Show the full Post</button>
      <button onClick={toggleArticle}> Show the full article</button>
      <button onClick={toggleOtherProfile}> Show Sally William</button>
    </>
  );
}



export default Homepage;