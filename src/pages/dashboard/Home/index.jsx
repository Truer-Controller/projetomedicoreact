import React from "react";
import IlustrationBackground from "../../../assets/AgendaConsulta.svg";
import { FaSearch } from "react-icons/fa";

export default function HomeDashboard() {
  return (
    <div className="flex justify-between first:w-full">
      <div className="flex flex-col mt-[100px]">
        <p className="text-[45px] font-bold text-blue-500">
          Agende sua Consulta!
        </p>
        <p className="text-[17px] text-gray-700">
          Procure por médicos ou especializações para agendar sua consulta.
        </p>
        <div className="flex mt-[30px] gap-[15px]">
          <input
            type="text"
            className=" px-[15px] border-[3px] py-[7px] border-blue-300 rounded-full w-full"
            placeholder="Buscar por médico ou especialização da saúde"
          />
          <button className="px-[10px] bg-blue-600 h-[40px] rounded-full text-[20px] text-white my-auto">
            <FaSearch />
          </button>
        </div>
      </div>
      <div className="flex">
        <img
          src={IlustrationBackground}
          className="h-[400px] relative "
          alt="Ilustração do Médico"
        />
      </div>
    </div>
  );
}
