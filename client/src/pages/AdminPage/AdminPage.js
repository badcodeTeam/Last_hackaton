import React, {useState} from 'react';

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
                        <button class="">Заявки на мероприятия</button>
                        <button class="my-2 mx-10">Регистрация организаций</button>
                        <button class="my-2 mx-10">Рассылка</button>
                    </div>
                    <div class="flex flex-col col-auto my-3 items-center bg-green-100 w-5/6 h-full">
                        
                    </div>
                    
                </div>
            </div>
            </div>
        </div>
    );
}

export default AdminPage;
