import React from "react";
import Notification from "./Notification.jsx";

const NotificationList = ({ notificationList }) => {
  return (
    <ul className="w-full" onClick={e => e.stopPropagation()}>
      {notificationList.slice((notificationList.length - 3), notificationList.length).reverse().map((notification, index) => (
        <Notification key={index} topic={notification.topic} text={notification.text}/>
      ))}
    </ul>
  );
};

export default NotificationList;
