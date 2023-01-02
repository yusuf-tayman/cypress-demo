class LoginPage {
  constructor() {
    this.username = 'input[data-test="username"]';
    this.password = 'input[data-test="password"]';
    this.submitButton = 'input[data-test="login-button"]';
    this.alertText = 'h3[data-test="error"]';
  }

  fillUsername(username) {
    cy.get(this.username).type(username);
  }

  fillPassword(password) {
    cy.get(this.password).type(password, { sensitive: true });
  }

  login() {
    cy.get(this.submitButton).click();
  }

  getAlertText() {
    return cy.get(this.alertText).invoke("text");
  }
}

export default LoginPage = new LoginPage();
