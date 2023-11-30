import { Link } from 'react-router-dom';
import './Post.css';

function Post(props) {
  const data = props.data;

  const likePost = (e) => {
    if (e.target.classList.contains('filled')) e.target.classList.remove('filled');
    else e.target.classList.add('filled');
  }

  return (
    <div className='post_background'>
      <div className='post_short_title_section'>
        <Link>
          <h1 className='post_short_title'>{data.title}</h1>
        </Link>
        <button className='three_dots'></button>
      </div>
      <div className='post_short_author_section'>
        <Link className='post_short_author'>{data.author}</Link>
        <ul className='post_short_tags'>
          {data.tags.slice(0, 4).map((tag, i) => (
            <li key={i}>
              <button className='post_tag'>{tag}</button>
            </li>
          ))}
          {(data.tags.length > 4) ? <li>+ {data.tags.length - 4} more</li> : <li></li>}
        </ul>
      </div>
      <div className='line'></div>
      {data.description.split('\n').map((str, i) => <p key={i} className='post_short_description'>{str}</p>)}
      {data.images.length > 0 ? data.images.map((url, i) => (
      <img key={i} className='post_short_image' src={url}></img>)): null}
      <div className='post_short_bottom'>
        <button className='post_short_like' onClick={likePost}></button>
      </div>
    </div>
  )
}

export default Post;