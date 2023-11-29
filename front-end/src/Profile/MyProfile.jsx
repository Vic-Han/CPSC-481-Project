import {React, useState, useEffect} from "react"
import './MyProfile.css'
import FollowerOverLay from "./FollowerOverLay"
import FollowingOverLay from "./FollowingOverLay"
import user from "../assets/Person9.png"

function MyProfile(props){
    const [follower, setFollower] = useState(false)
    const [following, setFollowing] = useState(false)
    const showFollower = () =>{  setFollower(true)  }
    const showFollowing = () =>{  setFollowing(true)  }
    const hideFollower = () =>{ setFollower(false) }
    const hideFollowing = () =>{ setFollowing(false)}

    const post1 = {
      Title: 'Why is ESports Dying :(',
      Date: 'November 28, 2023',
      Tag: 'E-Sports Event',
      Tag2: 'asdasd',
      Discrition: 'Just the Title, why is ESports Dying?!?!?!? I Enjoy ESports and I don’t want it to die off, it’s like the only thing keeping me interested in the gaming industry and if it dies off I won’t be able to cheer for my favorite team. I don’t watch sports because I am not too interested in sports, but I am interested in gaming, why must ESports be dying.'
    }
    const post2 = {
      Title: 'Upcoming Valorant ESports Event Locations?',
      Date: 'October 26, 2023',
      Tag: ['Valorant', 'asdsa'],
      Discrition: 'Just the Title, why is ESports Dying?!?!?!? I Enjoy ESports and I don’t want it to die off, it’s like the only thing keeping me interested in the gaming industry and if it dies off I won’t be able to cheer for my favorite team. I don’t watch sports because I am not too interested in sports, but I am interested in gaming, why must ESports be dying.'
    }


    {/* function to create posts */}
    const createPost = (post) => (
      <>
        <div className='preview_post'>
          <div className='preview_post_title'>
            <p>{post.Title}</p>
            <button></button>
          </div>
          <div className='preview_post_author'>
            <div className='preview_post_author_left'>
              <p className='author_name'>Ken Barbie</p>
              <p className='author_date'> {post.Date}</p>
            </div>
            <ul className='preview_tags'>
              <button>{post.Tag}</button>
            </ul>
          </div>
          <div className='line'></div>
          <p className="preview_text"> {post.Discrition}</p>
        </div>
      </>
    );
    
    const PostComponent = ({ post }) => {
      return (
        <div className="myProfile_post">
          {createPost(post)}
        </div>
      );
    }

    return(
<>
  <div className="profile_container">
    <div className="profile_info">
      <img id="myProfile_pfp" src={user} alt="profile pic" />
      <div className="profile_details">
        <div id="myProfile_dp">Ken Barbie</div>
        <div id="myProfile_username">Ken4Lyfe</div>
        <p id="myProfile_bio">I am a professional ESports Enjoyer. It's awesome.</p>
        <div className="myPofile_follow">
          <button onClick={showFollower}>Followers</button>
          <button onClick={showFollowing}>Following</button>
          {follower ? <FollowerOverLay close={hideFollower} viewSelf={true} /> : null}
          {following ? <FollowingOverLay close={hideFollowing} viewSelf={true} /> : null}
        </div>
      </div>
    </div>
    <div className="profile_actions">
      <div className="top_actions">
        <button id="myProfile_logout">Logout</button>   
        <button id="setting_button"></button>        
      </div>
      <div className="bottom_action">
        <button id="share_button"></button>
      </div>
    </div>
  </div>
    



  <div className="myProfile_post">
  <PostComponent post={post1} />
  <PostComponent post={post2} />

  </div>

</>
  )
}




export default MyProfile