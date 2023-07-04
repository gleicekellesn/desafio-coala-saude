// Acoes de interacao com a pagina de Login

const el = require("./elements").ELEMENTS;
import "../../support/commands";

class Login {
  acessarPage() {
    cy.visit(el.baseUrl);
  }

  loginSucesso() {
    cy.get(el.userName).type(el.inputtUserNameValid);
    cy.get(el.password).type(el.inputPasswordValid);
    cy.get(el.buttonLogin).click();
    cy.get(el.logoSite).should("be.visible");
  }

  loginBlocked() {
    cy.get(el.userName).type(el.inputUserNameInvalid);
    cy.get(el.password).type(el.inputPasswordValid);
    cy.get(el.buttonLogin).click();
    cy.get(el.returnBlockedUser).contains(
      "Epic sadface: Sorry, this user has been locked out."
    );
  }

  loginIncorrect() {
    cy.get(el.userName).type(el.inputtUserIncorrect);
    cy.get(el.password).type(el.inputPasswordIncorrect);
    cy.get(el.buttonLogin).click();
    cy.get(el.returnBlockedUser).contains(
      "Epic sadface: Username and password do not match any user in this service"
    );
  }

  loginUserMandatory() {
    cy.get(el.password).type(el.inputPasswordValid);
    cy.get(el.buttonLogin).click();
    cy.get(el.returnBlockedUser).contains("Epic sadface: Username is required");
  }
  loginPasswordMandatory() {
    cy.get(el.userName).type(el.inputtUserNameValid);
    cy.get(el.buttonLogin).click();
    cy.get(el.returnBlockedUser).contains("Epic sadface: Password is required");
  }
}

export default new Login();
