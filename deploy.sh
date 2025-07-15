#!/bin/bash

# Script de Deploy para FranquiAcademia
# Uso: ./deploy.sh [dev|prod]

set -e

# Cores para output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Função para imprimir mensagens coloridas
print_message() {
    echo -e "${GREEN}[INFO]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Verificar se Docker está instalado
check_docker() {
    if ! command -v docker &> /dev/null; then
        print_error "Docker não está instalado. Por favor, instale o Docker primeiro."
        exit 1
    fi
    
    if ! command -v docker-compose &> /dev/null; then
        print_error "Docker Compose não está instalado. Por favor, instale o Docker Compose primeiro."
        exit 1
    fi
    
    print_message "Docker e Docker Compose encontrados."
}

# Função para deploy de desenvolvimento
deploy_dev() {
    print_message "Iniciando deploy de desenvolvimento..."
    
    # Parar containers existentes
    print_message "Parando containers existentes..."
    docker-compose -f docker-compose.dev.yml down || true
    
    # Build e start dos containers
    print_message "Construindo e iniciando containers..."
    docker-compose -f docker-compose.dev.yml up --build -d
    
    print_message "Deploy de desenvolvimento concluído!"
    print_message "Frontend: http://localhost:5174"
    print_message "Backend: http://localhost:5001"
    print_message "Health Check: http://localhost:5001/api/health"
}

# Função para deploy de produção
deploy_prod() {
    print_message "Iniciando deploy de produção..."
    
    # Parar containers existentes
    print_message "Parando containers existentes..."
    docker-compose down || true
    
    # Build e start dos containers
    print_message "Construindo e iniciando containers..."
    docker-compose up --build -d
    
    print_message "Deploy de produção concluído!"
    print_message "Frontend: http://localhost:80"
    print_message "Backend: http://localhost:5001"
    print_message "Database: localhost:5432"
    print_message "Health Check: http://localhost:5001/api/health"
}

# Função para mostrar logs
show_logs() {
    local env=$1
    if [ "$env" = "dev" ]; then
        docker-compose -f docker-compose.dev.yml logs -f
    else
        docker-compose logs -f
    fi
}

# Função para parar containers
stop_containers() {
    local env=$1
    if [ "$env" = "dev" ]; then
        docker-compose -f docker-compose.dev.yml down
    else
        docker-compose down
    fi
    print_message "Containers parados."
}

# Função para mostrar status
show_status() {
    print_message "Status dos containers:"
    docker ps --format "table {{.Names}}\t{{.Status}}\t{{.Ports}}"
}

# Função para mostrar ajuda
show_help() {
    echo "Uso: $0 [comando] [ambiente]"
    echo ""
    echo "Comandos:"
    echo "  dev     - Deploy de desenvolvimento"
    echo "  prod    - Deploy de produção"
    echo "  logs    - Mostrar logs (use com dev ou prod)"
    echo "  stop    - Parar containers (use com dev ou prod)"
    echo "  status  - Mostrar status dos containers"
    echo "  help    - Mostrar esta ajuda"
    echo ""
    echo "Exemplos:"
    echo "  $0 dev"
    echo "  $0 prod"
    echo "  $0 logs dev"
    echo "  $0 stop prod"
}

# Main script
main() {
    local command=$1
    local env=$2
    
    # Verificar Docker
    check_docker
    
    case $command in
        "dev")
            deploy_dev
            ;;
        "prod")
            deploy_prod
            ;;
        "logs")
            if [ -z "$env" ]; then
                print_error "Especifique o ambiente (dev ou prod) para logs"
                exit 1
            fi
            show_logs $env
            ;;
        "stop")
            if [ -z "$env" ]; then
                print_error "Especifique o ambiente (dev ou prod) para parar"
                exit 1
            fi
            stop_containers $env
            ;;
        "status")
            show_status
            ;;
        "help"|"-h"|"--help")
            show_help
            ;;
        *)
            print_error "Comando inválido. Use '$0 help' para ver as opções."
            exit 1
            ;;
    esac
}

# Executar main com argumentos
main "$@" 