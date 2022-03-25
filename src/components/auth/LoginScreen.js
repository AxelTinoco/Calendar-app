import React, { useState } from 'react'
import portada from './../../assets/portada.jpg'
import { LoginForm } from './LoginForm/LoginForm';
import { RegisterForm } from './RegisterForm/RegisterForm';
//bg-[#2d3250]
//bg-[#424769]
//bg-[#676f9d]
//bg-[#fgb17a]

export const LoginScreen = () => {

    const [changeRegisterForm, setChangeRegisterForm] = useState(false);





    return (
        <div className='grid grid-cols-12 h-screen min-h-[700px]'>
            <div className='col-span-12 flex p-2 items-center  flex-col md:col-span-6 bg-[#2d3250]'>
                <div className={changeRegisterForm ? 'text-white flex flex-col w-3/4 h-1/2 min-h-[250px]  text-center leading-10 justify-center md:text-left' : 'text-white flex flex-col w-3/4 h-1/2 text-center leading-10 justify-center md:text-left'} >
                    <h2 className='text-5xl md:text-7xl'>Welcome to a Calendar App</h2>
                    <p className=''>Just Organizate</p>
                </div>

              {
                    changeRegisterForm 
                    ? 
                    <RegisterForm  changeRegisterForm ={changeRegisterForm} setChangeRegisterForm={setChangeRegisterForm}/>
                    :
                    <LoginForm changeRegisterForm={changeRegisterForm} setChangeRegisterForm={setChangeRegisterForm}/>

              }

               

            </div>

            <div className='hidden md:col-span-6 bg-black md:flex'>
                <img className='object-cover w-full' src={portada} alt="mountain" />
            </div>
        </div>
    )
}
