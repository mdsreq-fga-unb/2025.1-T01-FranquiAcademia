import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger,
  DropdownMenuSeparator
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { 
  User, 
  LogOut, 
  Calendar, 
  BookOpen, 
  MessageSquare, 
  Settings, 
  BarChart3,
  Upload,
  Menu,
  X,
  BookOpenCheck
} from 'lucide-react';
import '../App.css';

const Navbar = ({ currentPage, onPageChange }) => {
  const { user, logout } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: BarChart3, description: 'Visão geral e métricas' },
    { id: 'aulas', label: 'Aulas', icon: BookOpen, description: 'Gerenciar aulas' },
    { id: 'reservas', label: 'Reservas', icon: Calendar, description: 'Controlar reservas' },
    { id: 'mensagens', label: 'Mensagens', icon: MessageSquare, description: 'Mensagens automáticas' },
    { id: 'regras', label: 'Regras', icon: Settings, description: 'Regras de envio' },
    { id: 'importacao', label: 'Importação', icon: Upload, description: 'Importar dados' },
  ];

  const getInitials = (name) => {
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  const NavItem = ({ item, isMobile = false }) => {
    const Icon = item.icon;
    const isActive = currentPage === item.id;
    
    return (
      <button
        onClick={() => {
          onPageChange(item.id);
          if (isMobile) setMobileMenuOpen(false);
        }}
        className={`
          group relative flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200
          ${isActive 
            ? 'bg-primary text-primary-foreground shadow-md' 
            : 'text-muted-foreground hover:text-foreground hover:bg-accent/50'
          }
          ${isMobile ? 'w-full justify-start' : ''}
        `}
      >
        <Icon className={`w-5 h-5 ${isActive ? 'text-primary-foreground' : ''}`} />
        <div className={`${isMobile ? 'block' : 'hidden lg:block'} text-left`}>
          <div className={`font-medium text-sm ${isActive ? 'text-primary-foreground' : ''}`}>
            {item.label}
          </div>
          {isMobile && (
            <div className={`text-xs ${isActive ? 'text-primary-foreground/80' : 'text-muted-foreground'}`}>
              {item.description}
            </div>
          )}
        </div>
        
        {/* Active indicator for desktop */}
        {isActive && !isMobile && (
          <div className="absolute -left-1 top-1/2 -translate-y-1/2 w-1 h-8 bg-primary-foreground rounded-r-full" />
        )}
      </button>
    );
  };

  return (
    <>
      <nav className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 bg-primary rounded-xl">
                <BookOpenCheck className="w-6 h-6 text-primary-foreground" />
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl font-bold text-gradient">Sistema de Aulas</h1>
                <p className="text-xs text-muted-foreground">Gestão inteligente</p>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-2">
              {menuItems.map((item) => (
                <NavItem key={item.id} item={item} />
              ))}
            </div>

            {/* User Menu */}
            <div className="flex items-center gap-4">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-10 w-10 rounded-full hover-lift">
                    <Avatar className="h-10 w-10">
                      <AvatarFallback className="bg-primary text-primary-foreground font-medium">
                        {getInitials(user?.nome || 'U')}
                      </AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-64" align="end" forceMount>
                  <div className="flex items-center gap-3 p-3">
                    <Avatar className="h-12 w-12">
                      <AvatarFallback className="bg-primary text-primary-foreground font-medium">
                        {getInitials(user?.nome || 'U')}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col space-y-1">
                      <p className="font-medium text-sm">{user?.nome}</p>
                      <p className="text-xs text-muted-foreground truncate max-w-[180px]">
                        {user?.email}
                      </p>
                    </div>
                  </div>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem 
                    onClick={() => onPageChange('perfil')}
                    className="cursor-pointer"
                  >
                    <User className="mr-2 h-4 w-4" />
                    <span>Perfil</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="cursor-pointer">
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Configurações</span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={logout} className="cursor-pointer text-red-600 focus:text-red-600">
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Sair</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="sm"
                className="lg:hidden"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-background/80 backdrop-blur-sm">
          <div className="fixed inset-y-0 left-0 w-80 bg-background border-r shadow-xl">
            <div className="flex items-center gap-3 p-6 border-b">
              <div className="flex items-center justify-center w-12 h-12 bg-primary rounded-xl">
                <BookOpenCheck className="w-7 h-7 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-lg font-bold text-gradient">Sistema de Aulas</h1>
                <p className="text-sm text-muted-foreground">Gestão inteligente</p>
              </div>
            </div>
            
            <div className="p-4 space-y-2">
              {menuItems.map((item) => (
                <NavItem key={item.id} item={item} isMobile />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;

