import React, { useContext, useState } from "react";
import NotificationBar from "../NotificationBar/NotificationBar.jsx";
import "./Navbar.css";
import NavButton from "./NavButton.jsx";
import { Link } from "react-router-dom";
import { AuthContext } from "../../utils/context/Auth.context";
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement("#root");

const Navbar = () => {
  const { userId } = useContext(AuthContext);
  const [modalActive, setModalActive] = useState(false);

  const openModal = () => {
    setModalActive(true);
  }

  const closeModal = () =>{
    setModalActive(false);
  }

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
          <NavButton>Личный кабинет</NavButton>
        </Link>
        <div class="dropdown">
          <NavButton>Мероприятия</NavButton>
          <div class="dropdown-content">
            <NavButton onClick={openModal}>Подать заявку</NavButton>
            <Modal isOpen={modalActive} style={customStyles} onRequestClose={closeModal}><h1>Hello</h1></Modal>
            <Link to='/events'>
              <NavButton>Будущие мероприятия</NavButton>
            </Link>
          </div>
        </div>
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
