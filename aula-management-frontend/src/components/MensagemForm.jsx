import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { MessageSquare, Send, CheckCircle } from 'lucide-react';
import '../App.css';

export default function MensagemForm() {
  const { token } = useAuth();
  const [nome, setNome] = useState('');
  const [conteudo, setConteudo] = useState('');
  const [tipo, setTipo] = useState('informativo');
  const [erro, setErro] = useState('');
  const [sucesso, setSucesso] = useState('');

  const tiposValidos = [
    { value: 'informativo', label: 'Informativo' },
    { value: 'promocional',  label: 'Promocional' },
    { value: 'aviso_reserva', label: 'Lembrete de Aula' },
    { value: 'boas_vindas', label: 'Boas-vindas' },
    { value: 'recuperacao', label: 'Recuperação de Alunos' }
  ];

  async function handleSubmit(e) {
    e.preventDefault();
    setErro('');
    setSucesso('');

    try {
      const resp = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/api/mensagens`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
          body: JSON.stringify({ nome, conteudo, tipo })
        }
      );

      
      const contentType = resp.headers.get('content-type') || '';
      let data = null;
      if (contentType.includes('application/json')) {
        try {
          data = await resp.json();
        } catch {
          // corpo vazio ou inválido; data fica null
        }
      }
      if (!resp.ok) {
        throw new Error(data?.erro || 'Erro ao criar mensagem');
      }
      

      setSucesso('Mensagem criada com sucesso!');
      setNome('');
      setConteudo('');
      setTipo('informativo');
    } catch (err) {
      setErro(err.message);
    }
  }

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gradient">Automação de Comunicação</h1>
        <p className="text-muted-foreground mt-1">Crie mensagens automáticas para melhorar o engajamento dos alunos</p>
      </div>

      <Card className="card-modern max-w-2xl">
        <CardHeader>
          <div className="flex items-center gap-2">
            <MessageSquare className="w-5 h-5 text-primary" />
            <CardTitle>Criar Nova Mensagem</CardTitle>
          </div>
          <CardDescription>
            Configure mensagens automáticas para diferentes segmentos de alunos da sua franquia
          </CardDescription>
        </CardHeader>
        <CardContent>
          {erro && (
            <Alert variant="destructive" className="mb-6 animate-scale-in">
              <AlertDescription>{erro}</AlertDescription>
            </Alert>
          )}
          {sucesso && (
            <Alert className="mb-6 animate-scale-in border-green-200 bg-green-50">
              <CheckCircle className="h-4 w-4 text-green-600" />
              <AlertDescription className="text-green-800">{sucesso}</AlertDescription>
            </Alert>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="form-field">
              <Label htmlFor="nome" className="text-sm font-medium">Nome da Mensagem</Label>
              <Input
                id="nome"
                type="text"
                placeholder="Ex: Lembrete de aula de Yoga"
                value={nome}
                onChange={e => setNome(e.target.value)}
                required
                className="form-input"
              />
            </div>
            
            <div className="form-field">
              <Label htmlFor="tipo" className="text-sm font-medium">Tipo de Mensagem</Label>
              <Select value={tipo} onValueChange={setTipo}>
                <SelectTrigger className="form-input">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {tiposValidos.map(t => (
                    <SelectItem key={t.value} value={t.value}>{t.label}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div className="form-field">
              <Label htmlFor="conteudo" className="text-sm font-medium">Conteúdo da Mensagem</Label>
              <Textarea
                id="conteudo"
                placeholder="Digite o conteúdo da sua mensagem automática..."
                value={conteudo}
                onChange={e => setConteudo(e.target.value)}
                required
                className="form-input min-h-[120px]"
              />
              <p className="text-xs text-muted-foreground mt-2">
                Dica: Use variáveis como {'{nome_aluno}'} para personalizar as mensagens
              </p>
            </div>
            
            <Button type="submit" className="w-full btn-primary">
              <Send className="mr-2 h-4 w-4" />
              Criar Mensagem Automática
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
