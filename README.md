# Projeto de Automação - Cypress + Cucumber

## Objetivo
Este projeto tem como objetivo automatizar cenários de testes web e API utilizando Cypress com Cucumber (BDD), garantindo qualidade e cobertura dos fluxos críticos.

---

## Tecnologias utilizadas
- Cypress
- Cucumber (BDD)
- JavaScript (ES6+)
- Node.js

---

## Estrutura do projeto

cypress/
├── e2e/
│   ├── features/
│   ├── step_definitions/
├── support/
├── fixtures/

---

## Pré-requisitos

- Node.js instalado (versão X ou superior)
- NPM ou Yarn

---

## Como executar o projeto

```bash
# Clonar o repositório
git clone <seu-repo>

# Instalar dependências
npm install

# Executar testes em modo headless
npx cypress run

# Executar modo interativo
npx cypress open