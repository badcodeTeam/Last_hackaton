import React from 'react';

export const RegisterPage = () => {
    return(
        <div className="flex justify-center items-center" style={{overflow: 'hidden', height: '100vh'}}>
           
            <div className="py-12 px-12 bg-white rounded-2xl shadow-xl z-20">
                <div>
                    <h1 className="text-3xl font-bold text-center mb-4 cursor-pointer">Войти</h1>
                    <p className="w-80 text-center text-sm mb-8 font-semibold text-gray-700 tracking-wide cursor-pointer">Войти в учетную запись системы Конкатор</p>
                </div>
                <div className="space-y-4">
                    <input type="text" placeholder="Email " className="block text-sm py-3 px-4 rounded-lg w-full border outline-none" />
                    <input type="text" placeholder="Пароль" className="block text-sm py-3 px-4 rounded-lg w-full border outline-none" />
                </div>
                <div className="text-center mt-6">
                    <button className="py-3 w-64 text-xl text-white bg-green-300 rounded-2xl" >Войти</button>
                    {/*<p className="mt-4 text-sm">Забыли пароль? <span className="underline cursor-pointer">Восстановить</span></p> */}
                </div>
            </div>
           
        </div>
    )
}