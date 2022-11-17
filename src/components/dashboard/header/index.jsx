import React from 'react'
import Logo from '../../../assets/logo.png';
import { FaRegEnvelope } from "react-icons/fa";


export default function Header() {
  return (
    <div className="flex justify-between items-center w-full h-16 bg-white rounded-full shadow-md">
      <div className='flex flex-col justify-start ml-[25px]'>
        <p className='ml-4  font-bold text-lg'>Nome da Rota</p>
      </div>
      <div className='flex items-center justify-center mr-[25px]'>
        <FaRegEnvelope className='h-5 w-5 mr-[30px]' />
        <p className='mr-[10px] font-bold'>Doutor Blabla</p>
        <img className="h-10 w-10 rounded-full" src={Logo} alt="logo" />
      </div>
    </div>
  )
}
