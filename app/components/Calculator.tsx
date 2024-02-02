import React from 'react'
import { IoIosAirplane } from "react-icons/io";


export const Calculator = () => {
  return (
    <div className='w-full flex items-center justify-around mx-3 my-2'>
      <div className='flex flex-col items-center'>
        <h4 className='text-4xl text-yellow-500 font-semibold' >From</h4>
        <select className='text-9xl rounded-3xl text-[#2F2C74] bg-slate-50'>
          <option className='rounded-full text-5xl text-[#2F2C74]'>Col</option>
          <option className='text-5xl' >Ecu</option>
        </select>
      </div>
      <IoIosAirplane className='hover:translate-x-10 transition-all duration-1000' size={150} color='#ffb703' />
      <div className='flex flex-col items-center'>
        <h4 className='text-4xl text-yellow-500 font-semibold'>To</h4>
        <select className='text-9xl rounded-3xl text-[#2F2C74] bg-slate-50'>
          <option className='rounded-full text-5xl'>USA</option>
          <option className='text-5xl' >CAN</option>
        </select>
      </div>
        
    </div>
  )
}
