# Projeto Cypress - Desafio VR

Este projeto contém testes automatizados para o Desafio VR, utilizando Cypress.

## Requisitos

- Node.js (versão 20.11.1 ou superior)
- npm

## Instalação

1. Clone este repositório para o seu ambiente local:
```
git clone https://github.com/jediaelsantana31/vr_challenge_front.git
```
2. Navegue até o diretório do projeto:
```
cd seu_projeto
```
3. Instale as dependências do projeto:
```
npm install
```
4. Instale o Mochawesome para gerar relatórios (opcional):
```
npm install mochawesome --save-dev
```


## Execução dos Testes

Para executar os testes no navegador Chrome, execute o seguinte comando:
```
npx cypress run --browser chrome
```


## Desafio Frontend

O objetivo do desafio frontend é criar um teste automatizado que valide que um produto pode ser adicionado com sucesso ao carrinho em nossa loja virtual.

### Site do Desafio

[VR - Compre online](https://www.vr.com.br/)

### Steps do Desafio

1. Acesse a home do portal web ([www.vr.com.br](https://www.vr.com.br/));
2. Clique no botão "Compre online" para navegar até a loja;
3. Selecione a opção "Cartões VR";
4. Adicione uma quantidade aleatória de cartões do produto "Auto";
5. Digite um valor de crédito aleatório para o produto "Auto";
6. Clique no botão "Adicionar ao carrinho";
7. Valide que o produto foi adicionado ao carrinho com sucesso.

# Relatórios de Testes

- [Teste de Adicionar o produto "Auto" ao carrinho na Loja VR](https://github.com/jediaelsantana31/vr_challenge_front/blob/main/cypress/results/mochawesome.html)
- [Teste de Navegação na Loja VR](https://github.com/jediaelsantana31/vr_challenge_front/blob/main/cypress/results/mochawesome_001.html)

## Contato

[Meu Perfil no LinkedIn](https://www.linkedin.com/in/jediael-santana-34110464/)

