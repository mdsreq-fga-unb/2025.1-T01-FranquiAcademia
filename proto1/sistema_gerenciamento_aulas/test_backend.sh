#!/bin/bash

echo "=== Testando Backend - Sistema de Gerenciamento de Aulas ==="
echo

BASE_URL="http://localhost:5001/api"

# Função para testar endpoint
test_endpoint() {
    local method=$1
    local endpoint=$2
    local data=$3
    local description=$4
    
    echo "Testando: $description"
    echo "Endpoint: $method $endpoint"
    
    if [ -n "$data" ]; then
        response=$(curl -s -w "\nHTTP_CODE:%{http_code}" -X $method "$BASE_URL$endpoint" \
                   -H "Content-Type: application/json" \
                   -d "$data")
    else
        response=$(curl -s -w "\nHTTP_CODE:%{http_code}" -X $method "$BASE_URL$endpoint")
    fi
    
    http_code=$(echo "$response" | grep "HTTP_CODE:" | cut -d: -f2)
    body=$(echo "$response" | sed '/HTTP_CODE:/d')
    
    echo "Status: $http_code"
    echo "Resposta: $body"
    echo "---"
    echo
}

# Teste 1: Cadastrar usuário
test_endpoint "POST" "/usuarios" \
    '{"nome": "Usuario Teste", "email": "teste@exemplo.com", "senha": "senha123"}' \
    "Cadastro de usuário"

# Teste 2: Login
test_endpoint "POST" "/login" \
    '{"email": "teste@exemplo.com", "senha": "senha123"}' \
    "Login de usuário"

# Teste 3: Listar usuários (sem token - deve falhar)
test_endpoint "GET" "/usuarios" "" \
    "Listar usuários sem autenticação"

# Teste 4: Listar aulas (sem token - deve falhar)
test_endpoint "GET" "/aulas" "" \
    "Listar aulas sem autenticação"

echo "=== Testes concluídos ==="

