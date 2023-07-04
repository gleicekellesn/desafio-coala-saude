///<reference types="Cypress"/>
import Formulario from "../pages/Formulario";
import Order from "../pages/Order";


describe("Formulario", () => {
  beforeEach(() => {
    cy.login();
    Order.addProductsCart();
  });
  it("Preencher informacoes com sucesso", () => {
    Formulario.yourInformation();
  }),

  it("Obrigatoriedade do campo nome", () => {
    Formulario.firstNameMandatory();
  }),

  it("Obrigatoriedade do campo sobrenome", () => {
    Formulario.lastNameMandatory();
  }),

  it("Obrigatoriedade do campo CEP", () => {
    Formulario.postalCodeMandatory();
  })
});
