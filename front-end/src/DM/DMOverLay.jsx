import './DMOverLay.css';
import { React, useState } from "react"
import Kenpachipfp from '../assets/Zarakipfp.png'
import user1 from '../assets/Person1.png'
import user2 from '../assets/Person2.png'
import user3 from '../assets/Person3.png'
import user4 from '../assets/Person4.png'
import user5 from '../assets/Person5.png'
import user6 from '../assets/Person6.png'
import user7 from '../assets/Person7.png'
import user8 from '../assets/Person8.png'


import basicpfp from '../assets/basicpfp.png'


function Messages(props) {
    const toggleNewDM = props.newDM
    const closePopup = props.closePopup
    const messagePeople = [{
        profilePic: user4,
        username: "Kenneth Longbottom",
        chat: 'Yea, that was hype'
    },
    {
        profilePic: user5,
        username: "Chad Faxmachine",
        chat: 'You seen that Barbie movie yet?'
    }]
    const requestPeople = [{
        profilePic: user6,
        username: "Sally Williams",
        chat: 'Hello, my name is Sally Williams...'
    },
    {
        profilePic: user7,
        username: "Tyler “Ninja” Blevins",
        chat: 'Hey, I saw your clip, would you lik...'
    }]
    const [users, setUsers] = useState(messagePeople)
    const setMessages = () => {
        setUsers(messagePeople)
    }
    const setRequests = () => {
        setUsers(requestPeople)
    }
    return (
        <>
            <header className='msg_header'>
                <button id='newDm_btn' onClick={toggleNewDM}></button>
                <p id='inbox_style'>Inbox</p>
                <button id = 'close_btn' onClick={closePopup}></button>
            </header>

            <div className='msg_type'>
                <input id = 'txt_field' type="text" placeholder="Search"></input>
                <button className='msg_btn' onClick={setMessages}> Messages</button>
                <button className='msg_btn' onClick={setRequests}> Requests</button>
            </div>


            <div className = 'users_idf' >
                {users.map((person, index) => (                    
                        <div key={index} className="user_profile">
                            <img className='user_pfp' src={person.profilePic} alt="Profile" />
                            <div>
                                <p id='usr_name'>{person.username}</p>
                                <p id='dp_name'> {person.chat}</p>                            
                            </div>

                        </div>
                    ))}

            </div>
        </>
    )
}
function NewMessage(props) {
    const toggleDefault = props.back
    const toggleDM = props.displayDM
    return (<div>

        <header className='msg_header'>
            <h1 id='newMsgheader'>New Message</h1>
            <button id='back_btn' onClick={toggleDefault}> </button>
        </header>

        <div className='msg_type'>
            <input id = 'txt_field' type="text" placeholder="Search"></input>
        </div>

        <div onClick={toggleDM}>
            <UserList users={userListData} />
        </div>

    </div>)
}
function Messaging(props) {
    const back = props.back
    return (
        <div>
            <header>
                <button id='back_btn' onClick={back}></button>   
            </header>
            
            <div> DM with Zaraki</div>

        </div>
    )
}

function UserList({ users }) {
    const renderUserList = () => {
      return users.map((user, index) => (
        <div key={index} className="user_profile">
          <img className='user_pfp' src={user.profilePic} alt="Profile" />
          <div>
            <p id='usr_name'>{user.username}</p>
            <p id='dp_name'>{user.displayName}</p>
          </div>
        </div>
      ));
    };
  
    return (
      <div className="user-list">
        {renderUserList()}
      </div>
    );
  }
  
  const userListData = [
    {
      profilePic: Kenpachipfp,  
      username: 'Zaraki Kenpachi',
      displayName: 'ZarakiTheGoat',
    },
    {
      profilePic: basicpfp,
      username: 'Zara Ursa',
      displayName: 'zara_ursa455',
    },
    {
        profilePic: user1,
        username: 'Zarz Gamez',
        displayName: 'zarzxgamez_',
      },
      {
        profilePic: user3,
        username: 'Zaraki Ken',
        displayName: 'zaraki1232Kenpashi',
      },   
       {
        profilePic: user8,
        username: 'Zarz Park',
        displayName: 'zarzxparky',
      },

  ];
  


function DMOverLay(props) {
    const [display, setDisplay] = useState(<Messages newDM={showNewMessage} />)
    function showMessages() {
        setDisplay(<Messages newDM={showNewMessage} />)
    }
    function showNewMessage() {
        setDisplay(<NewMessage displayDM={showMessaging} back={showMessages} />)
    }
    function showMessaging() {
        setDisplay(<Messaging back={showNewMessage} />)
    }

    return (
        <div className='dm_overlay'>
            {display}
        </div>
    );
}

export default DMOverLay;