import {React, useState, useEffect} from "react"
import './MyProfile.css'
import FollowerOverLay from "./FollowerOverLay"
import FollowingOverLay from "./FollowingOverLay"
function MyProfile(props){
    const [follower, setFollower] = useState(false)
    const [following, setFollowing] = useState(false)
    const showFollower = () =>{  setFollower(true)  }
    const showFollowing = () =>{  setFollowing(true)  }
    const hideFollower = () =>{ setFollower(false) }
    const hideFollowing = () =>{ setFollowing(false)}
    return(
      <>
      <div>My Profile</div>
      <button onClick={showFollower}> See followers list</button>
      <button onClick={showFollowing}> See following list</button>
      {follower ? <FollowerOverLay close ={hideFollower}/>: null}
      {following ? <FollowingOverLay close ={hideFollowing}/>: null}
      </>
    )
}
export default MyProfile