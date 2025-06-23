import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Calendar, Users, BookOpen, Clock, Download } from 'lucide-react';

const Dashboard = () => {
  const [reservasData, setReservasData] = useState(null);
  const [primeirasAulasData, setPrimeirasAulasData] = useState(null);
  const [aulasPorProfessorData, setAulasPorProfessorData] = useState(null);
  const [horariosData, setHorariosData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  
  const [filtros, setFiltros] = useState({
    dataInicio: '',
    dataFim: '',
    agrupamento: 'diario'
  });

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8'];

  useEffect(() => {
    carregarDados();
  }, []);

  const carregarDados = async () => {
    setLoading(true);
    setError('');
    
    try {
      const params = new URLSearchParams();
      if (filtros.dataInicio) params.append('data_inicio', filtros.dataInicio);
      if (filtros.dataFim) params.append('data_fim', filtros.dataFim);
      if (filtros.agrupamento) params.append('agrupamento', filtros.agrupamento);

      const [reservasRes, primeirasRes, professoresRes, horariosRes] = await Promise.all([
        axios.get(`/dashboard/reservas?${params}`),
        axios.get(`/dashboard/primeiras_aulas?${params}`),
        axios.get(`/dashboard/aulas_por_professor?${params}`),
        axios.get(`/dashboard/horarios_reservas?${params}`)
      ]);

      setReservasData(reservasRes.data);
      setPrimeirasAulasData(primeirasRes.data);
      setAulasPorProfessorData(professoresRes.data);
      setHorariosData(horariosRes.data);
    } catch (err) {
      setError('Erro ao carregar dados do dashboard');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const exportarCSV = async (tipo) => {
    try {
      const params = new URLSearchParams();
      if (filtros.dataInicio) params.append('data_inicio', filtros.dataInicio);
      if (filtros.dataFim) params.append('data_fim', filtros.dataFim);
      if (filtros.agrupamento) params.append('agrupamento', filtros.agrupamento);

      const response = await axios.get(`/dashboard/${tipo}/exportar/csv?${params}`, {
        responseType: 'blob'
      });

      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `${tipo}_dashboard.csv`);
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (err) {
      setError('Erro ao exportar dados');
      console.error(err);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
      </div>

      {/* Filtros */}
      <Card>
        <CardHeader>
          <CardTitle>Filtros</CardTitle>
          <CardDescription>Configure os filtros para visualizar os dados</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
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
              <Label htmlFor="agrupamento">Agrupamento</Label>
              <Select value={filtros.agrupamento} onValueChange={(value) => setFiltros(prev => ({ ...prev, agrupamento: value }))}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="diario">Diário</SelectItem>
                  <SelectItem value="semanal">Semanal</SelectItem>
                  <SelectItem value="mensal">Mensal</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-end">
              <Button onClick={carregarDados} disabled={loading}>
                {loading ? 'Carregando...' : 'Aplicar Filtros'}
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

      {/* Cards de Resumo */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total de Reservas</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{reservasData?.total_reservas || 0}</div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Primeiras Aulas</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{primeirasAulasData?.total_primeiras_aulas || 0}</div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Professores Ativos</CardTitle>
            <BookOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{aulasPorProfessorData?.length || 0}</div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Horários Diferentes</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{horariosData?.length || 0}</div>
          </CardContent>
        </Card>
      </div>

      {/* Gráficos */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Gráfico de Reservas */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Reservas por Período</CardTitle>
              <CardDescription>Distribuição de reservas ao longo do tempo</CardDescription>
            </div>
            <Button variant="outline" size="sm" onClick={() => exportarCSV('reservas')}>
              <Download className="h-4 w-4 mr-2" />
              CSV
            </Button>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={reservasData?.dados_agrupados || []}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="periodo" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="quantidade" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Gráfico de Aulas por Professor */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Aulas por Professor</CardTitle>
              <CardDescription>Distribuição de aulas entre professores</CardDescription>
            </div>
            <Button variant="outline" size="sm" onClick={() => exportarCSV('aulas_por_professor')}>
              <Download className="h-4 w-4 mr-2" />
              CSV
            </Button>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={aulasPorProfessorData || []}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ professor, total_aulas }) => `${professor.nome}: ${total_aulas}`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="total_aulas"
                >
                  {(aulasPorProfessorData || []).map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Gráfico de Horários */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Horários Mais Populares</CardTitle>
              <CardDescription>Horários com maior número de reservas</CardDescription>
            </div>
            <Button variant="outline" size="sm" onClick={() => exportarCSV('horarios_reservas')}>
              <Download className="h-4 w-4 mr-2" />
              CSV
            </Button>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={horariosData || []}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="horario" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="quantidade_reservas" fill="#82ca9d" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Gráfico de Primeiras Aulas */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Primeiras Aulas</CardTitle>
              <CardDescription>Novos alunos por período</CardDescription>
            </div>
            <Button variant="outline" size="sm" onClick={() => exportarCSV('primeiras_aulas')}>
              <Download className="h-4 w-4 mr-2" />
              CSV
            </Button>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={primeirasAulasData?.dados_agrupados || []}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="periodo" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="quantidade" fill="#ffc658" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;

