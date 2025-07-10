import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import LoginPage from './pages/login.jsx';
import DashboardPage from './pages/dashboard.jsx';
import RegisterPage from './pages/register.jsx';
import CadastroLeitorPage from './pages/cadastro-leitor.jsx';
import CadastroLivroPage from './pages/cadastro-livro.jsx';
import CadastroReservaPage from './pages/cadastro-reserva.jsx';
import ConsultarLeitorPage from './pages/consultar-leitor.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/cadastro-leitor" element={<CadastroLeitorPage />} />
        <Route path="/cadastro-livro" element={<CadastroLivroPage />} />
        <Route path="/cadastro-reserva" element={<CadastroReservaPage />} />
        <Route path="/consultar-leitor" element={<ConsultarLeitorPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
