# 2025.1-T01-FranquiAcademia
Repositório do projeto para a disciplina de Requisitos de Software, ministrada pelo professor George Marscinao, no semestre 2025.1.

Este README descreve as políticas de branch e commit adotadas neste repositório para garantir um fluxo de trabalho colaborativo e organizado.
Para informacoes sobre o projeto em si acesse o git-pages do projeto no [aqui](https://mdsreq-fga-unb.github.io/2025.1-T01-FranquiAcademia)

## Política de Branch

O repositório organiza o código em duas categorias principais:

* **Código do Projeto:** Contém o código fonte da aplicação.
    * **Frontend:** Código relacionado à interface do usuário.
    * **Backend:** Código relacionado à lógica do servidor e dados.
* **Código de Documentação:** Contém a documentação do projeto.

Fugindo do padrão de repositório, que é ter apenas uma codebase por repositório, teremos duas codebase, seperando as por branches, aumentando ainda mais a necessidade de manter o repositório organizado e seguindo os padroes.
Para gerenciar essas categorias, utilizamos as seguintes branches:

### Branches Principais

* `main`: Representa a versão estável e de produção do projeto. **Esta branch deve sempre conter código funcional e revisado.**
* `FT_developer`: Branch de integração principal para o desenvolvimento de funcionalidades do Frontend.
* `BE_developer`: Branch de integração principal para o desenvolvimento de funcionalidades do Backend.
* `gh-pages`: Usada para hospedar a documentação estática do projeto através do GitHub Pages, o equivalente a `main`, para a documentacão.
* `git-pages`: Branch de integração principal para o desenvolvimento da documentacao.

### Branches de Funcionalidade

Para o desenvolvimento de novas funcionalidades ou correção de bugs, utilizamos branches temporárias derivadas das branches de desenvolvimento correspondentes:

* **Para funcionalidades/correções do Frontend:** `FT-<nome_da_feature>_<numero_da_tarefa>`
    * Exemplo: `FT-login_123` para a funcionalidade de login da tarefa 123.
* **Para funcionalidades/correções do Backend:** `BE-<nome_da_feature>_<numero_da_tarefa>`
    * Exemplo: `BE-user_authentication_456` para a autenticação de usuários da tarefa 456.
* **Para documentação:** `docs-<algum_contexto>`
    * Exemplo: `docs-initial_setup` para documentação da configuração inicial.

### Fluxo de Trabalho Típico

1.  **Para tarefas de projeto (Frontend ou Backend):**
    * Faça checkout da branch de desenvolvimento correspondente (`FT_developer` ou `BE_developer`).
    ```bash
    git checkout FT_developer
    # ou
    git checkout BE_developer
    ```
    * Crie uma nova branch para sua funcionalidade/correção, seguindo o padrão:
    ```bash
    git checkout -b FT-<nome_da_feature>_<numero_da_tarefa>
    # ou
    git checkout -b BE-<nome_da_feature>_<numero_da_tarefa>
    ```

2.  **Para tarefas de documentação:**
    * Faça checkout da branch de documentação (`gh-pages` ou outra branch de documentação definida).
    ```bash
    git checkout git-pages
    ```
    * Crie uma nova branch para sua documentação, seguindo o padrão:
    ```bash
    git checkout -b docs-<algum_contexto>
    ```

3.  Desenvolva e faça commits(políticas de commits abaixo) em sua branch de funcionalidade/documentação.

4.  Ao concluir o trabalho, abra um **Pull Request (PR)** para a branch de desenvolvimento correspondente (`FT_developer` ou `BE_developer`) ou para a branch principal (`main` para correções urgentes e bem testadas). Para documentação, o PR deve ser direcionado para a branch de documentação (`git-pages` ou similar).

5.  Aguarde a revisão do seu código/documentação.

6.  Após a aprovação, o PR será mergeado.

7.  A branch de funcionalidade/documentação pode ser excluída após o merge.

## Política de Commit

Para manter um histórico de commits limpo e informativo, adotamos as seguintes convenções:

* **Mensagens de commit devem ser claras e concisas**, explicando o que foi alterado e, se necessário, o porquê.
* Recomendamos o uso do padrão **Conventional Commits** para facilitar a automação e a compreensão do histórico. A estrutura básica é:

    ```
    <tipo>(<escopo opcional>): <descrição>

    ```

    Onde:

    * `<tipo>`: Indica a natureza da alteração (ex: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`).
    * `<escopo opcional>`: Especifica a parte do código afetada (ex: `auth`, `user`, `api`).
    * `<descrição>`: Um resumo conciso da alteração.

### Exemplos de Mensagens de Commit

* `feat(auth): implement user login functionality`
* `fix(user): correct profile update bug`
* `docs: update API documentation for endpoints`
* `refactor: extract common button component`
* `test(auth): add unit tests for login`
* `chore: update dependencies`

Ao seguir estas políticas de branch e commit, podemos manter o repositório organizado, facilitar a colaboração e garantir a qualidade do projeto DeltaCore.
    
