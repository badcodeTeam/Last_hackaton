import React, {useState, useContext} from 'react';
import {useHttp} from "../../utils"
import {AuthContext} from "../../utils/context/Auth.context"
import Select from '../../Components/UI/Select';

const Ticket = ({ticket}) => {
    const {request} = useHttp()
    const {token, role} = useContext(AuthContext)
    const [form, setForm] = useState({
        companyName: '',
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
            console.log(data)
        }catch(err){
            console.log(err)
        }
    }

    const changeHandler = event => {
        setForm({ ...form , [event.target.name]: event.target.value})
    }

    return (
        <>
            <div className="flex flex-col my-5 h-5/6 w-3/6 bg-white relative rounded-lg shadow-md">
                <div className="flex mx-2 flex-col  my-5 w-full">
                    <h5 class="text-md  text-black font-medium">{ticket.legalName}</h5> 
                    <span class="text-sm my-1 text-black">{ticket.name}</span>
                </div>
                <div className="flex flex-col">
                <input name="companyName" class=" border border-2 rounded-r px-4 py-2 my-3 w-full " type="text" placeholder="Название организации" onChange={changeHandler} />
                
                <input name="ownerId" class=" border border-2 rounded-r px-4 py-2 my-3 w-full " type="text" placeholder="Владелец (ID)" onChange={changeHandler} />
                <Select name="direction" onChange={changeHandler}>
                    <option>Искусство</option>
                    <option>IT</option>
                    <option>Магазин</option>
                    <option>Услуги</option>
                    <option>Офис</option>
                </Select>
                <input name="building" class=" border border-2 rounded-r px-4 py-2 my-3 w-full " type="text" placeholder="Офис (Строение)" onChange={changeHandler}  />
                <input name="floor" class=" border border-2 rounded-r px-4 py-2 my-3 w-full " type="text" placeholder="Офис (Этаж)" onChange={changeHandler} />
                </div>
                <div className=" w-full">
                    <button className="absolute bottom-2 right-3 border-2 border-green-100 px-1 py-1 mx-24 hover:border-green-400 hover:bg-green-400 hover:text-white" onClick={create}>Принять</button>
                    <button className="absolute bottom-2 right-3 border-2 border-red-100 px-1 py-1 hover:border-red-400 hover:bg-red-400 hover:text-white">Отклонить</button>
                </div>
            </div>
        </>
    );
}

export default Ticket;
