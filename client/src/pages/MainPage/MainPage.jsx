import React from "react";
import './MainPage.css'

const MainPage = () => {
  return (
    <div className="w-full flex-grow py-3 px-60">
      <ul className="w-full h-full bg-green-100 grid overflow-auto grid-cols-2 grid-rows-2 gap-2">
        <li className="bg-green-200">
          <img className="w-full h-4/6" src="https://upload.wikimedia.org/wikipedia/commons/8/82/Calligraphy_exhibition_in_Moscow.jpg"></img>
        </li>
      </ul>
    </div>
  );
};

export default MainPage;
