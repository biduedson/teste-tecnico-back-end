# Teste Técnico Backend

## Descrição

Este projeto é uma API desenvolvida em Node.js utilizando TypeScript, Express e Prisma ORM. A aplicação segue os princípios do SOLID e Clean Architecture, garantindo escalabilidade e manutenção eficiente.

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução JavaScript no lado do servidor.
- **TypeScript**: Superset do JavaScript que adiciona tipagem estática.
- **Express**: Framework minimalista para criação de APIs RESTful.
- **Prisma ORM**: Mapeamento de dados para o banco de dados PostgreSQL.
- **PostgreSQL**: Banco de dados relacional utilizado no projeto.
- **Redis**: Cache em memória para otimizar o desempenho e suporte a autenticação.
- **JWT (JSON Web Token)**: Autenticação baseada em token.
- **bcrypt**: Para hash e validação de senhas.
- **class-validator e class-transformer**: Validação e transformação de objetos de entrada e saída.
- **dotenv**: Para gerenciamento de variáveis de ambiente.

## Instalação e Configuração

1. Clone o repositório:

   ```bash
   git clone git@github.com:biduedson/teste-tecnico-back-end.git
   cd teste-tecnico-back-end
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Configure as variáveis de ambiente:
   Crie um arquivo `.env` na raiz do projeto e adicione as seguintes variáveis (mantendo os nomes abaixo):

   ```env
   DATABASE_URL="STRING_DE_CONEXÃO_DO_BANCO_DE_DADOS"
   JWT_SECRET="SEGREDO_PARA_AUTENTICAÇÃO_JWT"
   REDIS_HOST="ENDEREÇO_DO_REDIS"
   REDIS_PORT=PORTA_DO_REDIS
   ```

   - **`DATABASE_URL`**: String de conexão para o banco PostgreSQL.
   - **`JWT_SECRET`**: Segredo usado para assinar e validar os tokens JWT.
   - **`REDIS_HOST`**: Endereço do servidor Redis.
   - **`REDIS_PORT`**: Porta utilizada pelo Redis.

   > **Nota**: Não inclua valores sensíveis diretamente no código. Certifique-se de configurar adequadamente as variáveis de ambiente.

4. Execute as migrações do banco de dados:

   ```bash
   npx prisma migrate dev
   ```

5. Inicie o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```

   Ou compile o código para produção:

   ```bash
   npm run build
   npm start
   ```

## Estrutura de Pastas

A estrutura do projeto segue os princípios do SOLID e Clean Architecture:

```
src/
├── application/         # Interfaces e lógica de aplicação
├── domain/              # Entidades de domínio e exceções personalizadas
├── infrastructure/      # Configuração de banco de dados e serviços externos
│   ├── database/        # Prisma ORM e migrações
├── routes/              # Definição das rotas da API
├── server/              # Configuração do servidor Express e inicialização
└── utils/               # Utilitários.

---
```

## Endpoints da API

(Detalhar endpoints, exemplos de request/response aqui, conforme discutido futuramente.)

---

...

### 1. **Login**

- **URL**: `POST /api/login`
- **Descrição**: Autentica um usuário e retorna um token JWT para autorização nas rotas protegidas.
- **Headers**:
  - `Content-Type: application/json`

### Corpo da Requisição (Request Body)

```json
{
  "email": "usuario.exemplo@gmail.com",
  "password": "senhaSegura123"
}

Resposta de Sucesso (200 OK)


{
  "user": {
    "id": "cm46fd5yc0000bwqsuc2md075",
    "email": "usuario.exemplo@gmail.com",
    "createdAt": "2024-12-02T02:42:24.997Z",
    "updatedAt": "2024-12-02T02:42:24.997Z"
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InVzZXJpby5leGVtcGxvQGdtYWlsLmNvbSIsImlhdCI6MTczMzE0ODIyNSwiZXhwIjoxNzMzMTUxODI1fQ.Fa4D-91c9_BfMrqtdbSDE3w_7ccMuOKw53gzJ_zON-M"
}


Respostas de Erro

{
  "O e-mail fornecido não tem um formato válido."
}
(400 Bad Request)

{
  "A senha não pode estar vazia."
}
(400 Bad Request)

{
   "A senha não pode estar vazia."
}
(401 Unalthorizedt)

```

### 2. **Criar Usuário**

- **URL**: `POST /api/user/`
- **Descrição**: Cria um novo usuário com email e senha fornecidos.
- **Headers**:
  - `Content-Type: application/json`

### Corpo da Requisição (Request Body)

