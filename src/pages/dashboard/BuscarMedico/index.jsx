import React from "react";
import { FaSearch, FaStar, FaMapMarkerAlt } from "react-icons/fa";
import CardMedico from "./components/cardMedico";

export default function BuscarMedico() {
  return (
    <div>
      <div>
        <p className="text-[20px] font-bold text-blue-400">
          Procurar Médico / Especialização
        </p>
      </div>
      <div className="flex mt-[15px] gap-[15px] w-[500px]">
        <input
          type="text"
          className=" px-[15px] border-[3px] py-[7px] border-blue-300 rounded-full w-full"
          placeholder="Buscar por médico ou especialização da saúde"
          id="busca"
        />
        <button className="px-[10px] bg-blue-600 h-[40px] rounded-full text-[20px] text-white my-auto">
          <FaSearch />
        </button>
      </div>
      <div className="flex flex-wrap justify-start gap-[16px] pb-[50px] mt-[30px]">
        <CardMedico />
        <CardMedico />
        <CardMedico />
        <CardMedico />
        <CardMedico />
        <CardMedico />
      </div>
       
    </div>
  );
}
