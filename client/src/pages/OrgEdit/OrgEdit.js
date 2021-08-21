import React, {useState, useEffect, useCallback, useContext} from 'react';
import {useParams} from "react-router-dom"
import {useHttp} from "../../utils"
import {AuthContext} from "../../utils/context/Auth.context"
import NumberFormat from 'react-number-format';
import axios from 'axios'
import { Link } from "react-router-dom";


const UEditProfile = () => {

    
    const {request, loading} = useHttp()
    const {token, userId} = useContext(AuthContext)
    const [files, setFiles] = useState([])
    const [number, setNumber] = useState('')
    const [email, setEmail] = useState('')
    const [org, setOrg] = useState(null)
    const [users, setUsers] = useState([])
    const [inn, setInn] = useState('')
    const [scheduleStart, setScheduleStart] = useState('')
    const [scheduleEnd, setScheduleEnd] = useState('')
    const [description, setDescription] = useState('')
    const [site, setSite] = useState('')
    const [companyName, setCompanyName] = useState('')
    const orgId = useParams().id;
    


    const getInfo = useCallback(async () => {
        try{
           
            const created = await request(`http://localhost:5000/contactor/company/getCompanyInfo/${orgId}`, 'get', null, {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                Authorization: `Bearer ${token}`
            })
            console.log(created)
            setOrg(created.company)

            let infoUsers = []
            for(let i = 0; i < created.company.members.length; i++){
                const founded = await request(`http://localhost:5000/contactor/user/getClientInfo/${created.company.members[i]}`, 'get', null, {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    Authorization: `Bearer ${token}`
                })

                infoUsers.push(founded)
            }

            setUsers(infoUsers)
            

        }catch(e){
            console.log(e)
        }
    },[token, orgId, request])

    useEffect(() => {
        getInfo()
        
    }, [getInfo])

    const avatarUpload =  e => {
        try{
            e.preventDefault()
            
            console.log(files)
            
            let formData = new FormData();
            formData.append('files', files)
            formData.append('companyId', orgId)

            const config = {
                headers: {
                    'content-type': 'multipart/form-data',
                    Authorization: `Bearer ${token}`
                }
            }

            axios.put(`http://localhost:5000/contactor/image/uploadCompany`, formData, {headers: {'Authorization': `Bearer ${token}`}})
            

            
        }catch(err){
            console.log(err)
        }
    }

    const updateInfo = async e => {
        try{
            const data = await request('http://localhost:5000/contactor/company/updateCompany', 'post', {companyId: orgId, companyEmail: email,companyNumber: number, scheduleStart,scheduleEnd,description,site, companyName}, {'Authorization': `Bearer ${token}`})
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
                        
                        <div class="flex flex-col col-auto my-3 items-center h-full overflow-scroll"> 
                            <Link to={`/org/${orgId}`}><button> Назад </button></Link>
                            <h1 class="text-lg bold">Информация о компании {!loading && org && org.companyName}</h1>
                            <img src={`http://localhost:5000/contactor/image/company/${orgId}`} width="150" class="rounded-full my-5" />
                            <div class="my-5 w-3/6 h-full">
                                {!loading && org && <input name="field_name" class=" border border-2 rounded-r px-4 py-2 my-3 w-full " type="text" placeholder="Название компании"  onChange={e=> setCompanyName(e.target.value)}/>}
                                {!loading && org &&  <NumberFormat  className="block px-2 py-2 w-full border outline-non rounded-lg" format="+7 (###) ###-####" allowEmptyFormatting mask="_" onChange={e=> setNumber(e.target.value)}/>}
                                {!loading && org && <input name="field_name" class=" border border-2 rounded-r px-4 py-2 my-3 w-full " type="text" placeholder="Email"  onChange={e=> setEmail(e.target.value)}/>}
                                {!loading && org && <input name="field_name" class=" border border-2 rounded-r px-4 py-2 my-1 w-full " type="text" placeholder="ИНН"  onChange={e=> setInn(e.target.value)}/>}
                                {!loading && org && <input name="field_name" class=" border border-2 rounded-r px-4 py-2 my-1 w-full " type="text" placeholder="Начало работы"  onChange={e=> setScheduleStart(e.target.value)}/>}
                                {!loading && org && <input name="field_name" class=" border border-2 rounded-r px-4 py-2 my-1 w-full " type="text" placeholder="Конец работы"  onChange={e=> setScheduleEnd(e.target.value)}/>}
                                {!loading && org && <input name="field_name" class=" border border-2 rounded-r px-4 py-2 my-1 w-full " type="text" placeholder="Описание компании"  onChange={e=> setDescription(e.target.value)}/>}
                                {!loading && org && <input name="field_name" class=" border border-2 rounded-r px-4 py-2 my-1 w-full " type="text" placeholder="Сайт"  onChange={e=> setSite(e.target.value)}/>}
                                {!loading && org &&  <input type = "file" placeholder="Изменить изображение профиля" onChange={selectFile} /> }
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
