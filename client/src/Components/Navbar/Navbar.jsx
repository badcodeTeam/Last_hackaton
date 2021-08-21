import React from "react";
import NotificationBar from "../NotificationBar/NotificationBar.jsx";
import "./Navbar.css";
import NavButton from "./NavButton.jsx";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full border navbar p-5">
      <div className="flex items-center justify-evenly w-full h-full">
        <div>
          <p className="text-left text-2xl text-green-400">Контактор</p>
          <p className="text-xs ml-1">креативный кластер</p>
        </div>
        <NavButton>Главная</NavButton>
        <NavButton>Личный кабинет</NavButton>
        <NavButton>Мероприятия</NavButton>
        <Link to="/residents">
          <NavButton>Резиденты</NavButton>
        </Link>
        <Link to="/contact_us">
          <NavButton>Контакты</NavButton>
        </Link>
        <NotificationBar />
      </div>
    </nav>
  );
};

export default Navbar;
