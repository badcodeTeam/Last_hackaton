import React from "react";
import Input from "../../Components/UI/Input";
import Select from "../../Components/UI/Select";
import ResidentList from "./ResidentList.jsx";

const ResidentsPage = () => {
  return (
    <div className="w-full flex-grow p-10 flex flex-col overflow-hidden">
      <form className="grid grid-rows-2 grid-cols-2 gap-3 mb-5">
        <Input
          type="text"
          placeholder="Название"
          style={{ gridColumn: "1 / 3", gridRow: "1 / 2" }}
        ></Input>
        <Select style={{ gridColumn: "1 / 2", gridRow: "2 / 3" }}>
          <option>Всё</option>
          <option>Искусство</option>
          <option>IT</option>
          <option>Магазин</option>
          <option>Услуги</option>
          <option>Офис</option>
        </Select>
        <Select style={{ gridColumn: "2 / 3", gridRow: "2 / 3" }}>
          <option>Здание 1</option>
          <option>Здание 2</option>
          <option>Здание 3</option>
        </Select>
      </form>
      <ResidentList/>
    </div>
  );
};

export default ResidentsPage;
