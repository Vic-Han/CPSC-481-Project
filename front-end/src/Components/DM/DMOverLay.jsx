import './DMOverLay.css';
import { React, useState } from "react"
import Kenpachipfp from '../../assets/Zarakipfp.png'
import user1 from '../../assets/Person1.png'
import user2 from '../../assets/Person2.png'
import user3 from '../../assets/Person3.png'
import user4 from '../../assets/Person4.png'
import user5 from '../../assets/Person5.png'
import user6 from '../../assets/Person6.png'
import user7 from '../../assets/Person7.png'
import user8 from '../../assets/Person8.png'
import basicpfp from '../../assets/basicpfp.png'

//function for displaying Inbox items 
function Messages(props) {
  const toggleNewDM = props.newDM
  const closePopup = props.close
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
  const [selected, setSelected] = useState(0)
  const setMessages = () => {
    setSelected(0)
    setUsers(messagePeople)
  }
  const setRequests = () => {
    setSelected(1)
    setUsers(requestPeople)
  }
  return (
    <>
      <header className='msg_header'>
        <button id='newDm_btn' onClick={toggleNewDM}></button>
        <p id='inbox_style'>Inbox</p>
        <button id='close_btn' onClick={closePopup}></button>
      </header>

      <div className='msg_type'>
        <input id='txt_field' type="text" placeholder="Search"></input>
        <button className={'msg_btn' + (selected === 0 ? ' selected' : '')} onClick={setMessages}> Messages</button>
        <button className={'msg_btn' + (selected === 1 ? ' selected' : '')} onClick={setRequests}> Requests</button>
      </div>


      <div className='users_idf' >
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

//fucntion for displaying pfp newMessages 
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

//function for displaying NewMessage items 
function NewMessage(props) {
  const toggleDefault = props.back
  const toggleDM = props.displayDM
  return (<div>

    <header className='msg_header'>
      <button id='back_btn' onClick={toggleDefault}> </button>
      <h1 id='newMsgheader'>New Message</h1>

    </header>

    <div className='msg_type'>
      <input id='txt_field' type="text" placeholder="Search"></input>
    </div>

    <div onClick={toggleDM}>
      <UserList users={userListData} />
    </div>

  </div>)
}
function Messaging(props) {
  const back = props.back
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim() !== '') {
      setMessages([...messages, { text: newMessage, sender: 'user' }]);
      setNewMessage('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div>
      <header id='msg_header2'>
        <img id='kenpfp' src={Kenpachipfp} alt="Profile" />
        <p id='inbox_style'>Zaraki Kenpachi</p>
        <button id='back_btn' onClick={back}></button>
      </header>

      <div className="chat-container">
        <div className="chat-messages">
          {messages.map((message, index) => (
            <div key={index} className={message.sender === 'user' ? 'user-message' : 'other-message'}>
              {message.text}
            </div>
          ))}
        </div>
        <div className="chat-input">
          <input
            type="text"
            placeholder="Type your message..."
            value={newMessage}
            onKeyPress={handleKeyPress}
            onChange={(e) => setNewMessage(e.target.value)}
          />
          <button id='send_msg' onClick={handleSendMessage}></button>
        </div>
      </div>
    </div>
  )
}



function DMOverLay(props) {
  const close = props.close
  const [display, setDisplay] = useState(<Messages newDM={showNewMessage} close={close} />)

  function showMessages() {
    setDisplay(<Messages newDM={showNewMessage} close={close} />)
  }
  function showNewMessage() {
    setDisplay(<NewMessage displayDM={showMessaging} back={showMessages} />)
  }
  function showMessaging() {
    setDisplay(<Messaging back={showMessages} />)
  }

  return (
    <div className='dm_overlay'>
      {display}
    </div>
  );
}

export default DMOverLay;