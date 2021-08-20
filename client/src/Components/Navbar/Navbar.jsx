import React from "react";
import NotificationBar from "../NotificationBar/NotificationBar.jsx";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="w-full p-3 border navbar fixed">
      <div className="flex">
        <NotificationBar />
      </div>
    </nav>
  );
};

export default Navbar;
