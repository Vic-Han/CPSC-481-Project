import './DMOverLay.css';
import {React, useState} from "react"
function Messages(props){
    const toggleNewDM = props.newDM
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
    const setMessages = () =>{
        setUsers(messagePeople)
    }
    const setRequests = () =>{
        setUsers(requestPeople)
    }
    return(
        <div>
            <button onClick={setMessages}> Messages</button>
            <button onClick={setRequests}> Requests</button>
            <button onClick={toggleNewDM}> New DM</button>
            {users.map((person,index) =>(
                <div>{person.username}</div>
            ))}
        </div>
    )
}
function NewMessage(props){
    const toggleDefault = props.back
    const toggleDM = props.displayDM
    return(<div>
        List of people you can send a new dm to
        <h1>Another map function like I did above</h1>
        <button onClick={toggleDefault}> Go back to messages and requests</button>
        <button onClick={toggleDM}> See DM with Zaraki</button>
    </div>)
}
function Messaging(props){
    const back = props.back
    return(
        <div>
            <div> DM with Zaraki</div>
            <button onClick={back}> Go back</button>
        </div>
    )
}
function DMOverLay(props) {
    const closePopup = props.closeEvent
    const [display, setDisplay] = useState(<Messages newDM ={showNewMessage}/>)
    function showMessages(){
        setDisplay(<Messages newDM ={showNewMessage}/>)
    }
    function showNewMessage(){
        setDisplay(<NewMessage displayDM ={showMessaging} back={showMessages}/>)
    }
    function showMessaging(){
        setDisplay(<Messaging back = {showNewMessage}/>)
    }
    return (
        <div id='dm-overlay'>
            
            <button onClick={closePopup}>Close The whole thing</button>
            {display}
        </div>
  );
}

export default DMOverLay;