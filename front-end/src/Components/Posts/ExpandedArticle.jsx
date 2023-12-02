import './ExpandedArticle.css';
import { React, useState } from "react"
import { articles } from '../../articles';
import { useParams } from 'react-router-dom';
import PostMini from '../../Elements/PostMini';

function ExpandedArticle() {

  const { id } = useParams();
  const data = articles.filter(function (art) {
    return art.id == id;
  })[0];

  const [shownArticles, setShownArticles] = useState(2);
  const relatedArticles = articles.filter(function (art) {
    return art.id != id;
  })

  return (
    <div className='expanded_article_screen'>
      <div className='expanded_article'>
        <div className='expanded_article_title'>
          <h1>{data.title}</h1>
          <button className='three_dots'></button>
        </div>
        <div className='expanded_article_author'>
          <h1>{data.author}<p> | {data.date}</p></h1>
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
        {data.description.split('\n').map((str, i) => <p key={i} className='expanded_article_description'>{str}</p>)}
        {data.images.length > 0 ? data.images.map((url, i) => (
          <img key={i} className='expanded_article_image' src={url}></img>)) : null}
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