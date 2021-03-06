import { React, useState, useContext } from "react";
import MyButton from "../../Components/UI/MyButton";
import Input from "../../Components/UI/Input";
import "./Chat.css";
import { DebounceInput } from "react-debounce-input";
import ReactCardFlip from "react-card-flip";
import TimePicker from "react-time-picker";
import Calendar from "react-calendar";
import Select from "../../Components/UI/Select";
import Form from "../../Components/UI/Form";
import { useHttp } from "../../utils";
import { AuthContext } from "../../utils/context/Auth.context";
import TextArea from "../../Components/UI/TextArea";

const Chat = () => {
  const [colapseEventActive, setColapseEventActive] = useState(false);
  const [colapseResidentActive, setColapseResidentActive] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);
  const { loading, request } = useHttp();
  const [suggestions, setSuggestions] = useState([]);
  const [requisites, setRequisites] = useState({});
  const { name, email, number } = useContext(AuthContext);
  const [selecteed, setSelect] = useState('');

  const getOrganizationInfo = async (residentInput) => {
    var url =
      "https://suggestions.dadata.ru/suggestions/api/4_1/rs/findById/party";
    var token = "1140dd7317f6016dd064dbff2250cb8624cb9494";
    var query = residentInput.trim();

    var options = {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: "Token " + token,
      },
      body: JSON.stringify({ query: query }),
    };

    fetch(url, options)
      .then((response) => response.json())
      .then((result) => {
        setSuggestions([...result.suggestions]);
        setIsFlipped(true);
        console.log(result.suggestions);
      })
      .catch((error) => console.log("error", error));
  };

  const sendTicket = async (e) => {
    e.preventDefault();

    var url = "http://localhost:5000/contactor/ticket/addTicket";
    const ticket = {
      legalName: requisites.legalName,
      inn: requisites.inn,
      kpp: requisites.kpp,
      ogrn: requisites.ogrn,
      legalAdress: requisites.legalAdress,
      name: name,
      email: email,
      number: number,
      type: "permament",
    };

    console.log(ticket)

    var options = {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ ticket: ticket }),
    };

    fetch(url, options)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
      })
      .catch((error) => console.log("error", error));
  };

  const renderConditionally = () => {
    if (colapseEventActive) {
      return (
        <Form custom="flex-grow">
          <Input placeholder="???????????????? ??????????????????????"></Input>
          <Input placeholder="????????????????"></Input>
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
              className="bg-white"
            ></TimePicker>
          </div>
          <Select>
            <option>???????????????? (?????????????????? ????????)</option>
            <option>???????????????? (???????? ???? ????????????)</option>
          </Select>
          <Input placeholder="???????????????????????????? ???????????????????? ??????????????????????"></Input>
          <Select>
            <option>1 ??????????????????</option>
            <option>2 ??????????????????</option>
          </Select>
          <MyButton additionalClasses="text-xl text-green-700 bg-white rounded-2xl">
            ??????????????????
          </MyButton>
        </Form>
      );
    }

    if (colapseResidentActive)
      return (
        <ReactCardFlip
          containerClassName="flex-grow h-full"
          isFlipped={isFlipped}
        >
          <Form custom="h-full">
            <label>?????????????? ?????? ?????? ????????</label>
            <DebounceInput
              minLength={9}
              debounceTimeout={1000}
              onChange={(event) => {
                if (event.target.value.trim != "")
                  getOrganizationInfo(event.target.value);
              }}
              className="block text-sm py-3 px-4 rounded-lg w-1/2 border outline-none"
            ></DebounceInput>
          </Form>
          {Object.keys(requisites).length !== 0 ? (
            <Form custom="h-full">
              <h1 className="text-xl font-black">
                ???????????????? ???????????? ???? ????????????:{" "}
              </h1>
              <Input value={requisites.legalName} custom="w-6/12"></Input>
              <Input value={"??????: " + requisites.inn} custom="w-6/12"></Input>
              <Input value={"??????: " + requisites.kpp} custom="w-6/12"></Input>
              <Input value={"????????: " + requisites.ogrn} custom="w-6/12"></Input>
              <Input value={requisites.legalAdress} custom="w-6/12"></Input>
              <Input value={name} custom="w-6/12"></Input>
              <Input value={email} custom="w-6/12"></Input>
              <Input value={number} custom="w-6/12"></Input>
              <TextArea placeholder="??????????????????????" custom="w-6/12"></TextArea>
              <Select
                custom="w-6/12"
                onChange={(e) => setSelect(e.target.value)}
              >
                <option>????????????????</option>
                <option>??????????????????</option>
              </Select>
              <MyButton
                additionalClasses="bg-white border text-green-400 rounded-xl w-6/12"
                onClick={(e) => {
                  sendTicket(e);
                }}
              >
                ????????????
              </MyButton>
            </Form>
          ) : (
            <ul className="w-full h-6/12 bg-green-100 overflow-auto">
              <h1 className="text-center text-2xl">
                ???????????????? ?????????????????? ?????????????????????? ?? ?????????? ??????????????????????:
              </h1>
              {suggestions.map((suggestion) => (
                <li
                  className="bg-white m-5 p-5 cursor-pointer"
                  onClick={() =>
                    setRequisites({
                      legalName: suggestion.data.name.full_with_opf,
                      inn: suggestion.data.inn,
                      kpp: suggestion.data.kpp,
                      ogrn: suggestion.data.ogrn,
                      legalAdress: suggestion.data.address.unrestricted_value,
                    })
                  }
                >
                  <h1>{suggestion.data.name.full_with_opf}</h1>
                  <h2>??????: {suggestion.data.inn}</h2>
                  <h2>??????: {suggestion.data.kpp}</h2>
                  <h2>????????: {suggestion.data.ogrn}</h2>
                  <h3>??????????: {suggestion.data.address.unrestricted_value}</h3>
                </li>
              ))}
            </ul>
          )}
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
            <Input custom="w-full" placeholder="??????????????????"></Input>
            <MyButton additionalClasses="bg-green-400 text-white rounded-xl ml-1">
              ??????????????????
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
            ?????????? ????????????????????
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
            ?????????????????? ????????????
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
