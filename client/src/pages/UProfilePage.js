import React, {useState, useEffect, useCallback} from 'react';
import {useParams} from "react-router-dom"

const UProfilePage = () => {
    const [postText, setPostText] = useState('')
    const [user, setUser] = useState(null)
    const usrId = useParams().id;

    const getUser = useCallback(async () => {
        try{

        }catch(e){

        }
    },[])
    

    return (
        <div className="container">
           <div class="py-10 h-screen w-screen ">
            <div class=" mx-auto shadow-xl  bg-gradient-to-t from-teal-100  to-teal-300 bg-green-200 rounded-lg text-bold overflow-hidden w-3/6 h-full">
                <div class="flex flex-col justify-center  w-full h-full">
                    <div class="flex flex-col col-auto my-3 items-center"> <img src="https://i.imgur.com/S98fN1K.jpg" width="150" class="rounded-full" />
                        <h1 class="text-xl my-2 text-black font-medium">Дмитриев Максим Сергеевич</h1> 
                        <span class="text-sm text-black">Создатель File Sharing Team</span>
                        <span class="text-sm my-2 text-black">+79682852676</span>
                    </div>
                    <div class="flex flex-col col-auto my-3 items-center">
                        <button> Связаться </button>
                    </div>
                    <div class="flex flex-col col-auto my-3 items-center h-4/6 bg-green-100 overflow-y-scroll ">
                        <div className="my-5 w-5/6 rounded-full">
                            <input name="field_name" class=" border border-2 rounded-r px-4 py-2 w-full " type="text" placeholder="Новая запись" />
                        </div>
                        <div className="flex flex-row my-5 h-2/6 w-5/6 bg-white rounded-lg shadow-md">
                            <img src="https://i.imgur.com/S98fN1K.jpg"   class="my-auto mx-5 rounded-full h-3/6" />
                            <div className="flex flex-col my-auto">
                                <h5 class="text-md  text-black font-medium">Дмитриев Максим Сергеевич</h5> 
                                <span class="text-sm text-black">Аннонс мероприятия по работе в сфере IT. Более детальная информация появится на странице организации.</span>
                            </div>
                        </div>
                        <div className="flex flex-row my-5 h-2/6 w-5/6 bg-white rounded-lg shadow-md">
                            <img src="https://i.imgur.com/S98fN1K.jpg"   class="my-auto mx-5 rounded-full h-3/6" />
                            <div className="flex flex-col my-auto">
                                <h5 class="text-md  text-black font-medium">Дмитриев Максим Сергеевич</h5> 
                                <span class="text-sm text-black">Аннонс мероприятия по работе в сфере IT. Более детальная информация появится на странице организации.</span>
                            </div>
                        </div>
                        <div className="flex flex-row my-5 h-2/6 w-5/6 bg-white rounded-lg shadow-md">
                            <img src="https://i.imgur.com/S98fN1K.jpg"   class="my-auto mx-5 rounded-full h-3/6" />
                            <div className="flex flex-col my-auto">
                                <h5 class="text-md  text-black font-medium">Дмитриев Максим Сергеевич</h5> 
                                <span class="text-sm text-black">Аннонс мероприятия по работе в сфере IT. Более детальная информация появится на странице организации.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
}

export default UProfilePage;

