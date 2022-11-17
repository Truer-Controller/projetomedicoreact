import React from "react";
import LembrarSenha from "../../../components/login/LembrarSenha";


export default function Lembrar() {
  return (
    <div className="min-h-screen flex flex-col justify-center bg-indigo-300">
      <div className="bg-white mx-auto max-w-md py-8 px-10 shadow-lg rounded-lg border-[#000]">
        <div className="flex flex-row justify-center mb-4 font-nunito">
          <p>Recuperar Senha</p>
        </div>
        <LembrarSenha />
      </div>
    </div>
  );
}