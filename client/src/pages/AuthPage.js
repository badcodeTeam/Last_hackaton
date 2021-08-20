import React, {useState, useContext} from 'react';
import {useHttp} from "../utils"
import {AuthContext} from '../utils/context/Auth.context'


const AuthPage = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {loading, request} = useHttp()
    const auth = useContext(AuthContext)

    const loginHander = async e => {
        try{
            e.preventDefault()
            const data = await request('http://localhost:5000/contactor/authUser/login', 'post', {
                email, password
            })

            auth.login(data.token.accessToken, data.user.id)
        }catch(error){
            console.log(error)
        }
    }

    return (
        <div className="flex justify-center items-center" style={{overflow: 'hidden', height: '100vh'}}>
           
            <div className="py-12 px-12 bg-white rounded-2xl shadow-xl z-20">
                <div>
                    <h1 className="text-3xl font-bold text-center mb-4 cursor-pointer">Войти</h1>
                    <p className="w-80 text-center text-sm mb-8 font-semibold text-gray-700 tracking-wide cursor-pointer">Войти в учетную запись системы Конкатор</p>
                </div>
                <div className="space-y-4">
                    <input type="text" placeholder="Email " className="block text-sm py-3 px-4 rounded-lg w-full border outline-none" onChange={e => setEmail(e.target.value)}/>
                    <input type="password" placeholder="Пароль" className="block text-sm py-3 px-4 rounded-lg w-full border outline-none" onChange={e => setPassword(e.target.value)}/>
                </div>
                <div className="text-center mt-6">
                    <button className="py-3 w-64 text-xl text-white bg-green-300 rounded-2xl" onClick={loginHander}>Войти</button>
                    {/*<p className="mt-4 text-sm">Забыли пароль? <span className="underline cursor-pointer">Восстановить</span></p> */}
                </div>
            </div>
           
        </div>
    );
}

export default AuthPage;
