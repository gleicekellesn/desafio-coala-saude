//Acoes de interacao com pagina de Checkout: Your Information

const el = require("./elements").ELEMENTS;
import "../../support/commands";

//Formulario de preenchimento dos dados do cliente
class Formulario {
  yourInformation() {
    cy.get(el.submitForm).click();
    cy.get(el.firstName).type("Gleice Kelle");
    cy.get(el.lastName).type("Santos Nascimento");
    cy.get(el.postalCode).type("45985376");
    cy.get(el.submitOrder).click();
  }

  firstNameMandatory(){
    cy.get(el.submitForm).click();
    cy.get(el.lastName).type("Santos Nascimento");
    cy.get(el.postalCode).type("45985376");
    cy.get(el.submitOrder).click();
    cy.get(el.errorMensage).contains('Error: First Name is required');
  }

  lastNameMandatory(){
    cy.get(el.submitForm).click();
    cy.get(el.firstName).type("Gleice Kelle");
    cy.get(el.postalCode).type("45985376");
    cy.get(el.submitOrder).click();
    cy.get(el.errorMensage).contains('Error: Last Name is required');
  }

  postalCodeMandatory(){
    cy.get(el.submitForm).click();
    cy.get(el.firstName).type("Gleice Kelle");
    cy.get(el.lastName).type("Santos Nascimento");
    cy.get(el.submitOrder).click();
    cy.get(el.errorMensage).contains('Error: Postal Code is required');
  }
}

export default new Formulario();
