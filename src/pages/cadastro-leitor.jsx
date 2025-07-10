import React from "react";
import { FaHome } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function CadastroLeitorPage() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <button className="flex items-center gap-2 mb-4 text-blue-600 hover:text-blue-800 transition ml-4" onClick={() => navigate('/dashboard')}>
          <FaHome className="text-xl" /> Home
        </button>
        <h1 className="text-2xl font-bold mb-6 text-center">Cadastro de Leitor</h1>
        <form>
          <input className="block w-full mb-4 p-2 border rounded" placeholder="Matricula" />
          <input className="block w-full mb-4 p-2 border rounded" placeholder="Curso" />
          <input className="block w-full mb-4 p-2 border rounded" placeholder="Nome do Leitor" />
          <input className="block w-full mb-4 p-2 border rounded" placeholder="Afiliação" />
          <input className="block w-full mb-4 p-2 border rounded" placeholder="CPF" />
          <button className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition">Cadastrar</button>
        </form>
      </div>
    </div>
  );
}

export default CadastroLeitorPage;
