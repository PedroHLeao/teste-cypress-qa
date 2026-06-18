import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import loginPage from "../../pages/loginPage";


let nomeProduto;

//Realizar buscar;
Given("que estou na tela de login com acesso válido", () => {
  loginPage.acessarLogin();
});

When("faço login com usuário válido", () => {
  loginPage.preencherEmail("pedro@teste.com.br");
  loginPage.preencherSenhaValida("123456");
  loginPage.clicarLogin();
  
});

Then("vejo que estou logado", () => {
  loginPage.validarLoginComSucesso();
});

//  Login inválido
Given("que estou na tela de login com acesso inválido", () => {
  loginPage.acessarLogin();
});

When("faço login com senha inválida", () => {
  loginPage.preencherEmail("pedro@teste.com.br");
  loginPage.preencherSenhaValida("0000");
  loginPage.clicarLogin();
});

Then("devo ver mensagem de erro", () => {
  loginPage.validarErroLogin();
});

// Incluir produto no carrinho;

Given("que estou na home", () => {
  loginPage.acessarLogin();
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
    expect(response.body.data.list.name).to.not.be.empty;
  });
});