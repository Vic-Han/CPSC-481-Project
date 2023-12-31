import { React, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { articles } from "../../articles";
import { posts } from "../../posts";
import { users } from "../../users";
import { games } from "../../games";

import Article from "../../Elements/Article";
import Post from "../../Elements/Post";
import Person from "../../Elements/Person";
import Games from "../../Elements/Games";

import './Homepage.css';

function Homepage() {
  const [shownArticles, setShownArticles] = useState(3);

  //---------------------------------Posts Functions---------------------------------
  const sortByReleaseDate = (gameA, gameB) => {
    const releaseDateA = new Date(gameA.date);
    const releaseDateB = new Date(gameB.date);
    return releaseDateB - releaseDateA;
  };

  let loggedUser = users.filter(function (user) {
    return user.username == JSON.parse(localStorage.getItem("loggedUser"));
  })[0];

  if (!loggedUser) loggedUser={"username": null};
  const navigate = useNavigate();

  useEffect(() => {
    if (loggedUser.username === null) navigate('/');
  }, [])

  const postsToShow = posts.filter(function(post) {
    return post.author !== loggedUser.username;
  }).sort(sortByReleaseDate);

  //---------------------------Recommended Users Functions---------------------------
  const [shownUsers, setShownUsers] = useState(3);
  const [deletedUsers, setDeletedUsers] = useState([]);

  const recommendedUsers = users.filter(function (user) {
    return user.username !== loggedUser.username;
  });

  //---------------------------Recommended Games Functions---------------------------
  const [shownGames, setShownGames] = useState(3);
  const [deletedGames, setDeletedGames] = useState([]);

  const sortByRating = (gameA, gameB) => {
    const ratingA = gameA.rating;
    const ratingB = gameB.rating;
    return ratingB - ratingA;
  };

  const recommendedGames = games.sort(sortByRating);

  return (
    <>
      <div className='home_main'>
        <div className='home_articles'>
          <p className="home_element_titles">Latest ESports News</p>
          <div className='line'></div>
          {articles.slice(0, shownArticles).map(art => (
            <Article key={art.id} data={art} />
          ))}
          {(shownArticles >= articles.length) ?
              <p className="load_end">Reached the End</p> :
              <a href="#/" className="load_more" onClick={() => setShownArticles(shownArticles + 3)}>Load More</a>}
        </div>
        <div className='home_posts'>
          {postsToShow.map(post => (
            <Post key={post.id} data={post} />
          ))}
        </div>
        <div className='home_extra'>
          <div className="home_people">
            <p className="home_element_titles">People you may know</p>
            <div className="line"></div>
            {recommendedUsers.slice(0, shownUsers).map(user => {
              if (!deletedUsers.includes(user.id))
                return <Person key={user.id} data={user} deletedUsers={deletedUsers} setDeletedUsers={setDeletedUsers} />
              return null
            })}
            {(shownUsers >= recommendedUsers.length) ?
              <p className="load_end">Reached the End</p> :
              <a href="#/" className="load_more" onClick={() => setShownUsers(shownUsers + 3)}>Load More</a>}
          </div>
          <div className="home_games">
            <p className="home_element_titles">Recommended Games</p>
            <div className="line"></div>
            {recommendedGames.slice(0, shownGames).map(game => {
              if (!deletedGames.includes(game.id))
                return <Games key={game.id} data={game} deletedGames={deletedGames} setDeletedGames={setDeletedGames} />;
              return null;
            })}
            {(shownGames >= recommendedGames.length) ?
              <p className="load_end">Reached the End</p> :
              <a href="#/" className="load_more" onClick={() => setShownGames(shownGames + 3)}>Load More</a>}
          </div>
        </div>
      </div>
    </>
  );
}

export default Homepage;