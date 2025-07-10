import React from "react";

function RecentBooks({ books }) {
  return (
    <section className="bg-white rounded shadow p-6 mt-8">
      <h2 className="text-xl font-semibold mb-4">Últimos Livros Emprestados ou Reservados</h2>
      <table className="w-full text-left">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Título</th>
            <th className="py-2 px-4 border-b">Autor</th>
            <th className="py-2 px-4 border-b">Tipo</th>
            <th className="py-2 px-4 border-b">Data</th>
          </tr>
        </thead>
        <tbody>
          {books.length === 0 ? (
            <tr>
              <td colSpan={4} className="text-center py-4">Nenhum registro encontrado.</td>
            </tr>
          ) : (
            books.map((book, idx) => (
              <tr key={idx}>
                <td className="py-2 px-4 border-b">{book.titulo}</td>
                <td className="py-2 px-4 border-b">{book.autor}</td>
                <td className="py-2 px-4 border-b">{book.tipo}</td>
                <td className="py-2 px-4 border-b">{book.data}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </section>
  );
}

export default RecentBooks;
