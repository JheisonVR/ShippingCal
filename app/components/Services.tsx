import Image from 'next/image'
import React from 'react'
import { FaTruck } from "react-icons/fa";

export const Services = () => {
  return (
    <form className="grid grid-cols-4 gap-1 w-full max-w-screen p-2 my-auto bg-yellow-100  ">
        <div className=' hover:scale-95 '>
          <input
            className="hidden "
            id="radio_1"
            type="radio"
            name="radio"
            
          />
          <label
            className="flex flex-col items-center p-4 border-2 rounded-2xl border-gray-200 cursor-pointer text-[#2F2C74] h-36 bg-slate-50 "
            htmlFor="radio_1"
          >
            <Image 
                src="https://agilex.com.co/wp-content/uploads/2023/08/Casillero-Internacional-AgilBox-Logo-2023-1024x212.png" alt="agilbox" 
                width={100}
                height={50}
            />
            <span className="text-xl font-bold mt-2">$10/kg</span>
            <ul className="text-sm mt-2">
              <li>Same Day</li>
              <li>Until 3kg</li>
            </ul>
          </label>
        </div>
        <div className='hover:scale-95 h-40'>
          <input className="hidden" id="radio_2" type="radio" name="radio" />
          <label
            className="flex flex-col items-center p-4 border-2 border-gray-200 cursor-pointer rounded-2xl text-[#2F2C74] h-36 bg-slate-50"
            htmlFor="radio_2"
          >
            <Image 
                src="https://agilexapp.co/assets/images/logo.svg" alt="agilex" 
                width={80}
                height={0}
                className='overflow-hidden bg-cover'
            />
            <span className="text-xl font-bold mt-2">$40/kg</span>
            <ul className="text-sm mt-2">
              <li>1 Day</li>
              <li>Until 10kg</li>
            </ul>
          </label>
        </div>
        <div className='hover:scale-95 h-40'>
          <input className="hidden" id="radio_3" type="radio" name="radio" />
          <label
            className="flex flex-col items-center p-4 border-2 border-gray-200 cursor-pointer rounded-2xl text-[#2F2C74] h-36 bg-slate-50"
            htmlFor="radio_3"
          >
            <div className='flex flex-row gap-1'>
                <FaTruck color='#F9B500'/>
                <span className="text-xs font-bold uppercase">Copa</span>
            </div>
            <span className="text-xl font-bold mt-2">$100/kg</span>
            <ul className="text-sm mt-2">
              <li>2 hours</li>
              <li>Until 1kg</li>
            </ul>
          </label>
        </div>
        <div className=' hover:scale-95 h-40'>
          <input className="hidden" id="radio_4" type="radio" name="radio" />
          <label
            className="flex flex-col items-center p-4 border-2 border-gray-200 cursor-pointer rounded-2xl text-[#2F2C74] h-36 bg-slate-50"
            htmlFor="radio_4"
          >
            <div className='flex flex-row gap-1'>
                <FaTruck color='#F9B500'/>
                <span className="text-xs font-bold uppercase">Nuevas Rutas</span>
            </div>
            <span className="text-xl font-bold mt-2">$80/kg</span>
            <ul className="text-sm mt-2">
              <li>Latam</li>
              <li>Until 20kg</li>
            </ul>
          </label>
        </div>
      </form>
  )
}
