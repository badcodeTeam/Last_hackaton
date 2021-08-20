import React, {useState, useEffect, useCallback, useContext} from 'react';
import {useParams} from "react-router-dom"
import {useHttp} from "../utils"
import {AuthContext} from "../utils/context/Auth.context"
import NumberFormat from 'react-number-format';
import axios from 'axios'


const UEditProfile = () => {
    const [user, setUser] = useState(null)
    const usrId = useParams().id;
    const {request, loading} = useHttp()
    const {token, userId} = useContext(AuthContext)
    const [files, setFiles] = useState([])
    const [number, setNumber] = useState('')
    const [email, setEmail] = useState('')

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

    const avatarUpload =  e => {
        try{
            e.preventDefault()
            
            console.log(files)
            
            let formData = new FormData();
            formData.append('files', files)

            const config = {
                headers: {
                    'content-type': 'multipart/form-data',
                    Authorization: `Bearer ${token}`
                }
            }

            axios.put(`http://localhost:5000/contactor/image/uploadAvatar`, formData, {headers: {'Authorization': `Bearer ${token}`}})
            

            
        }catch(err){
            console.log(err)
        }
    }

    const updateInfo = async e => {
        try{
            const data = await request('http://localhost:5000/contactor/user/updateEmailNumber', 'post', {userId: usrId, email, number}, {'Authorization': `Bearer ${token}`})
            console.log(data)
        }catch(err){
            console.log(err)
        }
    }

    const selectFile = e => {
        setFiles(e.target.files[0])
    }

    return (
        <div className="container">
           <div class="py-10 h-screen w-screen ">
                <div class=" mx-auto shadow-xl  bg-gradient-to-t from-teal-100  to-teal-300 bg-green-200 rounded-lg text-bold overflow-hidden w-3/6 h-full">
                    <div class="flex flex-col justify-center  w-full h-full">
                        
                        <div class="flex flex-col col-auto my-3 items-center"> 
                            <h1 class="text-lg bold">Информация о пользователе {!loading && user && user.name}</h1>
                            <img src={`http://localhost:5000/contactor/image/user/${usrId}`} width="150" class="rounded-full my-5" />
                            <div class="my-5 w-3/6 h-full">
                                {!loading && user &&  <NumberFormat  className="block px-2 py-2 w-full border outline-non rounded-lg" format="+7 (###) ###-####" allowEmptyFormatting mask="_" onChange={e=> setNumber(e.target.value)}/>}
                                {!loading && user && <input name="field_name" class=" border border-2 rounded-r px-4 py-2 my-3 w-full " type="text" placeholder="Email"  onChange={e=> setEmail(e.target.value)}/>}
                                {!loading && user &&  <input type = "file" placeholder="Изменить изображение профиля" onChange={selectFile} /> }
                            </div>
                            <div className="flex flex-col">
                            <button className="py-3 my-2 w-64 text-xl text-white bg-green-500 rounded-2xl" onClick={avatarUpload}>Сохранить аватар</button>
                            <button className="py-3 my-2 w-64 text-xl text-white bg-green-500 rounded-2xl" onClick={updateInfo}>Сохранить данные</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UEditProfile;
