import './PostPreview.css'
import { users } from "../../users";
import { posts } from "../../posts";

function PostPreview(props) {
  const back = props.back;
  const data = props.data;

  const loggedUser = users.filter(function (user) {
    return user.username == JSON.parse(localStorage.getItem("loggedUser"));
  })[0];

  const d = new Date();
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  const handlePost = () => {
    if (data.Title === "" || data.Description === "") alert("Please Fill out all the fields");
    else {
      let temp = {
        "id": posts.length,
        "title": data.Title,
        "author": loggedUser.username,
        "date": `${months[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`,
        "tags": data.Tags,
        "description": data.Description,
        "images": [...data.Files],
        "comments": []
      }
      console.log(temp);
      posts.push(temp);
      props.resetData();
      props.hidePosts();
    }
  }

  const Description = () => {
    let inside = false;
    let htmlCode = [];
    let tempFileName = "";
    let tempText = "";
    let tempImg;

    for (let i = 0; i < data.Description.length; i++) {
      if (data.Description.charAt(i) === "`" || inside) {
        if (data.Description.charAt(i) === "`") inside = !inside;
        if (data.Description.charAt(i) === "`" && !inside) {
          for (let j = 0; j < data.Files.length; j++) {
            if (data.Files[j].name === tempFileName) {
              htmlCode.push(tempText);
              tempText = "";
              tempImg = <img alt="post_img" className="preview_img" key={i} src={data.Files[j].URL}/>;
              htmlCode.push(tempImg);
              tempFileName = "";
            }
          }
        } else if (data.Description.charAt(i) !== "`") {
          tempFileName += data.Description.charAt(i);
        }
      } else {
        tempText += data.Description.charAt(i);
      }
    }
    htmlCode.push(tempText);
    return <p className='preview_text'>{htmlCode}</p>;
  }

  return (
    <>
      <div id='invis_layer'></div>
      <div className='post_overlay'>
        <div className='preview_info'>
          <button className='back_btn btn' onClick={back}></button>
          <p>Preview</p>
        </div>
        <div className='preview_post'>
          <div className='preview_post_title'>
            <p>{data.Title}</p>
            <button></button>
          </div>
          <div className='preview_post_author'>
            <div className='preview_post_author_left'>
              <p className='author_name'>{loggedUser.username}</p>
              <p className='author_date'>{` | ${months[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`}</p>
            </div>
            <ul className='preview_tags'>
              {data.Tags.slice(0,3).map((tag, i) => (
                <li key={i}>
                  <button>{tag}</button>
                </li>
              ))}
              {(data.Tags.length > 3) ? <li>+ {data.Tags.length - 3} more</li> : <li></li>}
            </ul>
          </div>
          <div className='line'></div>
          <Description/>
        </div>
        <div className='preview_post_btn'>
          <button className='txt_btn' onClick={handlePost}>Private Post</button>
          <button className='txt_btn' onClick={handlePost}>Public Post</button>
        </div>
      </div>
    </>
  );
}

export default PostPreview;
