import { Link } from 'react-router-dom';
import './Post.css';

function Post(props) {
  const data = props.data;

  return (
    <div className='post_background'>
      <Link>
        <h1 className='post_short_title'>{data.title}</h1>
      </Link>
      <h1 className='article_short_description'>{data.description.substring(0, 100)}...</h1>
      <img className='article_short_image' src={data.images[0]}></img>
      <ul className='article_tags'>
        {data.tags.slice(0, 2).map((tag, i) => (
          <li key={i}>
            <button className='tag'>{tag}</button>
          </li>
        ))}
        {(data.tags.length > 2) ? <li>+ {data.tags.length - 2} more</li> : <li></li>}
      </ul>
      <div className='line'></div>
    </div>
  )
}

export default Post;