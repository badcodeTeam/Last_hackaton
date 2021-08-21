import {React, useContext} from "react";
import MyButton from "../Components/UI/MyButton.jsx";
import Input from "../Components/UI/Input.jsx";
import TextArea from "../Components/UI/TextArea.jsx";
import Form from '../Components/UI/Form.jsx';
import {AuthContext} from '../utils//context/Auth.context'

const ContactPage = () => {
  
  const {isAuthenticated} = useContext(AuthContext);

  return (
    <div className="w-full flex-grow p-10 grid grid-cols-6 grid-rows-3">
      <h1 className="col-start-1 col-end-5 text-5xl">
        432001, г. Ульяновск, ул. К. Маркса, д. 12
      </h1>
      <div className="col-start-1 col-end-2 text-xl">
        <p className="text-gray-500">Аренда и продажа:</p>
        <p>John Doe</p>
        <p>johndoe@mail.com</p>
      </div>
      <div className="col-start-2 col-end-3 text-xl">
        <p>Мероприятия:</p>
        <p>John Doe</p>
        <p>johndoe@mail.com</p>
      </div>
      <div className="col-start-3 col-end-4 text-xl">
        <p>Спецпроекты:</p>
        <p>John Doe</p>
        <p>johndoe@mail.com</p>
      </div>
      <div className="col-start-1 col-end-4 row-start-3 row-end-4 text-4xl">
        <p>+ 7 (999) 999-99-99</p>
        <p>johndoe@mail.com</p>
      </div>
      <Form customClasses="col-start-5 col-end-7 row-start-1 row-end-4">
        <Input type="text" placeholder="Имя" />
        <Input type="tel" placeholder="Телефон" />
        <Input type="email" placeholder="E-mail" />
        <Input type="text" placeholder="Организация" />
        <TextArea placeholder="Комментарий" resize={false}/>
        <MyButton additionalClasses="text-xl text-green-700 bg-white rounded-2xl">Связаться</MyButton>
      </Form>
    </div>
  );
};

export default ContactPage;
