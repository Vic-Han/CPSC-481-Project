import { Link } from 'react-router-dom';
import './Article.css';

function PostMini(props) {
  const data = props.data;

  return (
    <>
      <Link to={`/${props.type}/${data.id}`}>
        <h1 className='article_short_title'>{data.title.substring(0, 36)}...</h1>
      </Link>
      <h1 className='article_short_description'>{data.description.substring(0, 135)}...</h1>
      {data.images.length > 0 ? <img className='article_short_image' src={data.images[0]}></img>: null}
      <ul className='article_tags'>
        {data.tags.slice(0, 3).map((tag, i) => (
          <li key={i}>
            <button className='tag'>{tag}</button>
          </li>
        ))}
        {(data.tags.length > 3) ? <li>+ {data.tags.length - 3} more</li> : <li></li>}
      </ul>
      <div className='line'></div>
    </>
  )
}

export default PostMini;