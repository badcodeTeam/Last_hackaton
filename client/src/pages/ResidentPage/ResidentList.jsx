import React from "react";
import ResidentCard from "./ResidentCard";

const ResidentList = () => {
  return (
    <ul className="w-full h-full flex-grow hide-scrollbar flex flex-wrap overflow-auto">
      <ResidentCard
        residentPreviewImage="https://images.unsplash.com/photo-1608434934019-f8dd8d7e8cae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80"
        residentBuilding={1}
        residentFloor={1}
        residentName="ImpreStudio"
        residentType="Art gallery"
        residentTimeStart="8:00"
        residentTimeEnd="18:00"
      />
      <ResidentCard
        residentPreviewImage="https://images.unsplash.com/photo-1542751371-adc38448a05e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
        residentBuilding={1}
        residentFloor={1}
        residentName="GameDungeon"
        residentType="Gaming club"
        residentTimeStart="8:00"
        residentTimeEnd="24:00"
      />
      <ResidentCard
        residentPreviewImage="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
        residentBuilding={1}
        residentFloor={1}
        residentName="TogWork"
        residentType="Coworking office"
        residentTimeStart="8:00"
        residentTimeEnd="24:00"
      />
      <ResidentCard
        residentPreviewImage="https://images.unsplash.com/photo-1575672913784-11a7cd4f25f4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
        residentBuilding={1}
        residentFloor={1}
        residentName="Garage"
        residentType="Recording studio"
        residentTimeStart="8:00"
        residentTimeEnd="24:00"
      />
    </ul>
  );
};

export default ResidentList;
