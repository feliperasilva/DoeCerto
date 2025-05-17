
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

- **Frontend**
  - React.js
  - Vite
  - TypeScript
  - Inertia.js

- **Backend**
  - Laravel 12

- **Outros**
  - HTML5, CSS3
  - MySQL

---

## 🚀 Guia de Execução (Laravel 12)

### ✔️ Requisitos

- PHP >= 8.2
- Composer
- Node.js >= 18
- NPM
- MySQL (ou outro banco de dados relacional)

---

### 🔧 Passos para Rodar o Projeto

1. **Clonar o repositório:**

```bash
git clone https://github.com/feliperasilva/MQA
cd MQA
```

2. **Instalar dependências do backend:**

```bash
composer install
cp .env.example .env
php artisan key:generate
```

3. **Configurar o arquivo `.env` com os dados do banco:**

```env
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=doecerto
DB_USERNAME=root
DB_PASSWORD=sua_senha
```

4. **Executar as migrações:**

```bash
php artisan migrate
```

5. **Instalar dependências do frontend:**

```bash
npm install
```

6. **Iniciar o servidor e o frontend:**

```bash
composer run dev
```

Acesse a aplicação em: [http://localhost:8000](http://localhost:8000)

---

## 👨‍💻 Desenvolvedores

- [Caio Vínicius](https://github.com/Vini1227)
- [Felipe Romero](https://github.com/Feliperasilva)
- [Guilherme Matheus](https://github.com/Guilhermemth)
- [Kauã José](https://github.com/Kaua17742)
- [Marcos Vínicius](https://github.com/Marcosvbs11)
- [Paulo Ricardo](https://github.com/Paulorc0)
- [Ryon Xavier](https://github.com/Ryonxl)
