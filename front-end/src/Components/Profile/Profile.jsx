import { React, useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import './MyProfile.css'
import FollowerOverLay from "./FollowerOverLay"
import FollowingOverLay from "./FollowingOverLay"
import user from "../../assets/Person9.png"
import { users } from "../../users"

function MyProfile(props) {
  const { id } = useParams();
  const data = users.filter(function (user) {
    return user.id == id;
  })[0];

  const [follower, setFollower] = useState(false)
  const [following, setFollowing] = useState(false)
  const showFollower = () => { setFollower(true) }
  const showFollowing = () => { setFollowing(true) }
  const hideFollower = () => { setFollower(false) }
  const hideFollowing = () => { setFollowing(false) }

  const post1 = {
    Title: 'Why is ESports Dying :(',
    Date: 'November 28, 2023',
    Tag: 'E-Sports Event',
    Tag2: 'asdasd',
    Discription: 'Just the Title, why is ESports Dying?!?!?!? I Enjoy ESports and I don’t want it to die off, it’s like the only thing keeping me interested in the gaming industry and if it dies off I won’t be able to cheer for my favorite team. I don’t watch sports because I am not too interested in sports, but I am interested in gaming, why must ESports be dying.'
  }
  const post2 = {
    Title: 'Upcoming Valorant ESports Event Locations?',
    Date: 'October 26, 2023',
    Tag: ['Valorant', 'asdsa'],
    Discription: 'Looking for the inside scoop on upcoming Valorant esports event locations? Dive into the action-packed world of Valorant and discover where the hottest competitions are set to take place! With Valorants esports scene heating up, fans and players are eager to know where the next big showdowns will be. Stay in the loop and find out the exciting cities and venues that will host the thrilling Valorant tournaments, creating an electric atmosphere for both players and viewers alike.'
  }
  const post3 = {
    Title: 'need to make more uniqe posts',
    Date: 'October 26, 2023',
    Tag: ['Valorant'],
    Discription: 'Just the Title, why is ESports Dying?!?!?!? I Enjoy ESports and I don’t want it to die off, it’s like the only thing keeping me interested in the gaming industry and if it dies off I won’t be able to cheer for my favorite team. I don’t watch sports because I am not too interested in sports, but I am interested in gaming, why must ESports be dying.'
  }

  const tagList = {
    tags: ['asdasd', 'asdasd', 'asdasda', 'asdasdassss']
  }

  return (
    <div className="profile_page">
      <div className="profile_container">
        <div className="profile_info">
          <img id="myProfile_pfp" src={user} alt="profile pic" />
          <div className="profile_details">
            <div id="myProfile_dp">Ken Barbie</div>
            <div id="myProfile_username">Ken4Lyfe</div>
            <p id="myProfile_bio">I am a professional ESports Enjoyer. It's awesome.</p>
            <div className="myPofile_follow">
              <button onClick={showFollower}>Followers <br />102</button>
              <button onClick={showFollowing}>Following<br />121</button>
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

      <div className="myProfile_tagList">
        <p >Recent Tag</p>
        <div>
          {/* <TagList tagList={tagList} /> */}
        </div>
      </div>

      <div id="myProfile_post_header">
        <p>Posts (14)</p>
      </div>

      {/* <div className="myProfile_post">
        <PostComponent post={post1} />
        <PostComponent post={post2} />
        <PostComponent post={post3} />
      </div> */}

    </div>
  )
}




export default MyProfile