# 💳 Credifit Challenge — Frontend

Aplicação frontend desenvolvida em React + TypeScript + Tailwind CSS, que simula o fluxo completo de solicitação de empréstimos consignados via plataforma Credifit.

---

## 🚀 Funcionalidades

- Simulação de crédito consignado por funcionário
- Escolha de valor e número de parcelas
- Visualização de resumo antes da solicitação
- Integração com backend NestJS para análise de score e salário
- Status detalhado dos empréstimos (aprovado ou reprovado)
- Layout fiel ao protótipo fornecido

---

## 📦 Tecnologias

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Axios](https://axios-http.com/)
- [Lucide Icons](https://lucide.dev/)

---

## 📁 Estrutura do Projeto

```
src/
├── components/         # Componentes reutilizáveis (formulários, status, etc)
├── pages/              # Página principal (Home)
├── services/           # Configuração da API com Axios
├── styles/             # Arquivo index.css com Tailwind
└── main.tsx            # Entrada principal do app
```

---

## 🛠️ Como executar localmente

### Pré-requisitos

- Node.js `>=18`
- npm `>=9`

### Passos

```bash
# 1. Clone o repositório
git clone https://github.com/seu-usuario/credifit-challenge-frontend.git
cd credifit-challenge-frontend

# 2. Instale as dependências
npm install

# 3. Rode o projeto
npm run dev

# 4. Acesse no navegador
http://localhost:5173
```

> ⚠️ Certifique-se de que o backend NestJS esteja rodando em `http://localhost:3000`.

---

## 📄 Licença e Direitos

Este projeto é de uso exclusivo para fins avaliativos e de aprendizado.  
**Todos os direitos sobre o código e lógica pertencem ao autor.**  
Reprodução, cópia ou redistribuição total/parcial sem autorização prévia é proibida.

---

## ✍️ Autor

Desenvolvido por **Jefferson Rodrigo Sotto**  
🌍 [LinkedIn](https://www.linkedin.com/in/jeffersonsotto)
