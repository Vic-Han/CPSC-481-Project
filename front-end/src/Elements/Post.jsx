import { Link } from 'react-router-dom';
import Tooltip from "../Components/Tooltip"
import './Post.css';
import { users } from '../users';

function Post(props) {
  const data = props.data;

  const loggedUser = users.filter(function (user) {
    return user.username == JSON.parse(localStorage.getItem("loggedUser"));
  })[0];

  function findUserId(username) {
    const user = users.filter(function (user) {
      return user.username === username;
    })[0];
    return user.id;
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
      if (!inside) charCount += 1;
      if ((charCount > limit) && !inside) {
        tempText += '...';
        break;
      }
      if (string.charAt(i) === "`" || inside) {
        if (string.charAt(i) === "`") inside = !inside;
        if (string.charAt(i) === "`" && !inside) {
          for (let j = 0; j < data.images.length; j++) {
            if (data.images[j].name === tempFileName) {
              htmlCode.push(tempText);
              tempText = "";
              tempImg = <img alt='Post img' key={i} className='post_short_image' src={data.images[j].URL} />;
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
    return <p className='post_short_description'>{htmlCode}</p>;
  }

  const likePost = (e) => {
    if (e.target.classList.contains('filled')) e.target.classList.remove('filled');
    else e.target.classList.add('filled');
  }

  return (
    <div className='post_background'>
      <div className='post_short_title_section'>
        <Link to={`/post/${data.id}`}>
          <h1 className='post_short_title'>{data.title}</h1>
        </Link>
        <Tooltip text="Under Development">
          <button className='three_dots'></button>
        </Tooltip>
      </div>
      <div className='post_short_author_section'>
        <Link to={`/account/${findUserId(data.author)}`} className='post_short_author'>{data.author}<p> | {data.date}</p></Link>
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
      {data.description.split('\n').map((str, i) => (
        <Description limit={650} string={str} />
      ))}

      {/* {data.description.slice(0, 650).split('\n').map((str, i) => {
        if ((i == (data.description.slice(0, 650).split('\n').length - 1)) && data.description.length > 650)
          return <p key={i} className='post_short_description'>{str}...</p>
        else return <p key={i} className='post_short_description'>{str}</p>
      })}
      {data.images.length > 0 ? data.images.map((url, i) => (
        <img key={i} className='post_short_image' src={url}></img>)) : null} */}
      <div className='post_short_bottom'>
        {(loggedUser.username === data.author) ? null : <button className='post_short_like' onClick={likePost}></button>}
      </div>
    </div>
  )
}

export default Post;