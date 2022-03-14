import React from 'react'
import portada from './../../assets/portada.jpg'
//bg-[#2d3250]
//bg-[#424769]
//bg-[#676fgd]
//bg-[#fgb17a]

export const LoginScreen = () => {
    return (
        <div className='grid grid-cols-12 h-screen'>
            <div className='col-span-12 flex p-2 items-center flex-col md:col-span-6 bg-[#2d3250]'>
                <div className='text-white flex flex-col w-3/4 h-1/2 text-center leading-10 justify-center'>
                    <h2 className='text-5xl'>Welcome to a Calendar App</h2>
                    <p className=''>Just Organizate</p>
                </div>

                <div className='flex h-1/2 flex-col w-3/4 '>
                    <div className='p-4 flex flex-col space-y-12 '>
                        <button className='rounded-xl bg-orange-300 font-extrabold shadow-3xl shadow-orange-300 w-full h-14'>
                            Log In
                        </button>

                        <button className='rounded-xl bg-orange-300 shadow-3xl font-extrabold shadow-orange-300 w-full h-14'>
                            Sign In
                        </button>
                    </div>
                </div>

            </div>

            <div className='hidden md:col-span-6 bg-black md:flex  '>
                <img className='object-cover w-full' src={portada} alt="mountain" />
            </div>
        </div>
    )
}
