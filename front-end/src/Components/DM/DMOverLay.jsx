import './DMOverLay.css';
import { React, useState } from "react"
import Kenpachipfp from '../../assets/Zaraki.png'
import user1 from '../../assets/Person1.png'
import user2 from '../../assets/Person2.png'
import user3 from '../../assets/Person3.png'
import user4 from '../../assets/Person4.png'
import user6 from '../../assets/Person7.png'
import user7 from '../../assets/Person7.png'
import user8 from '../../assets/Person8.png'
import basicpfp from '../../assets/Chad.png'


//function for displaying Inbox items 
function Messages(props) {
    const toggleNewDM = props.newDM
    const closePopup = props.close
    const messagePeople = props.msglist
    console.log(props.msglist)
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
    const [users, setUsers] = useState(props.msglist)
    const [selected, setSelected] = useState(0)
    const setMessages = () => {
        setSelected(0)
        setUsers(props.msglist)
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
                <button id = 'close_btn' onClick={closePopup}></button>
            </header>

            <div className='msg_type'>
                <input id = 'txt_field' type="text" placeholder="Search"></input>
                <button className= {'msg_btn' + (selected === 0 ? ' selected' : '')} onClick={setMessages}> Messages</button>
                <button className={'msg_btn' + (selected === 1 ? ' selected' : '')} onClick={setRequests}> Requests</button>
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
    const addMSG = props.newMessageEvent
    const clickEvent = ()=>{
        toggleDM()
        addMSG()
    }
    return (<div>

        <header className='msg_header'>
            <button id='back_btn' onClick={toggleDefault}> </button>
            <h1 id='newMsgheader'>New Message</h1>
            
        </header>

        <div className='msg_type'>
            <input id = 'txt_field' type="text" placeholder="Search"></input>
        </div>

        <div onClick={clickEvent}>
            <UserList users={userListData} />
        </div>

    </div>)
}
function Messaging(props) {
    const back = props.back
    
    
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');
    const handleSendMessage = async() => {
      if (newMessage.trim() !== '') {
        const newlist  = [...messages, { text: newMessage, sender: 'user' }]
        setMessages(newlist);
        setNewMessage('');
        setTimeout(() => {
            const newerlist = [...newlist, { text: "Thanks bro, we should do it again", sender: 'other' }]
            setMessages(newerlist);
          }, 3000);
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
            <button id='back_btn' onClick={back}></button>
                <p id='inbox_style'>Zaraki Kenpachi</p>   
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
                    onChange={(e) => setNewMessage(e.target.value )}
                    />
                    <button id = 'send_msg' onClick={handleSendMessage}></button>
                </div>
            </div>
        </div>
    )
}



function DMOverLay(props) {
    const close = props.close
    const messagePeople = [{
        profilePic: user4,
        username: "Kenneth Longbottom",
        chat: 'Yea, that was hype'
    },
    {
        profilePic: user4,
        username: "Chad Faxmachine",
        chat: 'You seen that Barbie movie yet?'
    }]
    
    //const [msgList, setmsgList] = useState(messagePeople)
    let msgList = messagePeople
    const [display, setDisplay] = useState(<Messages newDM={showNewMessage} close = {close} msglist = {msgList}/>)
    const addMSGList = async() =>{
        const newPerson = 
        {
            profilePic: Kenpachipfp,
            username: "Zaraki Kenpachi",
            chat: 'Thanks bro, we should do it again'
        }
        const newarr = [newPerson, ...msgList]
        msgList = newarr
        //setmsgList(newarr)
    }
    function showMessages(){
        setDisplay(<Messages newDM={showNewMessage} close = {close} msglist = {msgList}/>)
    }
    function showNewMessage() {
        setDisplay(<NewMessage displayDM={showMessaging} back={showMessages} newMessageEvent = {addMSGList}/>)
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