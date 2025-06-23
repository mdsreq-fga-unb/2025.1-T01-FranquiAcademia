import React, { useState } from 'react';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import Login from './components/Login';
import Register from './components/Register';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import Aulas from './components/Aulas';
import './App.css';

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      {isLogin ? (
        <Login onToggleMode={() => setIsLogin(false)} />
      ) : (
        <Register onToggleMode={() => setIsLogin(true)} />
      )}
    </div>
  );
};

const MainApp = () => {
  const { user, loading } = useAuth();
  const [currentPage, setCurrentPage] = useState('dashboard');

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
          <p className="mt-4 text-lg">Carregando...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return <AuthPage />;
  }

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard />;
      case 'aulas':
        return <Aulas />;
      case 'reservas':
        return <div className="p-8"><h2 className="text-2xl font-bold">Reservas (Em desenvolvimento)</h2></div>;
      case 'mensagens':
        return <div className="p-8"><h2 className="text-2xl font-bold">Mensagens (Em desenvolvimento)</h2></div>;
      case 'regras':
        return <div className="p-8"><h2 className="text-2xl font-bold">Regras de Envio (Em desenvolvimento)</h2></div>;
      case 'importacao':
        return <div className="p-8"><h2 className="text-2xl font-bold">Importação (Em desenvolvimento)</h2></div>;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar currentPage={currentPage} onPageChange={setCurrentPage} />
      <main className="container mx-auto px-4 py-8">
        {renderPage()}
      </main>
    </div>
  );
};

function App() {
  return (
    <AuthProvider>
      <MainApp />
    </AuthProvider>
  );
}

export default App;

