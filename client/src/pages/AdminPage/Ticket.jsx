import React, {useState, useContext} from 'react';
import {useHttp} from "../../utils"
import {AuthContext} from "../../utils/context/Auth.context"

const Ticket = ({ticket}) => {
    const {request} = useHttp()
    const {token, role} = useContext(AuthContext)
    const [form, setForm] = useState({
        companyName: ticket.name,
        entrepreneur: ticket.inn,
        direction: '',
        building: '',
        floor: '',
        ownerId: ''
    })

    const create = async e => {
        try{
            e.preventDefault();
            const data = await request('http://localhost:5000/contactor/company/addCompany', 'post', {...form}, {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                Authorization: `Bearer ${token}`
            })
        }catch(err){
            console.log(err)
        }
    }

    return (
        <>
            <div className="flex flex-row my-5 h-1/3 w-3/6 bg-white relative rounded-lg shadow-md">
                <div className="flex mx-2 flex-col  my-5 w-full">
                    <h5 class="text-md  text-black font-medium">{ticket.legalName}</h5> 
                    <span class="text-sm my-1 text-black">{ticket.name}</span>
                </div>
                <div className=" w-full">
                    <button className="absolute bottom-2 right-3 border-2 border-green-100 px-1 py-1 hover:border-green-400 hover:bg-green-400 hover:text-white" onClick={create}>Принять</button>
                    <button className="absolute bottom-2 right-3 border-2 border-red-100 px-1 py-1 hover:border-red-400 hover:bg-red-400 hover:text-white">Отклонить</button>
                </div>
            </div>
        </>
    );
}

export default Ticket;
