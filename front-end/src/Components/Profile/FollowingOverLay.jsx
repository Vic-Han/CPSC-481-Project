import { React, useState, useEffect, useCallback } from "react"
import './FollowingOverLay.css'
import { users } from "../../users";

function FollowingOverLay(props) {
  const data = props.data;
  const type = props.type;

  function findUsers() {
    let temp = []
    for (let i = 0; i < data.length; i++) {
      let temp1 = users.filter(function(user) {
        return user.username === data[i];
      })[0];
      temp.push(temp1);
    }
    return temp;
  }

  const handleClose = useCallback(() => {
    props.setFollow("");
  });

  const follow = findUsers();

  return (
    <>
      <div className="invis_background"></div>
      <div className='following_overlay_background'>
        <h1 className="following_overlay_title">{type}</h1>
        <button className="following_close img_btn" onClick={handleClose}></button>
        <div className="line"></div>
        <div className="following_people">
          {follow.map((person, i) => (
            <>
              <div key={i} className="following_person_section">
                <div className="following_person">
                <img className={(person.profileURL === "ProfileDefault.png") ?
                    "follow_person_default_img" : "follow_person_img"} src={require(`../../assets/${person.profileURL}`)}></img>
                  <div className="following_person_info">
                    <h1>{person.firstName} {person.lastName}</h1>
                    <h2>{person.username}</h2>
                  </div>
                </div>
                <button className="following_remove img_btn"></button>
              </div>
              <div className="line"></div>
            </>
          ))}
        </div>
      </div>
    </>
  )
}
export default FollowingOverLay