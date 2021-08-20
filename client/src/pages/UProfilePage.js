import React from 'react';

const UProfilePage = () => {
    return (
        <div className="container">
           <div class="py-20 h-screen w-screen ">
            <div class=" mx-auto shadow-xl z-20  bg-gradient-to-t from-teal-100  to-teal-300 bg-green-200 rounded-lg text-bold overflow-hidden w-3/6 h-full">
                <div class="flex flex-col justify-center  w-full h-full">
                    <div class="flex flex-col col-auto my-3 items-center"> <img src="https://i.imgur.com/S98fN1K.jpg" width="150" class="rounded-full" />
                        <h1 class="text-xl my-2 text-black font-medium">Дмитриев Максим Сергеевич</h1> 
                        <span class="text-sm text-black">Создатель File Sharing Team</span>
                        <span class="text-sm my-2 text-black">+79682852676</span>
                    </div>
                    <div class="flex flex-col col-auto my-3 items-center">
                        <button> Связаться </button>
                    </div>
                    <div class="flex flex-col col-auto my-3 items-center h-3/6 bg-green-100 ">
                        
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
}

export default UProfilePage;

