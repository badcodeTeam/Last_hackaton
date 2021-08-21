import React from "react";
import MyButton from "../../Components/UI/MyButton";

const EventPage = () => {
  return (
    <div className="w-full flex-grow p-10 flex flex-col items-center">
      <MyButton additionalClasses="text-xl text-white bg-green-400 rounded-2xl w-full mb-3">
        Запланировать мероприятие
      </MyButton>
      <div className="w-full flex-grow grid grid-cols-7 grid-rows-6 gap-1">
        <div
          className="grid place-content-center text-white background-dim"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1501386761578-eac5c94b800a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80')`,
            backgroundSize: "cover",
          }}
        >
          <span className="font-bold text-xl z-10">22 августа</span>
        </div>
      </div>
    </div>
  );
};

export default EventPage;
