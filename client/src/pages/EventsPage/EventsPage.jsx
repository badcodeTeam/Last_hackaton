import React from "react";

const EventPage = () => {
  return (
    <div className="w-full flex-grow p-10 flex flex-col items-center">
      <h1 className="text-3xl mb-3">Будущие мероприятия: </h1>
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
