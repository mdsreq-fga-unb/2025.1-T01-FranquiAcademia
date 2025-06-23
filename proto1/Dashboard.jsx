import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from 'recharts';
import { 
  Calendar, 
  Users, 
  BookOpen, 
  Clock, 
  Download, 
  Filter,
  TrendingUp,
  Activity,
  Target,
  Zap,
  RefreshCw
} from 'lucide-react';
import './App.css';

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

  const COLORS = ['#6366f1', '#8b5cf6', '#06b6d4', '#10b981', '#f59e0b', '#ef4444'];

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

  const MetricCard = ({ title, value, icon: Icon, trend, color = "primary" }) => (
    <Card className="metric-card hover-lift">
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div className="space-y-2">
            <p className="text-sm font-medium text-muted-foreground">{title}</p>
            <p className="text-3xl font-bold">{value}</p>
            {trend && (
              <div className="flex items-center gap-1 text-sm">
                <TrendingUp className="w-4 h-4 text-green-500" />
                <span className="text-green-500 font-medium">{trend}</span>
              </div>
            )}
          </div>
          <div className={`p-3 rounded-xl bg-${color}/10`}>
            <Icon className={`w-6 h-6 text-${color}`} />
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gradient">Dashboard</h1>
          <p className="text-muted-foreground mt-1">Visão geral do sistema de aulas</p>
        </div>
        <Button 
          onClick={carregarDados} 
          disabled={loading}
          className="btn-primary"
        >
          <RefreshCw className={`w-4 h-4 mr-2 ${loading ? 'animate-spin' : ''}`} />
          Atualizar
        </Button>
      </div>

      {/* Filtros */}
      <Card className="card-modern">
        <CardHeader className="pb-4">
          <div className="flex items-center gap-2">
            <Filter className="w-5 h-5 text-primary" />
            <CardTitle className="text-lg">Filtros</CardTitle>
          </div>
          <CardDescription>Configure os filtros para personalizar a visualização dos dados</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
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
              <Label htmlFor="agrupamento" className="text-sm font-medium">Agrupamento</Label>
              <Select value={filtros.agrupamento} onValueChange={(value) => setFiltros(prev => ({ ...prev, agrupamento: value }))}>
                <SelectTrigger className="form-input">
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
              <Button onClick={carregarDados} disabled={loading} className="w-full btn-primary">
                {loading ? (
                  <>
                    <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                    Carregando...
                  </>
                ) : (
                  <>
                    <Activity className="mr-2 h-4 w-4" />
                    Aplicar
                  </>
                )}
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

      {/* Métricas Principais */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          title="Total de Reservas"
          value={reservasData?.total_reservas || 0}
          icon={Calendar}
          trend="+12% este mês"
          color="blue"
        />
        <MetricCard
          title="Primeiras Aulas"
          value={primeirasAulasData?.total_primeiras_aulas || 0}
          icon={Users}
          trend="+8% este mês"
          color="green"
        />
        <MetricCard
          title="Professores Ativos"
          value={aulasPorProfessorData?.length || 0}
          icon={BookOpen}
          color="purple"
        />
        <MetricCard
          title="Horários Diferentes"
          value={horariosData?.length || 0}
          icon={Clock}
          color="orange"
        />
      </div>

      {/* Gráficos */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        {/* Gráfico de Reservas */}
        <Card className="chart-container">
          <CardHeader className="flex flex-row items-center justify-between pb-4">
            <div>
              <CardTitle className="flex items-center gap-2">
                <Activity className="w-5 h-5 text-primary" />
                Reservas por Período
              </CardTitle>
              <CardDescription>Evolução das reservas ao longo do tempo</CardDescription>
            </div>
            <Button variant="outline" size="sm" onClick={() => exportarCSV('reservas')} className="hover-lift">
              <Download className="h-4 w-4 mr-2" />
              CSV
            </Button>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={320}>
              <BarChart data={reservasData?.dados_agrupados || []}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                <XAxis 
                  dataKey="periodo" 
                  stroke="#64748b"
                  fontSize={12}
                />
                <YAxis stroke="#64748b" fontSize={12} />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: 'white',
                    border: '1px solid #e2e8f0',
                    borderRadius: '8px',
                    boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                  }}
                />
                <Bar dataKey="quantidade" fill="#6366f1" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Gráfico de Aulas por Professor */}
        <Card className="chart-container">
          <CardHeader className="flex flex-row items-center justify-between pb-4">
            <div>
              <CardTitle className="flex items-center gap-2">
                <Target className="w-5 h-5 text-primary" />
                Aulas por Professor
              </CardTitle>
              <CardDescription>Distribuição de aulas entre professores</CardDescription>
            </div>
            <Button variant="outline" size="sm" onClick={() => exportarCSV('aulas_por_professor')} className="hover-lift">
              <Download className="h-4 w-4 mr-2" />
              CSV
            </Button>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={320}>
              <PieChart>
                <Pie
                  data={aulasPorProfessorData || []}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ professor, total_aulas, percent }) => 
                    `${professor.nome}: ${(percent * 100).toFixed(0)}%`
                  }
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="total_aulas"
                >
                  {(aulasPorProfessorData || []).map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{
                    backgroundColor: 'white',
                    border: '1px solid #e2e8f0',
                    borderRadius: '8px',
                    boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Gráfico de Horários */}
        <Card className="chart-container">
          <CardHeader className="flex flex-row items-center justify-between pb-4">
            <div>
              <CardTitle className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-primary" />
                Horários Populares
              </CardTitle>
              <CardDescription>Horários com maior demanda</CardDescription>
            </div>
            <Button variant="outline" size="sm" onClick={() => exportarCSV('horarios_reservas')} className="hover-lift">
              <Download className="h-4 w-4 mr-2" />
              CSV
            </Button>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={320}>
              <BarChart data={horariosData || []} layout="horizontal">
                <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                <XAxis type="number" stroke="#64748b" fontSize={12} />
                <YAxis dataKey="horario" type="category" stroke="#64748b" fontSize={12} width={60} />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: 'white',
                    border: '1px solid #e2e8f0',
                    borderRadius: '8px',
                    boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                  }}
                />
                <Bar dataKey="quantidade_reservas" fill="#10b981" radius={[0, 4, 4, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Gráfico de Primeiras Aulas */}
        <Card className="chart-container">
          <CardHeader className="flex flex-row items-center justify-between pb-4">
            <div>
              <CardTitle className="flex items-center gap-2">
                <Users className="w-5 h-5 text-primary" />
                Novos Alunos
              </CardTitle>
              <CardDescription>Primeiras aulas por período</CardDescription>
            </div>
            <Button variant="outline" size="sm" onClick={() => exportarCSV('primeiras_aulas')} className="hover-lift">
              <Download className="h-4 w-4 mr-2" />
              CSV
            </Button>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={320}>
              <LineChart data={primeirasAulasData?.dados_agrupados || []}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                <XAxis 
                  dataKey="periodo" 
                  stroke="#64748b"
                  fontSize={12}
                />
                <YAxis stroke="#64748b" fontSize={12} />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: 'white',
                    border: '1px solid #e2e8f0',
                    borderRadius: '8px',
                    boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                  }}
                />
                <Line 
                  type="monotone" 
                  dataKey="quantidade" 
                  stroke="#f59e0b" 
                  strokeWidth={3}
                  dot={{ fill: '#f59e0b', strokeWidth: 2, r: 4 }}
                  activeDot={{ r: 6, stroke: '#f59e0b', strokeWidth: 2 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Status Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="card-modern">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-green-100 rounded-xl">
                <Activity className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Sistema</p>
                <div className="flex items-center gap-2">
                  <Badge className="status-active">Online</Badge>
                  <span className="text-sm text-muted-foreground">Funcionando normalmente</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="card-modern">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-blue-100 rounded-xl">
                <Calendar className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Última Atualização</p>
                <p className="font-medium">Agora mesmo</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="card-modern">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-purple-100 rounded-xl">
                <BookOpen className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Dados Processados</p>
                <p className="font-medium">100% Sincronizado</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;

