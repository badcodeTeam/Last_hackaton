import React, {useState} from 'react';
import {useHttp} from "../utils"
import NumberFormat from 'react-number-format';

export const RegisterPage = () => {
    const [stage, setStage] = useState(1)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [number, setNumber] = useState('')
    const [name, setName] = useState('')
    const {loading, request} = useHttp()

    const registerHandler = async e => {
        try{
            e.preventDefault()
            console.log(email, password, number, name)
            
            const data = await request('http://localhost:5000/contactor/authUser/register', 'post', {
                email, password, name, number
            })

            if(data.token.accessToken){
                setStage(2)
            }

        }catch(error){
            console.log(error)
        }
    }
    

    return(
        <div className="flex justify-center items-center" style={{overflow: 'hidden', height: '100vh'}}>
           
            {
                stage===1 && 
                <div className="py-12 px-12 bg-white rounded-2xl shadow-xl z-20">
                    <div>
                        <h1 className="text-3xl font-bold text-center mb-4 cursor-pointer">Регистрация</h1>
                        <p className="w-80 text-center text-sm mb-8 font-semibold text-gray-700 tracking-wide cursor-pointer">Создать учетную запись системы Контактор</p>
                    </div>
                    <div className="space-y-4">
                        <input type="text" placeholder="Email " value={email} className="block text-sm py-3 px-4 rounded-lg w-full border outline-none" onChange={e => setEmail(e.target.value)}/>
                        <input type="password" placeholder="Пароль" value={password} className="block text-sm py-3 px-4 rounded-lg w-full border outline-none" onChange={e => setPassword(e.target.value)}/>
                        <input type="text" placeholder="ФИО" value={name} className="block text-sm py-3 px-4 rounded-lg w-full border outline-none" onChange={e => setName(e.target.value)}/>
                        <NumberFormat value={number} className="block px-2 py-2 w-full border outline-non rounded-lg" format="+7 (###) ###-####" allowEmptyFormatting mask="_" onChange={e => setNumber(e.target.value)} />
                    </div>
                    <div className="text-center mt-6">
                        <button className="py-3 w-64 text-xl text-white bg-green-300 rounded-2xl" onClick={registerHandler}>Зарегистрироваться</button>
                        {/*<p className="mt-4 text-sm">Забыли пароль? <span className="underline cursor-pointer">Восстановить</span></p> */}
                    </div>
                </div>
            }

            {
                stage===2 && 
                <div className="py-12 px-12 bg-white rounded-2xl shadow-xl z-20">
                    <div>
                        <h1 className="text-3xl font-bold text-center mb-4 cursor-pointer">Почти всё</h1>
                        <p className="w-80 text-center text-sm mb-8 font-semibold text-gray-700 tracking-wide cursor-pointer">На вашу почту {email} было отправлено письмо с ссылкой на активацию аккаунта</p>
                    </div>
                   
                </div>
            }
           
        </div>
    )
}