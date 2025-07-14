import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';

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
    { value: 'aviso_reserva', label: 'Aviso de Reserva' }
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
    <div className="max-w-lg mx-auto">
      <h1 className="text-2xl font-bold mb-4">Criar Mensagem Automatizada</h1>
      {erro && <div className="text-red-600 mb-2">{erro}</div>}
      {sucesso && <div className="text-green-600 mb-2">{sucesso}</div>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block">Nome</label>
          <input
            type="text"
            value={nome}
            onChange={e => setNome(e.target.value)}
            required
            className="w-full border px-2 py-1"
          />
        </div>
        <div>
          <label className="block">Conteúdo</label>
          <textarea
            value={conteudo}
            onChange={e => setConteudo(e.target.value)}
            required
            className="w-full border px-2 py-1"
          />
        </div>
        <div>
          <label className="block">Tipo</label>
          <select
            value={tipo}
            onChange={e => setTipo(e.target.value)}
            className="w-full border px-2 py-1"
          >
            {tiposValidos.map(t => (
              <option key={t.value} value={t.value}>{t.label}</option>
            ))}
          </select>
        </div>
        <button
          type="submit"
          className="bg-primary text-white px-4 py-2 rounded"
        >
          Criar Mensagem
        </button>
      </form>
    </div>
  );
}
