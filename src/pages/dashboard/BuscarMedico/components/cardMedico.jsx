import React from "react";
import { FaStar, FaMapMarkerAlt } from "react-icons/fa";
import Person from "../../../../assets/person.jpg";

export default function CardMedico() {
  return (
    <div className=" flex bg-white w-[570px] h-[230px] rounded-lg shadow-md py-[20px] px-[23px]">
      <div className="my-auto ml-[5px]">
        <img
          className="h-[170px] w-[170px] border-[4px] border-[#daeefe] rounded-full"
          src={Person}
          alt="Foto do médico"
        />
      </div>
      <div className="flex-1 ml-[20px]">
        <p className="text-gray-700 font-medium text-[22px]">Nome do medico</p>
        <p className="text-gray-500 font-medium text-[17px]">Especialização</p>
        <div className="flex mt-[15px]">
          <FaStar className="h-[20px] w-[20px] text-blue-500" />
          <FaStar className="h-[20px] w-[20px] text-blue-500" />
          <FaStar className="h-[20px] w-[20px] text-blue-500" />
          <FaStar className="h-[20px] w-[20px] text-blue-500" />
          <FaStar className="h-[20px] w-[20px] text-blue-500" />
          <a className="ml-3 underline text-center text-[15px] text-blue-400 cursor-pointer">
            Ver opniões
          </a>
        </div>
        <hr className=" border-blue-400 my-2" />
        <div className="flex">
          <FaMapMarkerAlt className="h-[20px] w-[20px] text-blue-500" />
          <p className="ml-2 text-[16px] text-gray-600 font-medium ">
            Rua Avenida Ipanema, 5870
          </p>
        </div>
        <div className="mt-[10px]">
          <button className="border-2 border-blue-400 rounded-md py-[3px] px-[4px] text-blue-500 hover:text-white hover:bg-blue-400">
            Agendar Consulta
          </button>
        </div>
      </div>
    </div>
  );
}
