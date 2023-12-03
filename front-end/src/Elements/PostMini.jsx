import { Link } from 'react-router-dom';
import './Article.css';

function PostMini(props) {
  const data = props.data;

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
              tempImg = <img alt='Post img' key={i} className='article_short_image' src={data.images[j].URL} />;
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
    return <p className='article_short_description'>{htmlCode}</p>;
  }

  return (
    <>
      <Link to={`/${props.type}/${data.id}`}>
        <h1 className='article_short_title'>{data.title.substring(0, 36)}...</h1>
      </Link>
      {data.description.split('\n').map((str, i) => (
        <Description key={i} limit={135} string={str} />
      ))}
      {/* <h1 className='article_short_description'>{data.description.substring(0, 135)}...</h1>
      {data.images.length > 0 ? <img className='article_short_image' src={data.images[0]}></img>: null} */}
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