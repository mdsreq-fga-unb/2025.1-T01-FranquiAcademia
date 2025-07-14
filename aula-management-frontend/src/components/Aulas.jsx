import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { 
  Calendar, 
  Clock, 
  Users, 
  Search, 
  Plus, 
  Filter,
  BookOpen,
  User,
  MapPin,
  Edit,
  Eye,
  RefreshCw
} from 'lucide-react';
import '../App.css';

const Aulas = () => {
  const [aulas, setAulas] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [filtros, setFiltros] = useState({
    dataInicio: '',
    dataFim: '',
    tema: '',
    instrutorId: ''
  });

  useEffect(() => {
    carregarAulas();
  }, []);

  const carregarAulas = async () => {
    setLoading(true);
    setError('');
    
    try {
      const params = new URLSearchParams();
      if (filtros.dataInicio) params.append('data_inicio', filtros.dataInicio);
      if (filtros.dataFim) params.append('data_fim', filtros.dataFim);
      if (filtros.tema) params.append('tema', filtros.tema);
      if (filtros.instrutorId) params.append('instrutor_id', filtros.instrutorId);

      const response = await axios.get(`/aulas?${params}`);
      setAulas(response.data);
    } catch (err) {
      setError('Erro ao carregar aulas');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const formatarData = (dataString) => {
    const data = new Date(dataString);
    return data.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getStatusColor = (dataAula) => {
    const agora = new Date();
    const dataAulaObj = new Date(dataAula);
    
    if (dataAulaObj < agora) {
      return 'bg-gray-100 text-gray-800'; // Passada
    } else if (dataAulaObj.getTime() - agora.getTime() < 24 * 60 * 60 * 1000) {
      return 'bg-yellow-100 text-yellow-800'; // Próxima (24h)
    } else {
      return 'bg-green-100 text-green-800'; // Futura
    }
  };

  const getStatusText = (dataAula) => {
    const agora = new Date();
    const dataAulaObj = new Date(dataAula);
    
    if (dataAulaObj < agora) {
      return 'Concluída';
    } else if (dataAulaObj.getTime() - agora.getTime() < 24 * 60 * 60 * 1000) {
      return 'Próxima';
    } else {
      return 'Agendada';
    }
  };

  const AulaCard = ({ aula }) => (
    <Card className="card-modern hover-lift group">
      <CardHeader className="pb-4">
        <div className="flex justify-between items-start">
          <div className="space-y-2">
            <CardTitle className="text-lg group-hover:text-primary transition-colors">
              {aula.nome}
            </CardTitle>
            <div className="flex items-center gap-2">
              <Badge variant="secondary" className="text-xs">
                {aula.tema}
              </Badge>
              <Badge className={`text-xs ${getStatusColor(aula.data_hora)}`}>
                {getStatusText(aula.data_hora)}
              </Badge>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-3">
          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <User className="w-4 h-4 text-primary" />
            <span className="font-medium">Instrutor:</span>
            <span>{aula.instrutor?.nome || 'Não informado'}</span>
          </div>
          
          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <Calendar className="w-4 h-4 text-primary" />
            <span className="font-medium">Data:</span>
            <span>{formatarData(aula.data_hora)}</span>
          </div>
          
          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <Clock className="w-4 h-4 text-primary" />
            <span className="font-medium">Duração:</span>
            <span>{aula.duracao_minutos} minutos</span>
          </div>
          
          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <Users className="w-4 h-4 text-primary" />
            <span className="font-medium">Capacidade:</span>
            <span>{aula.capacidade} pessoas</span>
          </div>
        </div>
        
        <div className="flex gap-2 pt-2">
          <Button variant="outline" size="sm" className="flex-1 hover-lift">
            <Edit className="w-4 h-4 mr-2" />
            Editar
          </Button>
          <Button variant="outline" size="sm" className="flex-1 hover-lift">
            <Eye className="w-4 h-4 mr-2" />
            Reservas
          </Button>
        </div>
      </CardContent>
    </Card>
  );

  const EmptyState = () => (
    <Card className="card-modern">
      <CardContent className="flex flex-col items-center justify-center py-12">
        <div className="p-4 bg-muted rounded-full mb-4">
          <BookOpen className="h-8 w-8 text-muted-foreground" />
        </div>
        <h3 className="text-lg font-semibold mb-2">Nenhuma aula encontrada</h3>
        <p className="text-muted-foreground text-center mb-6 max-w-md">
          Não encontramos aulas com os filtros aplicados. Tente ajustar os critérios de busca ou adicione uma nova aula.
        </p>
        <Button className="btn-primary">
          <Plus className="w-4 h-4 mr-2" />
          Adicionar Aula
        </Button>
      </CardContent>
    </Card>
  );

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gradient">Aulas</h1>
          <p className="text-muted-foreground mt-1">Gerencie e visualize todas as aulas do sistema</p>
        </div>
        <div className="flex gap-3">
          <Button 
            onClick={carregarAulas} 
            disabled={loading}
            variant="outline"
            className="hover-lift"
          >
            <RefreshCw className={`w-4 h-4 mr-2 ${loading ? 'animate-spin' : ''}`} />
            Atualizar
          </Button>
          <Button className="btn-primary">
            <Plus className="mr-2 h-4 w-4" />
            Nova Aula
          </Button>
        </div>
      </div>

      {/* Filtros */}
      <Card className="card-modern">
        <CardHeader className="pb-4">
          <div className="flex items-center gap-2">
            <Filter className="w-5 h-5 text-primary" />
            <CardTitle className="text-lg">Filtros de Busca</CardTitle>
          </div>
          <CardDescription>Filtre as aulas por data, tema ou instrutor para encontrar o que procura</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <div className="form-field">
              <Label htmlFor="dataInicio" className="text-sm font-medium">Data Início</Label>
              <Input
                id="dataInicio"
                type="date"
                value={filtros.dataInicio}
                onChange={(e) => setFiltros(prev => ({ ...prev, dataInicio: e.target.value }))}
                className="form-input"
              />
            </div>
            <div className="form-field">
              <Label htmlFor="dataFim" className="text-sm font-medium">Data Fim</Label>
              <Input
                id="dataFim"
                type="date"
                value={filtros.dataFim}
                onChange={(e) => setFiltros(prev => ({ ...prev, dataFim: e.target.value }))}
                className="form-input"
              />
            </div>
            <div className="form-field">
              <Label htmlFor="tema" className="text-sm font-medium">Tema</Label>
              <Input
                id="tema"
                placeholder="Ex: Yoga, Pilates..."
                value={filtros.tema}
                onChange={(e) => setFiltros(prev => ({ ...prev, tema: e.target.value }))}
                className="form-input"
              />
            </div>
            <div className="form-field">
              <Label htmlFor="instrutorId" className="text-sm font-medium">ID do Instrutor</Label>
              <Input
                id="instrutorId"
                placeholder="ID do instrutor"
                value={filtros.instrutorId}
                onChange={(e) => setFiltros(prev => ({ ...prev, instrutorId: e.target.value }))}
                className="form-input"
              />
            </div>
            <div className="flex items-end">
              <Button onClick={carregarAulas} disabled={loading} className="w-full btn-primary">
                <Search className="mr-2 h-4 w-4" />
                {loading ? 'Buscando...' : 'Buscar'}
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {error && (
        <Alert variant="destructive" className="animate-scale-in">
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {/* Estatísticas Rápidas */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="metric-card">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <BookOpen className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Total de Aulas</p>
                <p className="text-2xl font-bold">{aulas.length}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="metric-card">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-green-100 rounded-lg">
                <Calendar className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Hoje</p>
                <p className="text-2xl font-bold">
                  {aulas.filter(aula => {
                    const hoje = new Date().toDateString();
                    const dataAula = new Date(aula.data_hora).toDateString();
                    return hoje === dataAula;
                  }).length}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="metric-card">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-purple-100 rounded-lg">
                <User className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Instrutores</p>
                <p className="text-2xl font-bold">
                  {new Set(aulas.map(aula => aula.instrutor?.id).filter(Boolean)).size}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="metric-card">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-orange-100 rounded-lg">
                <Users className="w-5 h-5 text-orange-600" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Capacidade Total</p>
                <p className="text-2xl font-bold">
                  {aulas.reduce((total, aula) => total + (aula.capacidade || 0), 0)}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Lista de Aulas */}
      {aulas.length === 0 && !loading ? (
        <EmptyState />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {aulas.map((aula) => (
            <AulaCard key={aula.id} aula={aula} />
          ))}
        </div>
      )}

      {/* Loading State */}
      {loading && (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <Card key={i} className="card-modern">
              <CardHeader>
                <div className="skeleton h-6 w-3/4 mb-2" />
                <div className="skeleton h-4 w-1/2" />
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="skeleton h-4 w-full" />
                  <div className="skeleton h-4 w-2/3" />
                  <div className="skeleton h-4 w-1/2" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default Aulas;

