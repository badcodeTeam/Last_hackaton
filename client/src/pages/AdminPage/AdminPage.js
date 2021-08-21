import React, {useState} from 'react';
import Select from '../../Components/UI/Select';

const AdminPage = () => {
    const [type, setType] = useState(1)
    


    return (
        <div className="container">
           <div class="py-10 h-screen w-screen ">
            <div class=" mx-auto shadow-xl  bg-gradient-to-t from-teal-100  to-teal-300 bg-green-200 rounded-lg text-bold overflow-hidden w-5/6 h-full">
                <div class="flex flex-col absolute w-full h-full">
                    <div class="flex flex-col col-auto my-3 relative top-2 left-5"> 
                        <h1 class="text-xl my-2 text-black font-large">Управление кластером</h1> 
                        <span class="text-sm text-black">Админ-панель</span>
                        
                    </div>
                    <div className="flex flex-row my-3 relative top-2 left-5">
                        <button class="" onClick={e=> setType(1)}>Заявки на мероприятия</button>
                        <button class="my-2 mx-10" onClick={e=> setType(2)}>Расписание мероприятий</button>
                        <button class="my-2 mx-10" onClick={e=> setType(3)}>Регистрация организаций</button>
                        <button class="my-2 mx-10" onClick={e=> setType(4)}>Рассылка</button>
                    </div>
                    <div class="flex flex-col col-auto my-3 items-center bg-green-100 w-5/6 h-2/3 overflow-scroll">
                        {type===1 && 
                            <>
                                <div className="flex flex-row my-5 h-1/3 w-3/6 bg-white relative rounded-lg shadow-md">
                                    <div className="flex mx-2 flex-col  my-5 w-full">
                                        <h5 class="text-md  text-black font-medium">IT Camp</h5> 
                                        <span class="text-sm my-1 text-black">Соревнование по спортивному программированию</span>
                                        <span class="text-sm text-black">Дата: 27/09 9:00-10:00</span>
                                        <span class="text-sm text-black">Место: Строение 1, кабинет 1-404</span>
                                        <span class="text-sm my-1 text-black">Контакты: Дмитриев Максим Сергеевич, +79323332211</span>
                                    </div>
                                    <div className=" w-full">
                                        <button className="absolute bottom-2 right-3 border-2 border-green-100 px-1 py-1 hover:border-green-400 hover:bg-green-400 hover:text-white">Связаться</button>
                                    </div>
                                </div>
                                <div className="flex flex-row my-5 h-1/3 w-3/6 bg-white relative rounded-lg shadow-md">
                                    <div className="flex mx-2 flex-col  my-5 w-full">
                                        <h5 class="text-md  text-black font-medium">IT Camp</h5> 
                                        <span class="text-sm my-1 text-black">Соревнование по спортивному программированию</span>
                                        <span class="text-sm text-black">Дата: 27/09 9:00-10:00</span>
                                        <span class="text-sm text-black">Место: Строение 1, кабинет 1-404</span>
                                        <span class="text-sm my-1 text-black">Контакты: Дмитриев Максим Сергеевич, +79323332211</span>
                                    </div>
                                    <div className=" w-full">
                                        <button className="absolute bottom-2 right-3 border-2 border-green-100 px-1 py-1 hover:border-green-400 hover:bg-green-400 hover:text-white">Связаться</button>
                                    </div>
                                </div>
                                <div className="flex flex-row my-5 h-1/3 w-3/6 bg-white relative rounded-lg shadow-md">
                                    <div className="flex mx-2 flex-col  my-5 w-full">
                                        <h5 class="text-md  text-black font-medium">IT Camp</h5> 
                                        <span class="text-sm my-1 text-black">Соревнование по спортивному программированию</span>
                                        <span class="text-sm text-black">Дата: 27/09 9:00-10:00</span>
                                        <span class="text-sm text-black">Место: Строение 1, кабинет 1-404</span>
                                        <span class="text-sm my-1 text-black">Контакты: Дмитриев Максим Сергеевич, +79323332211</span>
                                    </div>
                                    <div className=" w-full">
                                        <button className="absolute bottom-2 right-3 border-2 border-green-100 px-1 py-1 hover:border-green-400 hover:bg-green-400 hover:text-white">Связаться</button>
                                    </div>
                                </div>
                                <div className="flex flex-row my-5 h-1/3 w-3/6 bg-white relative rounded-lg shadow-md">
                                    <div className="flex mx-2 flex-col  my-5 w-full">
                                        <h5 class="text-md  text-black font-medium">IT Camp</h5> 
                                        <span class="text-sm my-1 text-black">Соревнование по спортивному программированию</span>
                                        <span class="text-sm text-black">Дата: 27/09 9:00-10:00</span>
                                        <span class="text-sm text-black">Место: Строение 1, кабинет 1-404</span>
                                        <span class="text-sm my-1 text-black">Контакты: Дмитриев Максим Сергеевич, +79323332211</span>
                                    </div>
                                    <div className=" w-full">
                                        <button className="absolute bottom-2 right-3 border-2 border-green-100 px-1 py-1 hover:border-green-400 hover:bg-green-400 hover:text-white">Связаться</button>
                                    </div>
                                </div>
                            </>
                        }
                        {type===3 && 
                            <>
                                <div className="w-5/6 flex flex-col my-2 relative">
                                    <h1 class="text-xl my-1 text-black font-large">Создание организации</h1> 
                                    <input name="field_name" class=" border border-2 rounded-r px-4 py-2 my-3 w-full " type="text" placeholder="Название организации"  />
                                    <input name="field_name" class=" border border-2 rounded-r px-4 py-2 my-3 w-full " type="text" placeholder="Владелец (ИП)"  />
                                    <input name="field_name" class=" border border-2 rounded-r px-4 py-2 my-3 w-full " type="text" placeholder="Владелец (ID)"  />
                                    <input name="field_name" class=" border border-2 rounded-r px-4 py-2 my-3 w-full " type="text" placeholder="Телефон"  />
                                    <Select>
                                        <option>Искусство</option>
                                        <option>IT</option>
                                        <option>Магазин</option>
                                        <option>Услуги</option>
                                        <option>Офис</option>
                                    </Select>
                                    <input name="field_name" class=" border border-2 rounded-r px-4 py-2 my-3 w-full " type="text" placeholder="Офис (Строение)"  />
                                    <input name="field_name" class=" border border-2 rounded-r px-4 py-2 my-3 w-full " type="text" placeholder="Офис (Этаж)"  />
                                    <div className=" w-full  ">
                                        <button className="absolute top-50 left-50 border-2 border-green-400 px-1 py-1 hover:border-green-400 hover:bg-green-400 hover:text-white">Создать</button>
                                    </div>
                                </div>
                            </>
                        }
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
}

export default AdminPage;
