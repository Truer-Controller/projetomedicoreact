import React from 'react'
import Person from '../../../assets/person.jpg';
import { FaStar } from "react-icons/fa";


export default function Perfil() {
    return (
        <div className='flex bg-white w-full rounded-xl shadow-md pt-[40px] pl-[40px] pb-[100px]'>
            <div className='flex flex-col'>
                <img className="h-[250px] w-[250px] border-[4px] border-[#daeefe] rounded-full" src={Person} alt="Foto do usuário" />
                <div className='flex justify-center mt-[15px]'>
                    <FaStar className='h-[30px] w-[30px] text-blue-500' />
                    <FaStar className='h-[30px] w-[30px] text-blue-500' />
                    <FaStar className='h-[30px] w-[30px] text-blue-500' />
                    <FaStar className='h-[30px] w-[30px] text-blue-500' />
                    <FaStar className='h-[30px] w-[30px] text-blue-500' />
                </div>
                <a className='underline text-center text-[15px] text-blue-400 cursor-pointer'>Ver opniões</a>

            </div>
            <div className='ml-[50px] flex-1 flex flex-col gap-[25px]'>
                <div>
                    <p className='font-medium text-gray-500 text-[18px]'>Doutor(a)</p>
                    <p className='font-medium text-gray-700 text-[40px]'>Rafaela Resenda Bevenina</p>
                </div>
                <div>
                    <p className='font-medium text-gray-500 text-[18px]'>Especialização</p>
                    <p className='font-medium text-gray-700 text-[25px]'>Carrometria, lulismo</p>
                </div>
                <div>
                    <p className='font-medium text-gray-500 text-[18px]'>+ Informaçoes</p>
                    <p className='font-medium text-gray-600 text-[18px]'>Número de registro: CRM: 212039 RQE DE PSIQUIATRIA (NÃO ENCONTRADO),
                        A telemedicina já se consolidou como um mecanismo facilitador do acesso da população com os serviços em saúde e é regulamentada pelo CFM (Conselho Federal de Medicina).

                        A consulta médica de maneira remota em Psiquiatria se dá por meio de tecnologias de comunicação online que realizam chamadas de vídeos. Os pacientes são sempre orientados a escolher um lugar tranquilo, onde se sintam mais à vontade para falar sobre suas questões internas.</p>
                </div>
            </div>
        </div>
    )
}

