import React from "react";
import Logo from "../../../assets/logo.png";
import {
  FaHandHoldingMedical,
  FaUserMd,
  FaRegCalendarAlt,
  FaRegStar,
  FaThLarge,
} from "react-icons/fa";

export default function Sidebar() {
  return (
    <div className="bg-white w-64 h-screen px-7 sticky left-0 top-0 overflow-hidden shadow-lg">
      <div className="flex py-6 justify-center items-center cursor-pointer">
        <FaHandHoldingMedical className="h-10 w-10 text-blue-500" />
        <p className="ml-4 inline-flex font-bold text-[19px] hover:text-blue-500">
          System Medical
        </p>
      </div>
      <hr />
      <div className="flex flex-col justify-between mt-8 ">
        <div className="flex flex-col justify-center gap-[25px] cursor-pointer">
          <div className="flex justify-left items-center group">
          <FaThLarge className="h-5 w-5 group-hover:text-blue-500" />
            <p className="ml-4 inline-flex font-medium text-lg group-hover:text-blue-500">
              Dashboard
            </p>
          </div>
          <div className="flex justify-left items-center group ">
            <FaRegCalendarAlt className="h-5 w-5 text-[#252B42] group-hover:text-blue-500" />
            <p className="ml-4 inline-flex font-medium text-lg group-hover:text-blue-500">Agenda</p>
          </div>
          <div className="flex  justify-left items-center group">
          <FaRegCalendarAlt className="h-5 w-5 text-[#252B42] group-hover:text-blue-500" />
            <p className="ml-4 inline-flex font-medium text-lg group-hover:text-blue-500">Agendar Consulta</p>
          </div>
          <div className="flex  justify-left items-center group">
            <FaRegStar className="h-5 w-5 text-[#252B42] group-hover:text-blue-500" />
            <p className="ml-4 inline-flex font-medium text-lg group-hover:text-blue-500">Avaliações</p>
          </div>
          <div className="flex  justify-left items-center group">
            <FaUserMd className="h-5 w-5 text-[#252B42] group-hover:text-blue-500" />
            <p className="ml-4 inline-flex font-medium text-[17px] group-hover:text-blue-500">Perfil</p>
          </div>
          <div className="flex  justify-left items-center group">
            <FaUserMd className="h-5 w-5 text-[#252B42] group-hover:text-blue-500" />
            <p className="ml-4 inline-flex font-medium text-[17px] group-hover:text-blue-500">Histórico</p>
          </div>
        </div>
      </div>
    </div>
  );
}
