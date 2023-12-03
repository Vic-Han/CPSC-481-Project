import './ExpandedArticle.css';
import { React, useEffect, useState } from "react"
import { articles } from '../../articles';
import { useParams, useNavigate } from 'react-router-dom';
import PostMini from '../../Elements/PostMini';
import { users } from '../../users';

function ExpandedArticle() {

  const { id } = useParams();
  const data = articles.filter(function (art) {
    return art.id == id;
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

  function findUser(username) {
    return users.filter(function (user) {
      return user.username === username;
    })[0];
  }

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
              tempImg = <img alt='Post Image' key={i} className='expanded_article_image' src={data.images[j].URL} />;
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
    return <p className='expanded_article_description'>{htmlCode}</p>;
  }

  const [shownArticles, setShownArticles] = useState(2);
  const relatedArticles = articles.filter(function (art) {
    return art.id != id;
  })

  useEffect(() => {
    if (data.id === -1) navigate('/home');
  }, [])

  return (
    <div className='expanded_article_screen'>
      <div className='expanded_article'>
        <div className='expanded_article_title'>
          <h1>{data.title}</h1>
          <button className='three_dots'></button>
        </div>
        <div className='expanded_article_author'>
          <h1>{`${findUser(data.author).firstName} ${findUser(data.author).lastName}`}<p> | {data.date}</p></h1>
          <ul className='expanded_article_tags'>
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
        {/* {data.description.split('\n').map((str, i) => <p key={i} className='expanded_article_description'>{str}</p>)}
        {data.images.length > 0 ? data.images.map((url, i) => (
          <img key={i} className='expanded_article_image' src={url}></img>)) : null} */}
      </div>
      <div className='related_articles'>
        <p className="home_element_titles">Related articles</p>
        <div className='line'></div>
        {relatedArticles.slice(0, shownArticles).map(article => (
          <PostMini key={article.id} data={article} type={"article"} />
        ))}
        {(shownArticles >= relatedArticles.length) ?
          <p className="load_end">Reached the End</p> :
          <a href="#/" className="load_more" onClick={() => setShownArticles(shownArticles + 2)}>Load More</a>}
      </div>
    </div>
  );
}

export default ExpandedArticle;