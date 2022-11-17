import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/dashboard/header";
import Sidebar from "../../components/dashboard/sidebar";

export default function LayoutDashboard() {
  return (
    <div>
      <div className="flex bg-background-dashboard bg-[#f5fbfd]">
        <Sidebar />
        <div className="flex-1 flex flex-col overflow-x-hidden mx-[38px] mt-[30px]">
          <Header />
          <div className="mt-[50px]">
            {/* Conteúdo da Página */}
            <Outlet />
          </div>
        </div>
      </div>
    </div>

  );
}
