import React from 'react'

export const RegisterForm = ({changeRegisterForm,setChangeRegisterForm}) => {

    const handleChangeView = () => {

        setChangeRegisterForm(!changeRegisterForm)

    }



    return (
        <>
            <div className='md:flex w-3/4 bg-[#424769] flex-col mb-4 mt-0  border-l-2 border-orange-300' >
                <div className='p-4 flex flex-col w-full md:flex-row md:space-y-0 md:space-x-6 md:h-24 h-20 relative'>
                    <input type="text" id='name' placeholder='Name' className='w-full h-full p-2 bg-[#424769] text-white outline-none peer relative placeholder-transparent focus:outline-none' />
                    <label htmlFor="name"
                        className='absolute left-0 text-gray-400 text-sm -top-0 p-1 rounded
peer-placeholder-shown:top-5 md:peer-placeholder-shown:top-8 transition-all peer-placeholder-shown:bg-transparent 
peer-placeholder-shown:text-opacity-40 peer-placeholder-shown:text-white peer-placeholder-shown:text-xl peer-placeholder-shown:pl-6 md:peer-placeholder-shown:pl-0
'>Name</label>
                </div>
            </div>



            <div className='md:flex w-3/4 bg-[#424769] flex-col  border-l-2 border-orange-300' >
                <div className='p-4 flex flex-col w-full md:flex-row md:space-y-0 md:space-x-6 md:h-24 h-20 relative'>
                    <input type="text" id='email' placeholder='Email' className='w-full h-full p-2 bg-[#424769] text-white outline-none peer relative placeholder-transparent focus:outline-none' />
                    <label htmlFor="email"
                        className='absolute left-0 text-gray-400 text-sm -top-0 p-1 rounded
peer-placeholder-shown:top-5 md:peer-placeholder-shown:top-8 transition-all peer-placeholder-shown:bg-transparent 
peer-placeholder-shown:text-opacity-40 peer-placeholder-shown:text-white peer-placeholder-shown:text-xl peer-placeholder-shown:pl-6 md:peer-placeholder-shown:pl-0
'>Email</label>
                </div>
            </div>



            <div className='md:flex w-3/4 bg-[#424769] flex-col my-4  border-l-2 border-orange-300' >
                <div className='p-4 flex flex-col w-full md:flex-row md:space-y-0 md:space-x-6 md:h-24 h-20 relative'>
                    <input type="text" id='password' placeholder='Password' className='w-full h-full p-2 bg-[#424769] text-white outline-none peer relative placeholder-transparent focus:outline-none' />
                    <label htmlFor="password"
                        className='absolute left-0 text-gray-400 text-sm -top-0 p-1 rounded
peer-placeholder-shown:top-5 md:peer-placeholder-shown:top-8 transition-all peer-placeholder-shown:bg-transparent 
peer-placeholder-shown:text-opacity-40 peer-placeholder-shown:text-white peer-placeholder-shown:text-xl peer-placeholder-shown:pl-6 md:peer-placeholder-shown:pl-0
'>Password</label>
                </div>
            </div>

            <div className='md:flex w-3/4 bg-[#424769] flex-col mb-4  border-l-2 border-orange-300' >
                <div className='p-4 flex flex-col w-full md:flex-row md:space-y-0 md:space-x-6 md:h-24 h-20 relative'>
                    <input type="text" id='password' placeholder='Password' className='w-full h-full p-2 bg-[#424769] text-white outline-none peer relative placeholder-transparent focus:outline-none' />
                    <label htmlFor="password"
                        className='absolute left-0 text-gray-400 text-sm -top-0 p-1 rounded
peer-placeholder-shown:top-5 md:peer-placeholder-shown:top-8 transition-all peer-placeholder-shown:bg-transparent 
peer-placeholder-shown:text-opacity-40 peer-placeholder-shown:text-white peer-placeholder-shown:text-xl peer-placeholder-shown:pl-6 md:peer-placeholder-shown:pl-0
'>Repeat Password</label>
                </div>
            </div>


            <button onClick={handleChangeView} className='flex w-3/4 text-gray-500 text-sm justify-end'>Do you have account?</button>


            <div className='flex h-1/2 flex-col w-3/4 my-9 '>
                <div className='flex flex-col space-y-12 md:w-1/2 md:flex-row md:space-y-0 md:space-x-4'>
                    <button className='rounded-xl bg-orange-300 font-extrabold shadow-3xl shadow-orange-300 w-full h-14'>
                    Create Account
                    </button>
                </div>
            </div>
        </>
    )
}
