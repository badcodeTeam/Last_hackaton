import React, {useState, useEffect, useCallback, useContext} from 'react';
import {useParams} from "react-router-dom"
import {useHttp} from "../../utils"
import {AuthContext} from "../../utils/context/Auth.context"
import { Link } from "react-router-dom";


const OrgPage = () => {
    const [postText, setPostText] = useState('')
    const [org, setOrg] = useState(null)
    const orgId = useParams().id;
    const {request, loading} = useHttp()
    const {token, userId} = useContext(AuthContext)

    const getUser = useCallback(async () => {
        try{
            const created = await request(`http://localhost:5000/contactor/company/getCompanyInfo/${orgId}`, 'get', null, {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                Authorization: `Bearer ${token}`
            })
            console.log(created)
            setOrg(created.company)
            
        }catch(e){
            console.log(e)
        }
    },[token, orgId, request])

    useEffect(() => {
        getUser()
    }, [getUser])

    //6120a5a7f8f9406ce804733b 6120a5a7f8f9406ce804733b

    return (
        <div className="container">
           <div class="py-10 h-screen w-screen ">
            <div class=" mx-auto shadow-xl  bg-gradient-to-t from-teal-100  to-teal-300 bg-green-200 rounded-lg text-bold overflow-hidden w-3/6 h-full">
                <div class="flex flex-col justify-center  w-full h-full">
                    <div class="flex flex-col col-auto my-3 items-center"> <img src={`http://localhost:5000/contactor/image/company/${orgId}`} width="150px"  class=" rounded-full" />
                        <h1 class="text-xl my-2 text-black font-medium">{!loading && org && org.companyName}</h1> 
                        <span class="text-sm my-2 text-black">Строение {!loading && org && org.building} этаж {!loading && org && org.floor}</span>
                        <span class="text-sm text-black">{!loading && org && <a href={org.site}>Сайт</a>}</span>
                        
                    </div>
                    <div class="flex flex-col col-auto my-3 items-center">
                        {!loading && org && userId!==org.owner && <button> Связаться </button>}
                        {!loading && org && userId===org.owner && <Link to={`/edit/org/${orgId}`}><button> Редактировать </button></Link>}
                    </div>
                    <div class="flex flex-col col-auto my-3 items-center h-4/6 bg-green-100 overflow-y-scroll ">
                        <div className="my-5 w-5/6 rounded-full">
                            {!loading && org && userId===org.owner && <input name="field_name" class=" border border-2 rounded-r px-4 py-2 w-full " type="text" placeholder="Новая запись" />}
                        </div>
                        <div className="flex flex-row my-5 h-2/6 w-5/6 bg-white rounded-lg shadow-md">
                            <img src={`http://localhost:5000/contactor/image/company/${orgId}`}   class="my-auto mx-5 rounded-full h-3/6" />
                            <div className="flex flex-col my-auto">
                                <h5 class="text-md  text-black font-medium">{!loading && org && org.companyName}</h5> 
                                <span class="text-sm text-black">Аннонс мероприятия по работе в сфере IT. Более детальная информация появится на странице организации.</span>
                            </div>
                        </div>
                        <div className="flex flex-row my-5 h-2/6 w-5/6 bg-white rounded-lg shadow-md">
                            <img src={`http://localhost:5000/contactor/image/company/${orgId}`}   class="my-auto mx-5 rounded-full h-3/6" />
                            <div className="flex flex-col my-auto">
                                <h5 class="text-md  text-black font-medium">{!loading && org && org.companyName}</h5> 
                                <span class="text-sm text-black">Аннонс мероприятия по работе в сфере IT. Более детальная информация появится на странице организации.</span>
                            </div>
                        </div>
                        <div className="flex flex-row my-5 h-2/6 w-5/6 bg-white rounded-lg shadow-md">
                            <img src={`http://localhost:5000/contactor/image/company/${orgId}`}   class="my-auto mx-5 rounded-full h-3/6" />
                            <div className="flex flex-col my-auto">
                                <h5 class="text-md  text-black font-medium">{!loading && org && org.companyName}</h5> 
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

export default OrgPage;
