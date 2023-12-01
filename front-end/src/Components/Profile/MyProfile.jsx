import { React, useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import FollowerOverLay from "./FollowerOverLay"
import FollowingOverLay from "./FollowingOverLay"
import './MyProfile.css'

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


  return (
    <div className="account_page">
      <div className="account_info">
        <div className="account_top_buttons">
          <button className="account_logout_button">Logout</button>
          <button className="account_settings_button"></button>
        </div>
      </div>
      <button onClick={showFollower}> See followers list</button>
      <button onClick={showFollowing}> See following list</button>
      {follower ? <FollowerOverLay close={hideFollower} viewSelf={true} /> : null}
      {following ? <FollowingOverLay close={hideFollowing} viewSelf={true} /> : null}
    </div>
  )
}
export default MyProfile