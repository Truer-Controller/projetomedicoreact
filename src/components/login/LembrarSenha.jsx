import React from "react";
import { Link } from "react-router-dom";

export default function FormLogin() {
  return (
    <form action="">
      <div className="mb-4">
        <input
          type="text"
          placeholder="E-mail"
          className="appearance-none block w-full px-4 py-3 leading-tight text-gray-700 bg-gray-50 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none"
        />
      </div>
      <div className="mb-4">
        <button className="inline-block w-full px-8 py-4 leading-none text-white bg-indigo-600 hover:bg-indigo-700 font-semibold rounded shadow">
          Enviar
        </button>
      </div>
      <div className="nb-4 justify-center flex flex-row">
        <Link to="/login">
          <p className="text-indigo-600 font-nunito">Voltar</p>
        </Link>
      </div>
    </form>
  );
}
