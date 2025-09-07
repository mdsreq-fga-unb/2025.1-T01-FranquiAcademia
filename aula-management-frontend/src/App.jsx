import React, { useState } from 'react';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import Login from './components/Login';
import Register from './components/Register';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import Aulas from './components/Aulas';
import EditarPerfil from './components/EditarPerfil';
import MensagemForm from './components/MensagemForm'; // RF06
import { Loader2 } from 'lucide-react';
import './App.css';

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen">
      {isLogin ? (
        <Login onToggleMode={() => setIsLogin(false)} />
      ) : (
        <Register onToggleMode={() => setIsLogin(true)} />
      )}
    </div>
  );
};

const LoadingScreen = () => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
    <div className="text-center space-y-4">
      <div className="relative">
        <div className="w-16 h-16 border-4 border-primary/20 rounded-full animate-spin">
          <div className="absolute top-0 left-0 w-16 h-16 border-4 border-transparent border-t-primary rounded-full animate-spin"></div>
        </div>
      </div>
      <div className="space-y-2">
        <h2 className="text-xl font-semibold text-gradient">Carregando DeltaCore</h2>
        <p className="text-muted-foreground">Preparando sua experiência de gestão...</p>
      </div>
    </div>
  </div>
);

const ComingSoonPage = ({ title, description }) => (
  <div className="flex items-center justify-center min-h-[60vh] animate-fade-in">
    <div className="text-center space-y-6 max-w-md">
      <div className="w-24 h-24 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center mx-auto">
        <Loader2 className="w-12 h-12 text-primary animate-spin" />
      </div>
      <div className="space-y-2">
        <h2 className="text-2xl font-bold text-gradient">{title}</h2>
        <p className="text-muted-foreground">{description}</p>
      </div>
      <div className="p-4 bg-muted/50 rounded-xl">
        <p className="text-sm text-muted-foreground">
          Esta funcionalidade está sendo desenvolvida e estará disponível em breve.
        </p>
      </div>
    </div>
  </div>
);

const MainApp = () => {
  const { user, loading } = useAuth();
  const [currentPage, setCurrentPage] = useState('dashboard');

  if (loading) {
    return <LoadingScreen />;
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
        return (
          <ComingSoonPage
            title="Agendamentos"
            description="Gerencie todos os agendamentos de aulas da sua franquia"
          />
        );
      case 'mensagens':
        // RF06: formulário de criação de mensagens automatizadas
        return <MensagemForm />;
      case 'regras':
        return (
          <ComingSoonPage
            title="Automação de Comunicação"
            description="Configure regras para envio automático de mensagens aos alunos"
          />
        );
      case 'importacao':
        return (
          <ComingSoonPage
            title="Importação de Dados"
            description="Importe dados de planilhas CSV para sua franquia"
          />
        );
      case 'perfil':
        return <EditarPerfil />;
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

      {/* Footer */}
      <footer className="border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 mt-16">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-muted-foreground">
              © 2024 DeltaCore - Sistema de Gestão Inteligente. Todos os direitos reservados.
            </div>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span>Versão 1.0.0</span>
              <span>•</span>
              <span>Transformando academias em franquias de sucesso</span>
            </div>
          </div>
        </div>
      </footer>
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