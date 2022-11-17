import React from "react";
import Person from "../../../assets/person.jpg";
import { FaStar } from "react-icons/fa";

export default function Avaliacoes() {
  return (
    <div>
      <p>Avaliações</p>
      <div className="w-full bg-white p-4 flex flex-col rounded-md shadow-md">
        <div className="flex">
          <img
            className="h-[70px] w-[70px] border-[4px] border-[#daeefe] rounded-full"
            src={Person}
            alt="Foto do usuário"
          />

          <div className="ml-3">
            <p>Rafaela Resenda</p>
            <div className="flex">
              <FaStar className="h-[20px] w-[20px] text-blue-500" />
              <FaStar className="h-[20px] w-[20px] text-blue-500" />
              <FaStar className="h-[20px] w-[20px] text-blue-500" />
              <FaStar className="h-[20px] w-[20px] text-blue-500" />
              <FaStar className="h-[20px] w-[20px] text-blue-500" />
            </div>
            <p className=" p-1 border-2 border-[#daeefe] rounded-md w-[300px]">
              aaaaaaaaaaaaaaaaaaaaaaaaaaaa
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
