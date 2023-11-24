import {React, useState, useEffect} from "react"
import './FollowingOverLay.css'
import example1 from '../assets/example1.png';
import example2 from '../assets/example2.png';
function FollowerOverLay(props){
  const person1 ={
    img:example1,
    userName: "username1",
    fullName: "fullname1"
  }
  const person2 = {
      img:example1,
      userName: "username2",
      fullName: "fullname2"
  }
  const person3 = {
      img:example1,
      userName: "username3",
      fullName: "fullname3"
  }
  const person4 = {
      img:example1,
      userName: "username4",
      fullName: "fullname4"
  }
  const person5 = {
      img:example1,
      userName: "username5",
      fullName: "fullname5"
  }
  const person6 = {
      img:example1,
      userName: "username6",
      fullName: "fullname6"
  }
  const close = props.close
  const viewSelf = props.viewSelf
  const defaultList = [person1,person2,person3,person4,person5]
  const [people, setPeople] = useState(defaultList)
  const removePerson = (fullName) =>{
    const removedList = people.filter(person => person.fullName !== fullName)
    const newList = [...removedList, person6];
    setPeople(newList)
  }
    return(
      <div className='popup_overlay'>
      <div className='popup_contents-following'>
          <h1 className = "following-overlay-title"> Followers </h1>
          <div onClick ={close} className='close-following-button'>x</div>
          {people.map((person, index) =>(
              <div className="following-person">
                  <img src = {person.img} className="following-person-img"></img>
                  <div className="username-fullname-container-following">
                      <div className="following-person-fullname">{person.fullName}</div>
                      <div className="following-person-username">{person.userName}</div>
                  </div>
                  {viewSelf ? <div className="remove-following" onClick={() => removePerson(person.fullName)}>Remove</div> : null}
              </div>
          ))}
         
      </div>
  </div>
    )
}
export default FollowerOverLay