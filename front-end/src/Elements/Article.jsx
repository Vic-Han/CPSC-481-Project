import { Link } from 'react-router-dom';
import './Article.css';

function Article(props) {
  const data = props.data;

  return (
    <>
      <Link>
        <h1 className='article_short_title'>{data.title.substring(0, 30)}...</h1>
      </Link>
      <h1 className='article_short_description'>{data.description.substring(0, 100)}...</h1>
      {data.images.length > 0 ? <img className='article_short_image' src={data.images[0]}></img>: null}
      <ul className='article_tags'>
        {data.tags.slice(0, 2).map((tag, i) => (
          <li key={i}>
            <button className='tag'>{tag}</button>
          </li>
        ))}
        {(data.tags.length > 2) ? <li>+ {data.tags.length - 2} more</li> : <li></li>}
      </ul>
      <div className='line'></div>
    </>
  )
}

export default Article;