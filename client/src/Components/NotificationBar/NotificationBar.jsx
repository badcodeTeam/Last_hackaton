import { React, useState } from "react";
import NotificationList from "./NotificationList.jsx";
import { CSSTransition } from "react-transition-group";
import './NotificationBar.css'

const NotificationBar = () => {
  const [isActive, setActive] = useState(false);
  const [notificationList, setNotificationList] = useState([
    { topic: "First notification", text: "First notification text" },
    { topic: "Second notification", text: "Second notification text" },
    { topic: "Third notification", text: "Third notification text" },
    { topic: "Fourth notification", text: "Fourth notification text" }
  ]);

  return (
    <CSSTransition in={isActive} classNames="notification-bar">
      <div
        className="border border-black p-2 rounded-md flex justify-center align-center notification-bar"
        onClick={() => {
          setActive(!isActive);
        }}
      >
        {!isActive ? (
          <>
            {notificationList.lenght == 0 ? (
              <img src="https://img.icons8.com/material-two-tone/24/000000/bell--v1.png" />
            ) : (
              <img src="https://img.icons8.com/material/24/000000/bell--v1.png" />
            )}
            <span>Уведомления</span>
          </>
        ) : (
          <>
          <NotificationList notificationList={notificationList}/>
          <a className="self-end cursor-pointer" onClick={e => e.stopPropagation()}>Все уведомления</a>
          </>
        )}
      </div>
    </CSSTransition>
  );
};

export default NotificationBar;
