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

  Login() {
    cy.visit("https://www.automationexercise.com/login");
    cy.contains("Your email or password is incorrect").should("be.visible");
    cy.get('[data-qa="login-password"]').type(senha);
    cy.get('[data-qa="login-button"]').click();
    cy.contains("Logout").should("be.visible");
    cy.contains("Logged in as").should("be.visible");
  }
}

export default new LoginPage();