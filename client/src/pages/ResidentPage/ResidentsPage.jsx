import React from "react";
import Input from "../../Components/UI/Input";
import Select from "../../Components/UI/Select/Select";

const ResidentsPage = () => {
  return (
    <div className="w-full flex-grow p-10 overflow-hidden">
      <form className="flex">
        <Input type="text" placeholder="Название"></Input>
        <Select style={{margin: "5px"}}>
          <option>Всё</option>
          <option>Искусство</option>
          <option>IT</option>
          <option>Магазин</option>
          <option>Услуги</option>
          <option>Офис</option>
        </Select>
        <Select>
          <option>Здание 1</option>
          <option>Здание 2</option>
          <option>Здание 3</option>
        </Select>
      </form>
    </div>
  );
};

export default ResidentsPage;
