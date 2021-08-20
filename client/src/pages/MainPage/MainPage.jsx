import React from "react";
import "./MainPage.css";

const MainPage = () => {
  return (
    <div className="w-full flex-grow py-3 px-60">
      <ul className="w-full h-full bg-green-100 grid news-grid gap-2">
      <li className="w-full h-full bg-green-200 p-1">
          <img className="w-full h-3/6"></img>
          <div className="w-full h-3/6 bg-white"></div>
        </li>
      </ul>
    </div>
  );
};

export default MainPage;
