import { React, useState } from "react";
import MyButton from "../../Components/UI/MyButton";
import Input from "../../Components/UI/Input";
import "./Chat.css";
import { DebounceInput } from "react-debounce-input";
import ReactCardFlip from "react-card-flip";
import TimePicker from "react-time-picker";
import Calendar from "react-calendar";
import Select from "../../Components/UI/Select";
import Form from "../../Components/UI/Form";

const Chat = () => {
  const [colapseEventActive, setColapseEventActive] = useState(false);
  const [colapseResidentActive, setColapseResidentActive] = useState(false);
  const [inn, setInn] = useState("");
  const [isFlipped, setIsFlipped] = useState(false);

  const renderConditionally = () => {
    if (colapseEventActive) {
      return (
        <Form custom="flex-grow">
          <Input placeholder="Название мероприятия"></Input>
          <Input placeholder="Название"></Input>
          <Calendar></Calendar>
          <div className="flex">
            <TimePicker
              maxTime="23:00:00"
              minTime="00:00:00"
              disableClock={true}
              className="w-full bg-white"
            ></TimePicker>
            <TimePicker
              maxTime="23:00:00"
              minTime="00:00:00"
              disableClock={true}
              className=" bg-white"
            ></TimePicker>
          </div>
          <Select>
            <option>Открытое (свободный вход)</option>
            <option>Закрытое (вход по билету)</option>
          </Select>
          <Input placeholder="Предполагаемое количество посетителей"></Input>
          <Select>
            <option>1 помещение</option>
            <option>2 помещение</option>
          </Select>
          <MyButton additionalClasses="text-xl text-green-700 bg-white rounded-2xl">
            Отправить
          </MyButton>
        </Form>
      );
    }

    if (colapseResidentActive)
      return (
        <ReactCardFlip containerClassName="flex-grow h-full" isFlipped={isFlipped}>
          <Form custom="h-full">
            <label>Введите ИНН или ОГРН</label>
            <DebounceInput
              minLength={9}
              debounceTimeout={1000}
              onChange={(event) => {
                setInn(event.target.value);
                setIsFlipped(true);
              }}
              className="block text-sm py-3 px-4 rounded-lg w-1/2 border outline-none"
            ></DebounceInput>
          </Form>
          <ul className="w-full h-full bg-black">
            <li>

            </li>
          </ul>
        </ReactCardFlip>
      );

    if (!colapseResidentActive && !colapseEventActive)
      return (
        <div className="flex flex-col flex-grow">
          <ul className="flex flex-col flex-grow bg-white rounded-xl border overflow-auto">
            <li className="message-item my-message mt-5 mr-5">Lorem650</li>
            <li className="message-item received-message mt-5 ml-5">
              Lorem650
            </li>
          </ul>
          <div className="flex mt-5">
            <Input placeholder="Сообщение"></Input>
            <MyButton additionalClasses="bg-green-400 text-white rounded-xl ml-1">
              Отправить
            </MyButton>
          </div>
        </div>
      );
  };

  return (
    <div className="w-full flex-grow p-10 flex">
      <div className="flex w-2/6 border mr-5 rounded-xl flex-col items-center p-1">
        <div className="flex w-full justify-evenly">
          <MyButton
            onClick={() => {
              setColapseResidentActive(!colapseResidentActive);
              if (colapseEventActive)
                setColapseEventActive(!colapseEventActive);
                setIsFlipped(false);
            }}
            additionalClasses="bg-green-400 text-white rounded-xl"
          >
            Стать постоянным резидентом
          </MyButton>
          <MyButton
            onClick={() => {
              setColapseEventActive(!colapseEventActive);
              if (colapseResidentActive)
                setColapseResidentActive(!colapseResidentActive);
                setIsFlipped(false);
            }}
            additionalClasses="bg-green-400 text-white rounded-xl"
          >
            Временная аренда
          </MyButton>
        </div>
        <ul className="w-full flex-grow overflow-auto hide-scrollbar flex flex-col items-center">
          <li className="contactItem h-20 border mt-5 rounded-xl"></li>
          <li className="contactItem h-20 border mt-5 rounded-xl"></li>
        </ul>
      </div>
      {renderConditionally()}
    </div>
  );
};

export default Chat;
