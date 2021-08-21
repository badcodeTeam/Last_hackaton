import React, {useState, useEffect, useCallback, useContext} from 'react';
import {useParams} from "react-router-dom"
import {useHttp} from "../utils"
import {AuthContext} from "../utils/context/Auth.context"
import { Link } from "react-router-dom";

const UProfilePage = () => {
    const [postText, setPostText] = useState('')
    const [postHeader, setPostHeader] = useState('')
    const [user, setUser] = useState(null)
    const usrId = useParams().id;
    const {request, loading} = useHttp()
    const {token, userId} = useContext(AuthContext)

    const getUser = useCallback(async () => {
        try{
            const created = await request(`http://localhost:5000/contactor/user/getClientInfo/${usrId}`, 'get', null, {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                Authorization: `Bearer ${token}`
            })
            console.log(created)
            setUser(created.clientDto)
        }catch(e){
            console.log(e)
        }
    },[token, usrId, request])

    useEffect(() => {
        getUser()
    }, [getUser])

    const sendPost = async e => {
        try{
            e.preventDefault()
            console.log(postText)
            const send = await request('http://localhost:5000/contactor/post/addPost', 'post', {postHeader: postHeader, text: postText}, {
                Authorization: `Bearer ${token}`
            })

            console.log(send)
        }catch(err){
            console.log(err)
        }
    }
    
    /*
        ИНН ОГРНИП ПАСПОРТ , ООО ДОКИ 
        ВИЗУАЛИЗАЦИЯ ОБЪЕКТА УПРАВЛЕНИЯ
    */

    return (
        <div className="container">
           <div className="py-10 h-screen w-screen ">
            <div className=" mx-auto shadow-xl  bg-gradient-to-t from-teal-100  to-teal-300 bg-green-200 rounded-lg text-bold overflow-hidden w-3/6 h-full">
                <div className="flex flex-col justify-center  w-full h-full">
                    <div className="flex flex-col col-auto my-3 items-center"> <img src={`http://localhost:5000/contactor/image/user/${usrId}`} width="150px"  className=" rounded-full" />
                        <h1 className="text-xl my-2 text-black font-medium">{!loading && user && user.name}</h1> 
                        <span className="text-sm text-black">Создатель .badcode</span>
                        <span className="text-sm my-2 text-black">{!loading && user && user.number}</span>
                    </div>
                    <div className="flex flex-col col-auto my-3 items-center">
                        {!loading && user && userId!==usrId && <button> Связаться </button>}
                        {!loading && user && userId===usrId && <Link to={`/edit/user/${usrId}`}><button> Редактировать </button></Link>}
                    </div>
                    <div className="flex flex-col col-auto my-3 items-center h-4/6 bg-green-100 overflow-y-scroll ">
                        <div className="my-5 w-full rounded-full flex flex-col  justify-center items-center">
                            {!loading && user && userId===usrId && 
                            <>
                                <div className="w-5/6">
                                    <input name="field_name" className=" border border-2 rounded-r px-4 py-2 w-full  " type="text" placeholder="Заголовок" onChange={e => setPostHeader(e.target.value)} />
                                    
                                </div>
                                <div className="w-5/6 flex flex-row my-2">
                                    <input name="field_name" className=" border border-2 rounded-r px-4 py-2 w-full  " type="text" placeholder="Текст" onChange={e => setPostText(e.target.value)} />
                                    <button className="mx-1 bg-white hover:bg-green-400 px-2 py-1" onClick={sendPost}>Отправить</button>
                                </div>
                            </>}
                        </div>
                        <div className="flex flex-row my-5 h-2/6 w-5/6 bg-white rounded-lg shadow-md">
                            <img src={`http://localhost:5000/contactor/image/user/${usrId}`}   className="my-auto mx-5 rounded-full h-3/6" />
                            <div className="flex flex-col my-auto">
                                <h5 className="text-md  text-black font-medium">Дмитриев Максим Сергеевич</h5> 
                                <span className="text-sm text-black">Аннонс мероприятия по работе в сфере IT. Более детальная информация появится на странице организации.</span>
                            </div>
                        </div>
                        <div className="flex flex-row my-5 h-2/6 w-5/6 bg-white rounded-lg shadow-md">
                            <img src={`http://localhost:5000/contactor/image/user/${usrId}`}   className="my-auto mx-5 rounded-full h-3/6" />
                            <div className="flex flex-col my-auto">
                                <h5 className="text-md  text-black font-medium">Дмитриев Максим Сергеевич</h5> 
                                <span className="text-sm text-black">Аннонс мероприятия по работе в сфере IT. Более детальная информация появится на странице организации.</span>
                            </div>
                        </div>
                        <div className="flex flex-row my-5 h-2/6 w-5/6 bg-white rounded-lg shadow-md">
                            <img src={`http://localhost:5000/contactor/image/user/${usrId}`}   className="my-auto mx-5 rounded-full h-3/6" />
                            <div className="flex flex-col my-auto">
                                <h5 className="text-md  text-black font-medium">Дмитриев Максим Сергеевич</h5> 
                                <span className="text-sm text-black">Аннонс мероприятия по работе в сфере IT. Более детальная информация появится на странице организации.</span>
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

