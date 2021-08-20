import React from "react";
import NotificationBar from "../NotificationBar/NotificationBar.jsx";
import "./Navbar.css";
import NavButton from "./NavButton.jsx";

const Navbar = () => {
  return (
    <nav className="w-full border navbar p-5">
      <div className="flex items-center justify-evenly w-full h-full">
        <div>
          <p className="text-left text-2xl text-green-400">Контактор</p>
          <p className="text-xs">платформа управления</p>
        </div>
        <NavButton>Личный кабинет</NavButton>
        <NavButton>Мероприятия</NavButton>
        <NavButton>Новости</NavButton>
        <NotificationBar />
      </div>
    </nav>
  );
};

export default Navbar;
