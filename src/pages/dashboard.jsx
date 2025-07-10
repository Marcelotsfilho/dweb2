import Sidebar from '../components/Sidebar';
import RecentBooks from '../components/RecentBooks';
import { useState } from 'react';

function DashboardPage() {
  // Mock dos dados
  const [stats] = useState({
    totalLivros: 120,
    totalEmprestados: 35,
    totalReservados: 12,
    leitoresAtivos: 80,
    leitoresBloqueados: 5,
  });
  const [recentBooks] = useState([
    { titulo: 'O Senhor dos Anéis', autor: 'J.R.R. Tolkien', tipo: 'Empréstimo', data: '2025-07-09' },
    { titulo: 'Dom Casmurro', autor: 'Machado de Assis', tipo: 'Reserva', data: '2025-07-08' },
    { titulo: '1984', autor: 'George Orwell', tipo: 'Empréstimo', data: '2025-07-07' },
    { titulo: 'A Revolução dos Bichos', autor: 'George Orwell', tipo: 'Reserva', data: '2025-07-06' },
  ]);

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <main className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded shadow p-6 flex flex-col items-center">
            <span className="text-4xl font-bold text-blue-600">{stats.totalLivros}</span>
            <span className="mt-2 text-gray-700">Total de Livros</span>
          </div>
          <div className="bg-white rounded shadow p-6 flex flex-col items-center">
            <span className="text-4xl font-bold text-green-600">{stats.totalEmprestados}</span>
            <span className="mt-2 text-gray-700">Livros Emprestados</span>
          </div>
          <div className="bg-white rounded shadow p-6 flex flex-col items-center">
            <span className="text-4xl font-bold text-yellow-600">{stats.totalReservados}</span>
            <span className="mt-2 text-gray-700">Livros Reservados</span>
          </div>
          <div className="bg-white rounded shadow p-6 flex flex-col items-center">
            <span className="text-4xl font-bold text-purple-600">{stats.leitoresAtivos}</span>
            <span className="mt-2 text-gray-700">Leitores Ativos</span>
          </div>
          <div className="bg-white rounded shadow p-6 flex flex-col items-center">
            <span className="text-4xl font-bold text-red-600">{stats.leitoresBloqueados}</span>
            <span className="mt-2 text-gray-700">Leitores Bloqueados</span>
          </div>
        </section>
        <RecentBooks books={recentBooks} />
      </main>
    </div>
  );
}

export default DashboardPage;
