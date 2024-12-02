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

Desenvolvido como parte de um teste técnico.
