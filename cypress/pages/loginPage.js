class LoginPage {
  acessarLogin() {
    cy.visit("https://www.automationexercise.com/login");
  }

  preencherEmail(email) {
    cy.get('[data-qa="login-email"]').type(email);
  }

  preencherSenhaValida(senha) {
    cy.get('[data-qa="login-password"]').type(senha);
  }

  clicarLogin() {
    cy.get('[data-qa="login-button"]').click();
  }

  validarLoginComSucesso() {
    cy.contains("Logout").should("be.visible");
    cy.contains("Logged in as").should("be.visible");
  }

  validarErroLogin() {
    cy.contains("Your email or password is incorrect").should("be.visible");
  }

  
  LoginHome(email, senha) {
  cy.visit("https://www.automationexercise.com/login");
  cy.get('[data-qa="login-email"]').type(email);
  cy.get('[data-qa="login-password"]').type(senha);
  this.clicarLogin();
  }

  adicionarProdutoAoCarrinho() {
  cy.get(".productinfo", { timeout: 10000 })
    .should("have.length.greaterThan", 0)
    .first()
    .within(() => {
      cy.get("p")
        .invoke("text")
        .as("nomeProduto");

      cy.contains("Add to cart").click();
    });

  // 👇 tenta pegar modal, se não existir, segue fluxo alternativo
  cy.get("body").then(($body) => {

    if ($body.find(".modal-content").length > 0) {
      // modal apareceu
      cy.contains("View Cart").click();
    } else {
      // modal não apareceu → navega manualmente
      cy.visit("/view_cart");
    }

  });
}

checkoutCarrinho() {
    cy.get('.nav > :nth-child(3)')
    .should("be.visible")
    .click();
  }

}

export default new LoginPage();