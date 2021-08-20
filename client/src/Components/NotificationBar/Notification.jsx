import React from "react";

const Notification = ({ topic, text }) => {
  return (
    <li className="mb-3 border rounded-xl p-3 grid auto-cols-max grid-cols-2 grid-rows-2 cursor-pointer">
      <p className="font-bold col-start-1 col-end-2 row-start-1 row-end-2 truncate">{topic}</p>
      <p className="truncate col-start-1 col-end-2 row-start-2 row-end-3">{text}</p>
      <span className="col-start-2 col-end-3 row-start-1 row-end-3 justify-self-end place-self-center">&#10006;</span>
    </li>
  );
};

export default Notification;
