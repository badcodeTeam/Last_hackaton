import React from "react";
import {Link} from 'react-router-dom'

export const EventCard = ({
  residentPreviewImage,
  residentName,
  residentDescription,
  residentTimeStart,
  residentTimeEnd,
  residentBuilding,
  residentFloor,
  residentSiteUrl,
  residentId
}) => {
  const route = '/org/' + residentId
  return (
    <li
      className="text-white w-1/2 h-full p-5 border-8 border-white flex items-center justify-center background-dim"
      style={{ background: `url('${residentPreviewImage}')` }}
    >
      <div
        className="place-self-center z-10 text-white w-1/2 flex flex-col justify-center items-center p-3 border border-white rounded-md"
        style={{
          
          gridRow: "2 / 3",
          backdropFilter: `blur(30px)`,
        }}
      >
       
        
            <p className="text-3xl font-bold">{residentName}</p>
            <p className="text-2xl text-green-400 font-light">{residentDescription}</p>
       
        
      </div>
      
    </li>
  );
};

export default EventCard;
