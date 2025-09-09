# Líder Barbershop

Este é um sistema web para gerenciamento de barbearia, permitindo cadastro de usuários, login, agendamento de serviços, visualização de produtos e gerenciamento de carrinho de compras.

## Funcionalidades

- Cadastro e login de usuários
- Agendamento de serviços (corte, barba, hidratação, massagem)
- Visualização de produtos e adição ao carrinho
- Visualização de equipe, galeria de fotos e informações de contato
- Carrinho de compras com controle de quantidade
- Interface responsiva e moderna

## Instalação

1. **Clone o repositório:**
   ```sh
   git clone https://github.com/L3onVictor/web_projFinal.git
   cd web_projFinal
   ```

2. **Instale as dependências:**
   ```sh
   npm install
   ```

3. **Crie as tabelas do banco de dados:**
   ```sh
   npm run db:tables
   ```
   **Caso já estejam criadas, ignore essa etapa**

4. **(Opcional) Popule o banco com um usuário inicial:**
   ```sh
   node database/seeds.js
   ```

5. **Inicie o servidor:**
   ```sh
   node app.js
   ```

6. **Acesse o site:**
   Abra o navegador e acesse [http://localhost:55555](http://localhost:55555)

## Estrutura das Pastas

- `public/` — Arquivos estáticos (HTML, CSS, JS, imagens)
- `routes/` — Rotas da API (registro, login, agendamento)
- `controllers/` — Lógica dos controladores
- `database/` — Banco de dados SQLite e scripts auxiliares

## Principais Telas

- **Home:** Página inicial com informações da barbearia
- **Login/Registro:** Cadastro e autenticação de usuários
- **Serviços:** Lista de serviços disponíveis para agendamento
- **Produtos:** Produtos à venda, com opção de adicionar ao carrinho
- **Carrinho:** Visualização e gerenciamento dos itens adicionados
- **Agendamento:** Formulário para agendar serviços e visualizar agendamentos

## Observações

- O sistema utiliza SQLite como banco de dados local.
- O backend roda na porta 55555 por padrão.
- Para alterar configurações, edite o arquivo [`app.js`](app.js).

## Licença

MIT

---

Desenvolvido por