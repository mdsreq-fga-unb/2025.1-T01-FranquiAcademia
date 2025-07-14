// src/lib/api/mensagens.js
const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:5001/api';

export async function createMensagem({ nome, conteudo, tipo }) {
  const token = localStorage.getItem('token');
  const res = await fetch(`${API_BASE}/mensagens`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({ nome, conteudo, tipo })
  });
  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.erro || 'Erro ao criar mensagem');
  }
  return res.json();
}
