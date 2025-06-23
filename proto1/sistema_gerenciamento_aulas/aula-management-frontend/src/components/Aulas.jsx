import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, Users, Search, Plus } from 'lucide-react';

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
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold tracking-tight">Aulas</h2>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Nova Aula
        </Button>
      </div>

      {/* Filtros */}
      <Card>
        <CardHeader>
          <CardTitle>Filtros de Busca</CardTitle>
          <CardDescription>Filtre as aulas por data, tema ou instrutor</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <div className="space-y-2">
              <Label htmlFor="dataInicio">Data Início</Label>
              <Input
                id="dataInicio"
                type="date"
                value={filtros.dataInicio}
                onChange={(e) => setFiltros(prev => ({ ...prev, dataInicio: e.target.value }))}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="dataFim">Data Fim</Label>
              <Input
                id="dataFim"
                type="date"
                value={filtros.dataFim}
                onChange={(e) => setFiltros(prev => ({ ...prev, dataFim: e.target.value }))}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="tema">Tema</Label>
              <Input
                id="tema"
                placeholder="Ex: Yoga, Pilates..."
                value={filtros.tema}
                onChange={(e) => setFiltros(prev => ({ ...prev, tema: e.target.value }))}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="instrutorId">ID do Instrutor</Label>
              <Input
                id="instrutorId"
                placeholder="ID do instrutor"
                value={filtros.instrutorId}
                onChange={(e) => setFiltros(prev => ({ ...prev, instrutorId: e.target.value }))}
              />
            </div>
            <div className="flex items-end">
              <Button onClick={carregarAulas} disabled={loading} className="w-full">
                <Search className="mr-2 h-4 w-4" />
                {loading ? 'Buscando...' : 'Buscar'}
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {error && (
        <Alert variant="destructive">
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {/* Lista de Aulas */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {aulas.map((aula) => (
          <Card key={aula.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex justify-between items-start">
                <CardTitle className="text-lg">{aula.nome}</CardTitle>
                <Badge variant="secondary">{aula.tema}</Badge>
              </div>
              <CardDescription>
                Instrutor: {aula.instrutor?.nome || 'Não informado'}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex items-center text-sm text-muted-foreground">
                  <Calendar className="mr-2 h-4 w-4" />
                  {formatarData(aula.data_hora)}
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Clock className="mr-2 h-4 w-4" />
                  {aula.duracao_minutos} minutos
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Users className="mr-2 h-4 w-4" />
                  Capacidade: {aula.capacidade} pessoas
                </div>
              </div>
              <div className="mt-4 flex gap-2">
                <Button variant="outline" size="sm" className="flex-1">
                  Editar
                </Button>
                <Button variant="outline" size="sm" className="flex-1">
                  Ver Reservas
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {aulas.length === 0 && !loading && (
        <Card>
          <CardContent className="flex flex-col items-center justify-center py-8">
            <Calendar className="h-12 w-12 text-muted-foreground mb-4" />
            <p className="text-lg font-medium">Nenhuma aula encontrada</p>
            <p className="text-muted-foreground">Tente ajustar os filtros ou adicione uma nova aula</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default Aulas;