```json
{
  "email": "usuario.exemplo@gmail.com",
  "password": "1111111111"
}

Resposta de Sucesso (201 Created)

{
  "id": "cm474l5270003bwkwxv52b1j5",
  "email": "usuario.exemplo@gmail.com",
  "createdAt": "2024-12-02T14:28:27.488Z",
  "updatedAt": "2024-12-02T14:28:27.488Z"
}


Respostas de Erro

{
   "O password deve ter pelo menos 6 caracteres."
}
(400 Bad Request)

{
   "O e-mail fornecido não tem um formato válido."
}
(400 Bad Request)

{
   "O campo de email não pode estar vazio."
}
(400 Bad Request)

{
   "O campo de password não pode estar vazio."
}
(400 Bad Request)
```

### 3. **Criar Tarefa**

- **URL**: `POST /api/task/`
- **Descrição**: Cria uma nova tarefa com título, descrição, status e o ID do usuário associado.
- **Headers**:
  - `Content-Type: application/json`

### Corpo da Requisição (Request Body)

```json
{
  "title": "Finalizar relatório",
  "description": "finalizar.",
  "status": "PENDING",
  "userId": "cm44gts4k0000bw8wf4w1c012"
}



Respostas de Erro

{
   "O título da tarefa não pode estar vazio."
}
(400 Bad Request)

{
   "A descrição da tarefa não pode estar vazia."
}
(400 Bad Request)

{
  "O campo de status não pode estar vazio."
}
(400 Bad Request)

{
   "O ID do usuário não pode estar vazio."
}
(400 Bad Request)

{
  "Usuario não encontrado."
}
(404 Bad Request)

```

### 4. **Atualizar Status da Tarefa**

- **URL**: `PUT /api/task/:id`
- **Descrição**: Atualiza o status de uma tarefa existente. O status pode ser alterado entre `PENDING` e `COMPLETE`.
- **Headers**:
  - `Content-Type: application/json`

### Corpo da Requisição (Request Body)

```json
{
  "id": "cm45y3at40001bw3sdtwghn9z",
  "status": "COMPLETE"
}

Respostas de Erro

{
   "O id da tarefa não pode estar vazio."
}
(400 Bad Request)

{
   "O status da tarefa não pode estar vazio."
}
(400 Bad Request)

{
   "Usuario não encontrado."
}
(404 Not Found)

```

### 5. **Deletar Tarefa**

- **URL**: `DELETE /api/task/:id`
- **Descrição**: Deleta uma tarefa existente pelo `id` fornecido. O `id` da tarefa deve ser enviado como parâmetro na URL.
- **Headers**:
  - Nenhum cabeçalho adicional é necessário.

### Parâmetros de URL

- `id` (required): O `id` da tarefa que será deletada. Deve ser um valor válido.

### Resposta de Sucesso (204 No Content)

Se a tarefa for deletada com sucesso, a resposta será uma confirmação com o status `204 No Content`, sem corpo de resposta.

```json
{}


Respostas de Erro

{
   "tarefa não Encontrada."
}
(404 Not Found)

```

---

## Testes

Para testar a API, você pode usar ferramentas como **Postman** ou **Insomnia** para enviar requisições HTTP e verificar as respostas. Não se esqueça de configurar o ambiente corretamente com as variáveis necessárias, como o `DATABASE_URL`, `JWT_SECRET` e outros parâmetros de configuração.

## Considerações Finais

- A API foi construída com as melhores práticas de segurança, como a utilização de **JWT (JSON Web Token)** para autenticação e **bcrypt** para criptografia de senhas.
- Todas as respostas e erros estão padronizados em JSON, facilitando a integração com diferentes clientes.
- A estrutura de pastas segue os princípios do **SOLID** e **Clean Architecture**, visando escalabilidade e manutenibilidade do código.
- As rotas foram desenhadas para serem intuitivas e de fácil uso. Certifique-se de sempre passar os parâmetros corretos, como IDs de usuários ou tarefas, para evitar erros.
- Em caso de problemas ou melhorias, fique à vontade para contribuir com o código! Qualquer feedback é muito bem-vindo.

## Contribuindo

Se você deseja contribuir para este projeto, siga os passos abaixo:

1. Faça o **fork** do repositório.
2. Crie uma nova branch (`git checkout -b feature/nova-funcionalidade`).
3. Faça as alterações e **commit** (`git commit -am 'Adicionando nova funcionalidade'`).
4. **Push** para a sua branch (`git push origin feature/nova-funcionalidade`).
5. Envie um **pull request**.

## Desenvolvedor

Este projeto foi desenvolvido por **Edson Gomes Arruda Junior**, Desenvolvedor Full-Stack.

---

**Obrigado por utilizar nossa API!**

Desenvolvido como parte de um teste técnico.

```

```
