import { React } from "react";
import { articles } from "../../articles";
import { posts } from "../../posts";
import { users } from "../../users";
import { games } from "../../games";

import Article from "../../Elements/Article";
import Post from "../../Elements/Post";
import Person from "../../Elements/Person";
import Games from "../../Elements/Games";

import './Homepage.css';

function Homepage(props) {
  const togglePost = props.togglePost
  const toggleArticle = props.toggleArticle
  const toggleOtherProfile = props.toggleOtherProfile

  const recommendedUsers = users.filter(function (user) {
    return user.username !== props.loggedUser;
  });

  return (
    <>
      <div className='home_main'>
        <div className='home_articles'>
          <p className="home_element_titles">Latest ESports News</p>
          <div className='line'></div>
          {articles.map(art => (
            <Article key={art.id} data={art} />
          ))}
          <a href="#/" className="load_more" onClick={null}>Load More</a>
        </div>
        <div className='home_posts'>
          {posts.map(post => (
            <Post key={post.id} data={post} />
          ))}
        </div>
        <div className='home_extra'>
          <div className="home_people">
            <p className="home_element_titles">People you may know</p>
            <div className="line"></div>
            {recommendedUsers.slice(0, 3).map(user => (
              <Person key={user.id} data={user} />
            ))}
            <a href="#/" className="load_more" onClick={null}>Load More</a>
          </div>
          <div className="home_games">
            <p className="home_element_titles">Recommended Games</p>
            <div className="line"></div>
            {games.slice(0, 3).map(game => (
              <Games key={game.id} data={game} />
            ))}
            <a href="#/" className="load_more" onClick={null}>Load More</a>
          </div>
        </div>
      </div>
      <button onClick={togglePost}> Show the full Post</button>
      <button onClick={toggleArticle}> Show the full article</button>
      <button onClick={toggleOtherProfile}> Show Sally William</button>
    </>
  );
}



export default Homepage;