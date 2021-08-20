import React from "react";
import Notification from "./Notification.jsx";

const NotificationList = ({ notificationList }) => {
  return (
    <ul className="w-full overflow-auto hide-scrollbar" onClick={e => e.stopPropagation()}>
      {notificationList.slice((notificationList.length - 3), notificationList.length).reverse().map((notification) => (
        <Notification topic={notification.topic} text={notification.text}/>
      ))}
    </ul>
  );
};

export default NotificationList;
