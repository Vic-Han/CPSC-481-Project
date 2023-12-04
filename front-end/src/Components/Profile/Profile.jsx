import { React, useState, useEffect, useCallback } from "react"
import { useNavigate, useParams, Link } from "react-router-dom"
import './Profile.css'
import FollowingOverLay from "./FollowingOverLay"
import { users } from "../../users"
import { posts } from "../../posts"
import Post from "../../Elements/Post"
import Tooltip from "../Tooltip"

function Profile() {
  //-----------------------------User Decide Function-----------------------------
  const { id } = useParams();
  const navigate = useNavigate();
  let currentUser = false;

  let data = users.filter(function (user) {
    return user.id == id;
  })[0];

  let loggedUser = users.filter(function (user) {
    return user.username === JSON.parse(localStorage.getItem("loggedUser"));
  })[0];

  if (!loggedUser) loggedUser = {
    id: -1,
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    profileURL: 'ProfileDefault.png',
    loggedIn: false,
    followers: [],
    following: [],
    bio: ""
  };

  useEffect(() => {
    if (loggedUser.id === -1) navigate('/');
  }, [])

  if (data === undefined) data = loggedUser;
  if (data.id === loggedUser.id) currentUser = true;
  else currentUser = false;

  //-----------------------------Logout User Functions-----------------------------
  const logoutUser = () => {
    localStorage.setItem("loggedUser", JSON.stringify(''));
    navigate('/');
  };

  //------------------------------User Posts/Comments Functions------------------------------
  const [shownComments, setShownComments] = useState(3);

  const userPosts = posts.filter(function (post) {
    return data.username === post.author;
  }).reverse();

  function findUserComments() {
    let temp = [];
    for (let i = 0; i < posts.length; i++) {
      for (let j = 0; j < posts[i].comments.length; j++) {
        if (posts[i].comments[j].username === data.username) {
          let temp1 = {
            "post": posts[i],
            "comment": posts[i].comments[j].comment
          }
          temp.push(temp1);
        }
      }
    }
    return temp;
  }

  const userComments = findUserComments();

  //-------------------------Follower/Following Functions-------------------------
  const [follow, setFollow] = useState("");
  const [overlay, setOverlay] = useState(null);
  const [userFollows, setUserFollows] = useState(loggedUser.following.includes(data.username));

  useEffect(() => {
    if (follow === "Following") setOverlay(<FollowingOverLay data={data.following} type={follow} setFollow={setFollow} />)
    else if (follow === "Followers") setOverlay(<FollowingOverLay data={data.followers} type={follow} setFollow={setFollow} />)
    else setOverlay(null)
  }, [follow, data.followers, data.following]);

  const followingClick = useCallback(() => {
    setFollow("Following");
  });

  const followerClick = useCallback(() => {
    setFollow("Followers");
  });

  const addFollowing = () => {
    loggedUser.following.push(data.username);
    data.followers.push(loggedUser.username);
    setUserFollows(loggedUser.following.includes(data.username));
  }

  const removeFollowing = () => {
    loggedUser.following = loggedUser.following.filter(user => {
      return user !== data.username;
    });
    data.followers = data.followers.filter(user => {
      return user !== loggedUser.username;
    });
    setUserFollows(loggedUser.following.includes(data.username));
  }

  return (
    <>
      {overlay}
      <div className="profile_page">
        <div className="profile_container">
          <div className="profile_info">
            <img alt="Profile Pic" className={(data.profileURL === "ProfileDefault.png") ? "profile_default_img" : "profile_img"} src={require(`../../assets/${data.profileURL}`)}></img>
            <div className="profile_details">
              <div className="profile_name">{data.firstName} {data.lastName}</div>
              <div className="profile_username">{data.username}</div>
              <p className="profile_bio">{data.bio}</p>
              <div className="profile_follow_section">
                {currentUser ? null :
                  <>{userFollows ?
                    <button onClick={removeFollowing} className="profile_txt_btn txt_btn">Unfollow</button> :
                    <button onClick={addFollowing} className="profile_txt_btn txt_btn">Follow</button>}</>}
                <div className="profile_followers">
                  <button onClick={followerClick} className="profile_follow_txt_button">Followers</button>
                  <p className="profile_follow_number">{data.followers.length}</p>
                </div>
                <div className="profile_following">
                  <button onClick={followingClick} className="profile_follow_txt_button">Following</button>
                  <p className="profile_follow_number">{data.following.length}</p>
                </div>
                {currentUser ? null : <Tooltip text="Under Development"><button className="profile_txt_btn txt_btn">Direct Message</button></Tooltip>}
              </div>
            </div>
          </div>
          <div className="profile_actions">
            {currentUser ? <div className="profile_top_actions">
              <button onClick={logoutUser} className="profile_logout_button">Logout</button>
              <Tooltip text="Under Development"><button className="profile_settings_button img_btn"></button></Tooltip>
            </div> : null}
            <div className="profile_bottom_actions">
              {currentUser ? null : <Tooltip text="Under Development"><button className="profile_report_button img_btn"></button></Tooltip>}
              {currentUser ? null : <Tooltip text="Under Development"><button className="profile_block_button img_btn"></button></Tooltip>}
              <Tooltip text="Under Development"><button className="profile_share_button img_btn"></button></Tooltip>
            </div>
          </div>
        </div>
        <div className="after_profile">
          <div className="profile_extra">
            <div className="profile_comments">
              <h1>Comments Posted</h1>
              <div className="line"></div>
              {userComments.slice(0, shownComments).map((comment, i) => (
                <>
                  <div key={i} className="profile_user_comment">
                    <h1>Commented on <Link to={`/post/${comment.post.id}`}>{comment.post.title}</Link></h1>
                    <p>{comment.comment}</p>
                  </div>
                  <div className="line"></div>
                </>
              ))}
              {(shownComments >= userComments.length) ?
                <>{userComments.length > 0 ? <p className="load_end">Reached the End</p> : <p className="load_end">{`No Comments :(`}</p>}</> :
                <a href="#/" className="load_more" onClick={() => setShownComments(shownComments + 3)}>Load More</a>}
            </div>
          </div>
          <div className="profile_posts_section">
            <div className="profile_posts_title">Posts ({userPosts.length})</div>
            <div className="profile_posts">
              {userPosts.length > 0 ? null :
                <>{currentUser ?
                  <p className="profile_post_warning">{`You haven't created any posts :(. Click the 'New Post' button top right to start creating a post`}</p> :
                  <p className="profile_post_warning">{`This user hasn't made any posts`}</p>}</>}
              {userPosts.map(post => (
                <Post key={post.id} data={post} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}




export default Profile