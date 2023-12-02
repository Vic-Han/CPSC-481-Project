import React, { useState } from "react";
import notifcations from "../../notifications";
import './NotificationOverLay.css'
function Notification(props){
    return(
        <div className="notification-wrapper">
            <img src ={props.pfp} className="notification_img"></img>
            <div className="notification-text">{props.message}</div>
            <div className="delete-notification-button" onClick={props.delete}> X </div>
        </div>
    )
}
function NotificationOverLay(props){
    const [not,setnot] = useState(notifcations)
    const deleteNotification = (index) =>{
        notifcations.splice(index, 1);
        const newnot = [...notifcations]
        //newnot.splice(index,1)
        setnot(newnot)
    }
    const close = props.back
    return(
        <div className="background-overlay">
            <div className="notification-overlay">
                <div className="notification-header">
                    <div className="notification-desc"> Notifications</div>
                    <div className="notification-close" onClick={close}> Close</div>
                </div>
                {not.length > 0 ?
                    not.map((notification,index) =>(
                        <Notification key = {index} pfp ={notification.picture} message = {notification.message} delete = {() => deleteNotification(index)}/>

                    )) : <div> Haha you don't have any notifcations you loser</div>
                }
            </div>
        </div>
    )
}
export default NotificationOverLay