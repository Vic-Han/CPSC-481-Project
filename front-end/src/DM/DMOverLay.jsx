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

                will change this function, probably...
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
          <img className='user_pfp' src={user.profilePic} alt="Profile" />
          <div>
            <p id='usr_name'>Username: {user.username}</p>
            <p id='Dp_name'>Display Name: {user.displayName}</p>
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
      profilePic: 'https://s3-alpha-sig.figma.com/img/dbe6/4d1c/ba64d72b3a554895fdd2547029d9946e?Expires=1701043200&Signature=Ey9nZaGvTd0AebDvufQUJJcjD7cJVAntfHep9yx7nF9fwUoa368TIkqtP601uSSW4FtOt3Pj8SsXyhCflRRckN4m4bUe5ukgu5o7UUHPThVNIlmXK444rvXW1sj28ET17xCtEa73QcBcl9TlBkQcvXmMQRRK-b~gIZ7SZyWd0yOhWwcDn8TZQGfeQ33rqAcq8yUUfctddbsUxlWEYvy~MqZHA9YP3ixmOb9X939bCOecg--kVcPxaXZcO~Hs0Vj1Vju1kVmQyy2cX5VE6S9lD~7FdOZixPVpkTnsYCBPJcYkB3Qvz1vPnUAXzrHeFwubElHGG9O2KdnBv6Q4FhGqMA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',  
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