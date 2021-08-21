import React from "react";
import MyButton from "../../Components/UI/MyButton";

const EventPage = () => {
  return (
    <div className="w-full flex-grow p-10 flex flex-col items-center">
      <MyButton additionalClasses="text-xl text-white bg-green-400 rounded-2xl w-full mb-3">
        Подать заявку на мероприятие
      </MyButton>
      <h1 className="text-3xl">Будущие мероприятия: </h1>
      <div className="w-full flex-grow flex flex-wrap overflow-auto hide-scrollbar">
        <div className="w-2/4 h-2/4 bg-black border-8 border-white"></div>
        <div className="w-2/4 h-2/4 bg-black border-8 border-white"></div>
        <div className="w-2/4 h-2/4 bg-black border-8 border-white"></div>
        <div className="w-2/4 h-2/4 bg-black border-8 border-white"></div>
      </div>
    </div>
  );
};

export default EventPage;
