import React from "react";
import NotificationBar from "../NotificationBar/NotificationBar.jsx";
import "./Navbar.css";
import NavButton from "./NavButton.jsx";

const Navbar = () => {
  return (
    <nav className="w-full p-3 border navbar fixed">
      <div className="flex items-start">
        <NavButton>Личный кабинет</NavButton>
        <NavButton>Мероприятия</NavButton>
        <NavButton>Новости</NavButton>
        <NotificationBar />
      </div>
    </nav>
  );
};

export default Navbar;
