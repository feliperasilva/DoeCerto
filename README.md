# 🎯 DoeCerto

**DoeCerto** é uma plataforma digital desenvolvida para intermediar a comunicação entre doadores e ONGs, facilitando a solidariedade de forma prática, segura e eficiente. O objetivo é tornar o processo de doação mais acessível, confiável e transparente, permitindo que os usuários encontrem instituições sociais de acordo com suas intenções de ajuda.

---

## 📌 Visão Geral

A aplicação oferece um ambiente interativo e protegido, no qual organizações sociais podem divulgar suas necessidades e os usuários podem escolher o que, quando e como doar. Um dos principais pilares do projeto é **garantir a segurança das doações**, evitando golpes de caridade por meio da **validação de ONGs confiáveis**.

---

## ⚙️ Funcionalidades

- 🔐 **Autenticação e Cadastro de Usuários**
  - Suporte para ONGs, doadores e administradores
- ✅ **Validação de ONGs**
  - Somente instituições confiáveis têm acesso à plataforma
- 🔑 **Recuperação de Senha**
  - Permite redefinir o acesso com segurança
- 🎁 **Sistema de Doações**
  - Usuário pode selecionar o tipo de doação que deseja realizar
- 👤 **Perfis Personalizados**
  - ONGs e doadores criam sua identidade dentro da plataforma
- 🧭 **Sistema de Filtragem**
  - Liga as necessidades das ONGs com as intenções dos usuários

---

## 🧰 Tecnologias Utilizadas

### **Frontend**
- [Next.js](https://nextjs.org/) (React 19)
- [TypeScript](https://www.typescriptlang.org/)
- [ESLint](https://eslint.org/) + [eslint-config-next](https://nextjs.org/docs/pages/building-your-application/configuring/eslint)
- [CSS Modules](https://nextjs.org/docs/pages/building-your-application/styling/css-modules)
- [Node.js](https://nodejs.org/)

### **Backend**
- [Laravel 12](https://laravel.com/)
- [PHP >= 8.2](https://www.php.net/)
- [Composer](https://getcomposer.org/)
- [MySQL](https://www.mysql.com/)
- [PHPUnit](https://phpunit.de/) (testes automatizados)
- [FakerPHP/Faker](https://fakerphp.github.io/) (dados fake para testes)
- [Mockery](https://github.com/mockery/mockery) (mock de testes)
- [Laravel Pint](https://laravel.com/docs/12.x/pint) (code style)
- [Laravel Sail](https://laravel.com/docs/12.x/sail) (ambiente Docker, opcional)
- [Vite](https://vitejs.dev/) (build assets do Laravel)
- [Axios](https://axios-http.com/) e [Tailwind CSS](https://tailwindcss.com/) (apenas para assets/admin do backend, se necessário)

### **Outros**
- HTML5, CSS3
- Git & GitHub

---

## 🚀 Guia de Clonagem e Execução do Projeto

### ✔️ Requisitos

- **Backend**
  - PHP >= 8.2
  - Composer
  - MySQL (ou outro banco de dados relacional)
- **Frontend**
  - Node.js >= 18
  - NPM
- **Outros**
  - Git

---

### 🔧 Passos para Rodar o Projeto

#### 1. **Clonar o repositório**

```bash
git clone https://github.com/feliperasilva/MQA
cd MQA
```

---

#### 2. **Configurar o Backend (Laravel 12)**

1. Acesse a pasta do backend:

    ```bash
    cd backend
    ```

2. Instale as dependências do Laravel:

    ```bash
    composer install
    ```

3. Copie o arquivo de ambiente e gere a chave da aplicação:

    ```bash
    cp .env.example .env
    php artisan key:generate
    ```

4. Configure o arquivo `.env` com os dados do seu banco de dados:

    ```env
    DB_CONNECTION=mysql
    DB_HOST=127.0.0.1
    DB_PORT=3306
    DB_DATABASE=doecerto
    DB_USERNAME=root
    DB_PASSWORD=sua_senha
    ```

5. Execute as migrações do banco de dados:

    ```bash
    php artisan migrate
    ```

6. (Opcional) Execute os seeders para popular dados de teste:

    ```bash
    php artisan db:seed
    ```

7. Inicie o servidor backend:

    ```bash
    php artisan serve
    ```

O backend estará disponível em: [http://localhost:8000](http://localhost:8000)

---

#### 3. **Configurar o Frontend (Next.js + TypeScript)**

1. Em outro terminal, acesse a pasta do frontend:

    ```bash
    cd ../frontend
    ```

2. Instale as dependências do frontend:

    ```bash
    npm install
    ```

3. Inicie o servidor de desenvolvimento do frontend:

    ```bash
    npm run dev
    ```

O frontend estará disponível em: [http://localhost:3000](http://localhost:3000) (ou a porta informada no terminal).

---

## 🧪 Testes

### Backend

Execute os testes automatizados do Laravel:

```bash
php artisan test
```

### Frontend

Execute os testes (caso configurados):

```bash
npm test
```

---

## 📝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nome-feature`)
3. Commit suas alterações (`git commit -m 'feat: minha nova feature'`)
4. Faça push para a branch (`git push origin feature/nome-feature`)
5. Abra um Pull Request

---

## 👨‍💻 Desenvolvedores

- [Caio Vínicius](https://github.com/Vini1227)
- [Felipe Romero](https://github.com/Feliperasilva)
- [Guilherme Matheus](https://github.com/Guilhermemth)
- [Kauã José](https://github.com/Kaua17742)
- [Marcos Vínicius](https://github.com/Marcosvbs11)
- [Paulo Ricardo](https://github.com/Paulorc0)
- [Ryon Xavier](https://github.com/Ryonxl)
