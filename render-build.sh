#!/bin/bash

# Script de build personalizado para o Render
# Este script é executado durante o deploy no Render

set -e

echo "🚀 Iniciando build no Render..."

# Função para build do backend
build_backend() {
    echo "📦 Construindo backend..."
    cd aula_management_system
    
    # Instalar dependências Python
    echo "📥 Instalando dependências Python..."
    pip install -r requirements.txt
    
    # Criar diretório do banco se não existir
    mkdir -p src/database
    
    echo "✅ Backend construído com sucesso!"
}

# Função para build do frontend
build_frontend() {
    echo "📦 Construindo frontend..."
    cd aula-management-frontend
    
    # Instalar pnpm globalmente
    echo "📥 Instalando pnpm..."
    npm install -g pnpm
    
    # Instalar dependências
    echo "📥 Instalando dependências do frontend..."
    pnpm install --frozen-lockfile
    
    # Build da aplicação
    echo "🔨 Fazendo build da aplicação..."
    pnpm build
    
    echo "✅ Frontend construído com sucesso!"
}

# Executar builds
build_backend
build_frontend

echo "🎉 Build concluído com sucesso!" 