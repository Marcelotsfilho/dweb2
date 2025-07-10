import React from "react";
import { FaHome } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function CadastroLivroPage() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <button className="flex items-center gap-2 mb-4 text-green-600 hover:text-green-800 transition self-start ml-4" onClick={() => navigate('/dashboard')}>
          <FaHome className="text-xl" /> Home
        </button>
        <h1 className="text-2xl font-bold mb-6 text-center">Cadastro de Livro</h1>
        <form>
          <input className="block w-full mb-4 p-2 border rounded" placeholder="ISBN" />
          <input className="block w-full mb-4 p-2 border rounded" placeholder="Título do Livro" />
          <input className="block w-full mb-4 p-2 border rounded" placeholder="Autor" />
          <input className="block w-full mb-4 p-2 border rounded" placeholder="Categoria" />
          <button className="w-full bg-green-600 text-white p-2 rounded hover:bg-green-700 transition">Cadastrar</button>
        </form>
      </div>
    </div>
  );
}

export default CadastroLivroPage;
