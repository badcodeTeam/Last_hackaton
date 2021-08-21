import React, { useContext } from "react";
import NotificationBar from "../NotificationBar/NotificationBar.jsx";
import "./Navbar.css";
import NavButton from "./NavButton.jsx";
import { Link } from "react-router-dom";
import { AuthContext } from "../../utils/context/Auth.context";

const Navbar = () => {
  const { userId } = useContext(AuthContext);
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
        <Link to={profileLink}>
          {" "}
          <NavButton>Личный кабинет</NavButton>
        </Link>
        <NavButton>Мероприятия</NavButton>
        <NavButton>Резиденты</NavButton>
        <Link to="/contact_us">
          <NavButton>Контакты</NavButton>
        </Link>
        <NotificationBar />
      </div>
    </nav>
  );
};

export default Navbar;
