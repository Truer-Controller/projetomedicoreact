import { Route, Routes } from "react-router-dom";
import LayoutDashboard from "./pages/dashboard";
import HomeDashboard from "./pages/dashboard/Home";
import Home from "./pages/Home";
import Lembrar from "./pages/Login/Lembrar";
import Login from "./pages/Login";
import Cadastro from "./pages/Login/Cadastro";
import Perfil from "./pages/dashboard/Perfil";
import Agenda from "./pages/dashboard/Agenda";
import BuscarMedico from "./pages/dashboard/BuscarMedico";
import AgendarConsulta from "./pages/dashboard/AgendarConsulta";
import Avaliacoes from "./pages/dashboard/Avaliacoes";



export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<LayoutDashboard />}>
        <Route path="/dashboard/" element={<HomeDashboard />} />
        <Route path="/dashboard/agenda" element={<Agenda/>} />
        <Route path="/dashboard/perfil" element={<Perfil/>} />
        <Route path="/dashboard/procurar-medico" element={<BuscarMedico/>} />
        <Route path="/dashboard/agendar-consulta" element={<AgendarConsulta/>} />
        <Route path="/dashboard/avaliacoes" element={<Avaliacoes/>} />
      </Route>
      <Route path="/lembrar" element={<Lembrar />} />
      <Route path="/login" element={<Login />} />
      <Route path="/cadastro" element={<Cadastro />} />
    </Routes>
  );
}