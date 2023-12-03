import { useState } from "react";
import notifcations from "../../notifications";
import './NotificationOverLay.css'


function Notification(props) {
  return (
    <div className="notification_element">
      <img src={props.pfp} className="notification_img"></img>
      <div className="notification_description">{props.message}</div>
      <div className="notification_delete img_btn" onClick={props.delete}> - </div>
    </div>
  )
}

function NotificationOverLay(props) {
  const [not, setnot] = useState(notifcations)
  const updateBubble = props.updateBubble
  const deleteNotification = (index) => {
    notifcations.splice(index, 1);
    const newnot = [...notifcations]
    updateBubble();
    setnot(newnot)
  }
  const close = props.back

  return (
    <>
      <div className="invis_background"></div>
      <div className="notification_overlay">
        <div className="notification_title_section">
          <div className="notification_overlay_title">Notifications</div>
          <div className="notification_overlay_close img_btn" onClick={close}></div>
        </div>
        <div className="line"></div>
        {not.length > 0 ?
          not.map((notification, index) => {
            if (index === not.length - 1) {
              return (
                <Notification key={index} pfp={notification.picture} message={notification.message} delete={() => deleteNotification(index)} />
              )
            } else return (
              <>
                <Notification key={index} pfp={notification.picture} message={notification.message} delete={() => deleteNotification(index)} />
                <div className="line"></div>
              </>
            )

          }) : <div className="no_notifications">No notifications to display!</div>
        }
      </div>
    </>

  )
}
export default NotificationOverLay