import React from "react";
import { useNavigate } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();
  return (
    <aside className="h-screen w-60 bg-gray-800 text-white flex flex-col py-8 px-4 shadow-lg">
      <h2 className="text-2xl font-bold mb-8 text-center">Biblioteca</h2>
      <nav className="flex flex-col gap-4">
        <button className="text-left py-2 px-3 rounded hover:bg-gray-700 transition" onClick={() => navigate("/cadastro-leitor")}>Realizar Cadastro Leitor</button>
        <button className="text-left py-2 px-3 rounded hover:bg-gray-700 transition" onClick={() => navigate("/cadastro-livro")}>Realizar Cadastro Livro</button>
        <button className="text-left py-2 px-3 rounded hover:bg-gray-700 transition" onClick={() => navigate("/cadastro-reserva")}>Realizar Cadastro Reserva</button>
        <button className="text-left py-2 px-3 rounded hover:bg-gray-700 transition" onClick={() => navigate("/consultar-leitor")}>Consultar Leitor</button>
      </nav>
    </aside>
  );
}

export default Sidebar;
