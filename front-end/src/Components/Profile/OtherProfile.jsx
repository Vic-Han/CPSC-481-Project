import {React, useState, useEffect} from "react"
import './OtherProfile.css'
function OtherProfile(props){
    const [following,setFollowing] = useState(false)
    const togglefollow = () =>{
        const a = !following
        setFollowing(a);
    }
    return(
        <div>
            Sally Williams 
            <button onClick={togglefollow}>{following ? "unfollow" :"follow"}</button>
        </div>
    )
}
export default OtherProfile