# Recruit Platform

A **Recruit Platform** é uma aplicação desenvolvida em React que visa otimizar o processo de recrutamento utilizando inteligência artificial. Nosso objetivo é facilitar a conexão entre empresas e candidatos, proporcionando uma experiência mais eficiente e personalizada.

## Tecnologias Utilizadas

- **React**: Biblioteca para construir interfaces de usuário.
- **Ant Design**: Biblioteca de componentes UI para React.
- **Axios**: Biblioteca para fazer requisições HTTP.
- **React Router Dom**: Biblioteca para gerenciamento de rotas.
- **Lucide React**: Conjunto de ícones para enriquecer a interface.

## Acesso ao Deploy do Projeto

Você pode acessar a versão em produção do projeto através do seguinte link:

[https://recruit-fe.vercel.app/](https://recruit-fe.vercel.app/)

## Como Rodar o Projeto Localmente

Para rodar o projeto em sua máquina local, siga os passos abaixo:

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/phtoselli/recruit-fe.git
   cd recruit-fe
   ```

2. **Instale as dependências**:
   ```bash
   npm install
   ```

3. **Execute o projeto**:
   ```bash
   npm run dev
   ```

## Endpoints da API

### Empresas

- **Criar empresa**
  - `POST /company/register`
  - Cria uma nova empresa com os dados fornecidos.

- **Listar empresas**
  - `GET /company`
  - Retorna uma lista de todas as empresas cadastradas.

- **Listar empresa por ID**
  - `GET /company/:id`
  - Retorna os detalhes de uma empresa específica.

- **Atualizar empresa**
  - `PUT /company/:id`
  - Atualiza os dados de uma empresa existente.

- **Deletar empresa**
  - `DELETE /company/:id`
  - Remove uma empresa do registro.

- **Filtrar empresas**
  - `POST /company/filter`
  - Filtra empresas com base em critérios fornecidos.

### Vagas

- **Criar vaga**
  - `POST /job/register`
  - Cria uma nova vaga com os dados fornecidos.

- **Listar todas as vagas**
  - `GET /job`
  - Retorna uma lista de todas as vagas disponíveis.

- **Listar vaga por ID**
  - `GET /job/:id`
  - Retorna os detalhes de uma vaga específica.

- **Atualizar vaga**
  - `PUT /job/:id`
  - Atualiza os dados de uma vaga existente.

- **Deletar vaga**
  - `DELETE /job/:id`
  - Remove uma vaga do registro.

- **Aplicar a uma vaga**
  - `POST /job/:id/apply`
  - Permite que um usuário se candidate a uma vaga.

- **Filtrar vagas por data**
  - `POST /job/filter`
  - Filtra vagas com base em critérios fornecidos.

- **Buscar usuários por vaga**
  - `GET /job/:id/users`
  - Retorna uma lista de usuários que se candidataram a uma vaga específica.

### Usuários

- **Listar todos os usuários**
  - `GET /user`
  - Retorna uma lista de todos os usuários cadastrados.

- **Listar usuário por ID**
  - `GET /user/:id`
  - Retorna os detalhes de um usuário específico.

- **Registrar novo usuário**
  - `POST /user/register`
  - Cria um novo usuário com os dados fornecidos.

- **Login de usuário**
  - `POST /user/login`
  - Realiza o login de um usuário existente.

- **Atualizar usuário**
  - `PUT /user/:id`
  - Atualiza os dados de um usuário existente.

- **Deletar usuário**
  - `DELETE /user/:id`
  - Remove um usuário do registro.

- **Filtrar usuários**
  - `POST /user/filter`
  - Filtra usuários com base em critérios fornecidos.

<!-- ## Autores -->