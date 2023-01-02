import loginPage from "../support/page-objects/login-page";
import { faker } from "@faker-js/faker";

describe("Login Tests", function () {
  beforeEach(function () {
    cy.fixture("alert").then(function (data) {
      this.alertText = data;
    });
    cy.visit("/");
  });

  it("should login with valid credentials", function () {
    loginPage.fillUsername(Cypress.env("username"));
    loginPage.fillPassword(Cypress.env("password"));
    loginPage.login();
    cy.url().should("include", "/inventory.html");
  });

  it("should not login with invalid credentials", function () {
    loginPage.fillUsername(faker.name.firstName());
    loginPage.fillPassword(faker.internet.password());
    loginPage.login();
    loginPage
      .getAlertText()
      .should("contain", this.alertText.usernameAndPasswordMismatchAlertText);
  });

  it("should not login with blank username", function () {
    loginPage.fillPassword(Cypress.env("password"));
    loginPage.login();
    loginPage
      .getAlertText()
      .should("contain", this.alertText.usernameRequiredAlertText);
  });

  it("should not login with blank password", function () {
    loginPage.fillUsername(Cypress.env("username"));
    loginPage.login();
    loginPage
      .getAlertText()
      .should("contain", this.alertText.passwordRequiredAlertText);
  });

  it("should not login with blank username and password", function () {
    loginPage.login();
    loginPage
      .getAlertText()
      .should("contain", this.alertText.usernameRequiredAlertText);
  });
});
