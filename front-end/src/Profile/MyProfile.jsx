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
    return(
      <>

      <div className="profile_container">
        <img id ="myProfile_pfp" src= {user} alt="profile pic" />
        <div id = "myProfile_dp" >Ken Barbie</div>      
        <div id = "myProfile_username" >Ken4Lyfe</div>
        <p id="myProfile_bio" >I am a professional ESports Enjoyer It’s awesome.</p>

        <div className="myPofile_follow">
          <button onClick={showFollower}> See followers list</button>
          <button onClick={showFollowing}> See following list</button>
          {follower ? <FollowerOverLay close ={hideFollower} viewSelf = {true}/>: null}
          {following ? <FollowingOverLay close ={hideFollowing} viewSelf = {true}/>: null}  
        </div>

        <button id="myProfile_logout">logout</button>
        <button id="setting_button" ></button>
        <button id="share_button" ></button>

      </div>

      </>
    )
}
export default MyProfile