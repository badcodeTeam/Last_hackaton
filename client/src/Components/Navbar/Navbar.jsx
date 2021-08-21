import React, { useContext, useState, useEffect, useRef } from "react";
import NotificationBar from "../NotificationBar/NotificationBar.jsx";
import "./Navbar.css";
import NavButton from "./NavButton.jsx";
import { Link } from "react-router-dom";
import { AuthContext } from "../../utils/context/Auth.context";
import Modal from "react-modal";
import "react-calendar/dist/Calendar.css";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: "0.5em",
  },
};

Modal.setAppElement("#root");

const Navbar = () => {
  const { userId, logout, isAuthenticated } = useContext(AuthContext);
  const [modalActive, setModalActive] = useState(false);

  const openModal = () => {
    setModalActive(true);
  };

  const closeModal = () => {
    setModalActive(false);
  };

  const profileLink = "/profile/" + userId;

  return (
    <nav className="w-full border navbar p-5">
      <div className="flex items-center justify-evenly w-full h-full">
        <Link to="/">
          <div>
            <p className="text-left text-2xl text-green-400">Контактор</p>
            <p className="text-xs ml-1">креативный кластер</p>
          </div>
        </Link>
        <NavButton>Главная</NavButton>
        {isAuthenticated && (
          <Link to={profileLink}>
            <NavButton>Личный кабинет</NavButton>
          </Link>
        )}
        {!isAuthenticated && (
          <Link to="/auth">
            <NavButton>Войти</NavButton>
          </Link>
        )}
        <Link to="/events">
          <NavButton>Мероприятия</NavButton>
        </Link>
        <Link to="/residents">
          <NavButton>Резиденты</NavButton>
        </Link>
        <Link to="/contact_us">
          <NavButton>{!isAuthenticated ? "Контакты" : "Связь"}</NavButton>
        </Link>
        <NotificationBar />
        <NavButton onClick={logout} custom="text-white btn-remove-border">
          ...
        </NavButton>
      </div>
    </nav>
  );
};

export default Navbar;
