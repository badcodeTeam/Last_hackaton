import React, { useContext, useState, useEffect, useRef } from "react";
import NotificationBar from "../NotificationBar/NotificationBar.jsx";
import Form from "../UI/Form.jsx";
import Input from "../UI/Input.jsx";
import Select from "../UI/Select.jsx";
import "./Navbar.css";
import NavButton from "./NavButton.jsx";
import { Link } from "react-router-dom";
import { AuthContext } from "../../utils/context/Auth.context";
import Modal from "react-modal";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import TimePicker from "react-time-picker";
import MyButton from "../UI/MyButton.jsx";

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
        {isAuthenticated && 
        <Link to={profileLink}>
          <NavButton>Личный кабинет</NavButton>
        </Link>
        }
        {!isAuthenticated && 
        <Link to="/auth">
          <NavButton>Войти</NavButton>
        </Link>
        }
        <div className="dropdown">
          <NavButton>Мероприятия</NavButton>
          <div className="dropdown-content">
            <NavButton onClick={openModal}>Подать заявку</NavButton>
            <Modal
              isOpen={modalActive}
              style={customStyles}
              onRequestClose={closeModal}
            >
              <Form>
                <Input placeholder="Название мероприятия"></Input>
                <Input placeholder="Название"></Input>
                <Calendar></Calendar>
                <TimePicker
                  maxTime="23:00:00"
                  minTime="00:00:00"
                  disableClock={true}
                ></TimePicker>
                <Select>
                  <option>Открытое (свободный вход)</option>
                  <option>Закрытое (вход по билету)</option>
                </Select>
                <Input placeholder="Предполагаемое количество посетителей"></Input>
                <Select>
                  <option>1 помещение</option>
                  <option>2 помещение</option>
                </Select>
                <MyButton additionalClasses="text-xl text-green-700 bg-white rounded-2xl">Отправить</MyButton>
              </Form>
            </Modal>
            <Link to="/events">
              <NavButton>Будущие мероприятия</NavButton>
            </Link>
          </div>
        </div>
        <Link to="/residents">
          <NavButton>Резиденты</NavButton>
        </Link>
        <Link to="/contact_us">
          <NavButton>{!isAuthenticated ? ('Контакты') : ('Связь')}</NavButton>
        </Link>
        <NotificationBar/>
        <NavButton onClick={logout} custom="text-white btn-remove-border">...</NavButton>
      </div>
    </nav>
  );
};

export default Navbar;
