import React from "react";

const ResidentCard = ({
  residentPreviewImage,
  residentName,
  residentDescription,
  residentTimeStart,
  residentTimeEnd,
  residentBuilding,
  residentFloor,
  residentSiteUrl,
}) => {
  return (
    <li
      className="text-white w-1/2 h-full p-5 border-8 border-white grid grid-cols-2 grid-rows-3 background-dim"
      style={{ background: `url('${residentPreviewImage}')` }}
    >
      <div
        className="place-self-center z-10 text-white p-3 border border-white rounded-md"
        style={{
          gridColumn: "1 / 2",
          gridRow: "2 / 3",
          backdropFilter: `blur(30px)`,
        }}
      >
        <p className="text-3xl font-bold">{residentName}</p>
        <p className="text-2xl text-green-400 font-light">{residentDescription}</p>
      </div>
      <div
        className="flex flex-col justify-evenly items-center z-10 font-black"
        style={{ gridColumn: "2 / 3", gridRow: "1 / 4" }}
      >
        <p className="font-bold text-xl">Время работы:</p>
        <p>
          {residentTimeStart} - {residentTimeEnd}
        </p>
        <p className="font-bold text-xl">Расположение: </p>
        <p>
          Здание: {residentBuilding}, этаж {residentFloor}
        </p>
        <a
          href={residentSiteUrl}
          className="border border-white px-5 py-1 rounded"
        >
          Сайт
        </a>
      </div>
    </li>
  );
};

export default ResidentCard;
