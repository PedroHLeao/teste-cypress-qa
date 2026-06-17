import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

let nomeProduto;

//Realizar buscar;
Given("que estou na tela de login", () => {
  cy.visit("https://www.automationexercise.com/login");
});

When("faço login com usuário válido", () => {
  cy.get('input[data-qa="login-email"]').type("pedro@teste.com.br");
  cy.get('input[data-qa="login-password"]').type("123456");
  cy.get('button[data-qa="login-button"]').click();
cy.contains("Logout", { timeout: 10000 }).should("be.visible");
  
});

Then("vejo que estou logado", () => {
  cy.contains("Logout", { timeout: 10000 }).should("be.visible");
});

// Incluir produto no carrinho;

Given("que estou na home", () => {
  cy.visit("https://www.automationexercise.com/");
});

When("adiciono um produto ao carrinho", () => {
  // pega o nome do produto antes de clicar
  cy.get(".productinfo p")
    .first()
    .invoke("text")
    .then((text) => {
      nomeProduto = text.trim();
    });

  cy.contains("Add to cart").first().click();
});

When("vou para o carrinho", () => {
  cy.contains("View Cart").click();
});

Then("valido o produto no carrinho", () => {
  // valida que o produto exibido é o mesmo
  cy.get(".cart_description")
  .should("be.visible")
  .and("contain", nomeProduto);
});

// Teste de API - Trello

Given("que faço uma requisição GET", function () {
  cy.request("https://api.trello.com/1/actions/592f11060f95a3d3d46a987a")
    .as("res");
});

Then("o status deve ser 200", function () {
  cy.get("@res").its("status").should("eq", 200);
});

Then("exibo o nome da lista", function () {
  cy.get("@res").then((response) => {
    cy.log(response.body.data.list.name);
  });
});