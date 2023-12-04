//Import React Framework Libraries
import { React, useEffect, useState } from "react"
import { useSearchParams, Link } from 'react-router-dom'

//Import Data
import { users } from '../../users'
import { games } from '../../games'
import { posts } from '../../posts'
import { articles } from '../../articles'

//Import css
import './SearchResults.css'

function SearchResults() {
  //---------------------------------Search Bar/Query---------------------------------
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query');

  //-----------------------------Data Gathering Functions-----------------------------
  //Function to get the user object via username
  function findUser(username) {
    return users.filter(function (user) {
      return user.username === username;
    })[0];
  }

  //function to gather all data including users, games, posts & articles
  function getAllData() {
    const temp = [];
    for (let i = 0; i < users.length; i++) {
      const temp1 = {
        "img": users[i].profileURL,
        "desc": users[i].bio,
        "title": `${users[i].firstName} ${users[i].lastName}`,
        "acc_name": users[i].username,
        "type": ["All", "User"],
        "meta": "R",
        "link": `/account/${users[i].id}`
      }
      temp.push(temp1);
    }
    for (let i = 0; i < games.length; i++) {
      const temp1 = {
        "img": games[i].images[1],
        "desc": games[i].description,
        "title": games[i].title,
        "acc_name": games[i].developer[0],
        "type": ["All", "Game"],
        "meta": "",
        "link": `/store/${games[i].id}`
      }
      temp.push(temp1);
    }
    for (let i = 0; i < posts.length; i++) {
      const temp1 = {
        "img": findUser(posts[i].author).profileURL,
        "desc": posts[i].description,
        "title": posts[i].title,
        "acc_name": posts[i].author,
        "type": ["All", "Post"],
        "meta": "R",
        "link": `/post/${posts[i].id}`
      }
      temp.push(temp1);
    }
    for (let i = 0; i < articles.length; i++) {
      const temp1 = {
        "img": findUser(articles[i].author).profileURL,
        "desc": articles[i].description,
        "title": articles[i].title,
        "acc_name": articles[i].author,
        "type": ["All", "Article"],
        "meta": "R",
        "link": `/article/${posts[i].id}`
      }
      temp.push(temp1);
    }
    return temp;
  }
  const allData = getAllData();

  //-----------------------------Searching / Filtering Data-----------------------------
  const [searchType, setSearchType] = useState("All");
  const [toggledButton, setToggledButton] = useState(0);
  const [results, setResults] = useState(allData.filter(
    data => (data.title.toLowerCase().includes(
      query.toLowerCase())) && (data.type.includes(searchType))).length);

  //Everytime search query or sort is changed calculate the number of results
  useEffect(() => {
    setResults(allData.filter(data => (data.title.toLowerCase().includes(query.toLowerCase())) && (data.type.includes(searchType))).length);
  }, [query, searchType, allData]);

  //Functions to change the sorting options
  const searchAll = () => {
    setSearchType("All")
    setToggledButton(0)
  }
  const searchUser = () => {
    setSearchType("User")
    setToggledButton(1)
  }
  const searchGame = () => {
    setSearchType("Game")
    setToggledButton(2)
  }
  const searchPost = () => {
    setSearchType("Post")
    setToggledButton(3)
  }
  const searchArticle = () => {
    setSearchType("Article")
    setToggledButton(4)
  }

  //-----------------------------Main Elements-----------------------------
  return (
    <div className='search_page_container'>
      <div className='search_page_sort_section'>
        <h1 className='search_page_sort_title'>Sort Result: </h1>
        <button onClick={searchAll} className={`sort_button ${toggledButton === 0 ? "toggled" : ""} `}> All</button>
        <button onClick={searchUser} className={`sort_button ${toggledButton === 1 ? "toggled" : ""} `}>Users</button>
        <button onClick={searchGame} className={`sort_button ${toggledButton === 2 ? "toggled" : ""} `}> Games</button>
        <button onClick={searchPost} className={`sort_button ${toggledButton === 3 ? "toggled" : ""} `}> Posts</button>
        <button onClick={searchArticle} className={`sort_button ${toggledButton === 4 ? "toggled" : ""} `}> Articles</button>
        <h1 className='search_page_sort_results'>Results: {results}</h1>
      </div>
      {allData.filter(data => (data.title.toLowerCase().includes(query.toLowerCase())) && (data.type.includes(searchType))).map((result, index) => {
        return (<div key={index} className='search_result'>
          {(result.meta.includes("R")) ?
            <>{(result.img === "ProfileDefault.png") ?
              <img alt='Profile' className='search_result_default_img' src={require(`../../assets/${result.img}`)}></img> :
              <img alt='Profile' className='search_result_img' src={require(`../../assets/${result.img}`)}></img>}
            </> : <img alt='Profile' className='search_result_img' src={result.img}></img>}
          <div className='search_result_text'>
            <Link to={result.link}>
              <div className='search_result_title'>{result.title.slice(0, 45)}{(result.title.length > 45) ? '...' : ''}</div>
            </Link>
            <div className='search_result_author'>{result.acc_name}</div>
            <div className='search_result_description'>{result.desc.slice(0, 150)}{(result.desc.length > 150) ? '...' : ''}</div>
          </div>
          <div className='search_type'> {result.type[1]}</div>
        </div>)
      })}
    </div>
  );
}

export default SearchResults;