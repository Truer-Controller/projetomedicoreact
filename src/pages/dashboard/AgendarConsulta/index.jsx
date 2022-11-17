import React from "react";
import Select from "react-select";
import { FaStar, FaRegCalendarCheck } from "react-icons/fa";
import Person from "../../../assets/person.jpg";

export default function AgendarConsulta() {
  return (
    <div>
      <div className="flex gap-5">
        <div className="flex flex-col bg-white py-7 px-16 rounded-md shadow-md justify-center items-center">
          <img
            className="h-[190px] w-[190px] border-[4px] border-[#daeefe] rounded-full"
            src={Person}
            alt="Foto do usuário"
          />
          <p className="font-bold text-gray-700 text-[20px]">Nome do médico</p>
          <p className="font-medium text-gray-500 text-[16px]">
            Especialização
          </p>
          <p className="font-medium text-gray-500 text-[16px]">CRM: ??????</p>
          <div className="flex mt-[15px]">
            <FaStar className="h-[20px] w-[20px] text-blue-500" />
            <FaStar className="h-[20px] w-[20px] text-blue-500" />
            <FaStar className="h-[20px] w-[20px] text-blue-500" />
            <FaStar className="h-[20px] w-[20px] text-blue-500" />
            <FaStar className="h-[20px] w-[20px] text-blue-500" />
          </div>
          <a className="underline text-center text-[15px] text-blue-400 cursor-pointer">
            Ver opniões
          </a>
        </div>
        <div className="flex flex-1 flex-col bg-white rounded-md shadow-md p-5 gap-5">
          <div className="flex items-center">
            <FaRegCalendarCheck className="h-[40px] w-[40px] text-blue-600" />
            <p className="ml-4 font-medium text-gray-600 text-[22px]">
              Agende sua consulta
            </p>
          </div>
          <div className="flex ">
            <div className="flex flex-col gap-5">
              <div>
                <p className="font-medium text-gray-500 text-[20px] mb-3">
                  Tipo de Consulta
                </p>
                <div className="flex gap-3">
                  <span className=" border-2 border-blue-400 p-1 rounded-md text-blue-400 cursor-pointer ">
                    Presencial
                  </span>
                  <span className=" border-2 border-blue-400 p-1 rounded-md text-blue-400 cursor-pointer ">
                    Teleconsulta
                  </span>
                </div>
              </div>
              <div className="flex flex-col">
                <label
                  className="font-medium text-gray-500 text-[20px] mb-2"
                  htmlFor="endereco"
                >
                  Endereço
                </label>
                <select id="endereco" className="border">
                  <option value="1">Rua Avenida Ipanema</option>
                  <option value="1">Rua Avenida Ipanema</option>
                  <option value="1">Rua Avenida Ipanema</option>
                </select>
              </div>
              <div className="flex flex-col">
                <label
                  className="font-medium text-gray-500 text-[20px] mb-2"
                  htmlFor="convenio"
                >
                  Convênio
                </label>
                <select id="endereco" className="border">
                  <option value="1">Funserv</option>
                  <option value="1">Bradesco Saúde</option>
                </select>
              </div>
            </div>
            <div className="ml-[140px]">
                <p className="font-medium text-gray-500 text-[20px] mb-3">Data da consulta</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
