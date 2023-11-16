import './DMOverLay.css';
import { React, useState } from "react"
function Messages(props) {
    const toggleNewDM = props.newDM
    const closePopup = props.closePopup
    const messagePeople = [{
        username: "Zaraki",
    },
    {
        username: "Chad",
    }]
    const requestPeople = [{
        username: "Sally",
    },
    {
        username: "Barbie",
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
                    <div>{person.username}</div>
                ))}

                not sure yet 
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

        <div>
            <UserList users={userListData} />
        </div>

        <button onClick={toggleDM}> See DM with Zaraki</button>

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
          <img src={user.profilePic} alt="Profile" />
          <div>
            <p>Username: {user.username}</p>
            <p>Display Name: {user.displayName}</p>
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
    //place holder 
      profilePic: '../assets/Zarakipfp.png',  
      username: 'Zaraki Kenpachi',
      displayName: 'ZarakiTheGoat',
    },
    {
      profilePic: '../assets/Person1.png',
      username: 'user2',
      displayName: 'User Two',
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