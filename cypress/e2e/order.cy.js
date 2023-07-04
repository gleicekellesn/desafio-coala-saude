///<reference types="Cypress"/>
import Order from "../pages/Order";
import Products from "../pages/Products";
import Formulario from "../pages/Formulario";

describe("Realizar pedido", () => {
  beforeEach(() => {
    cy.login();
    Products.validPageProducts();
  });

  it("Verificar se carrinho está vazio", () => {
    Order.checkEmptyCart();
  });

  it("Adicionar e Remover produto ao carrinho", () => {
    Order.addProductsCart();
    Order.removeProductsCart();
  });

  it("Finalizar Pedido", () => {
    Order.addProductsCart();
    Formulario.yourInformation();
    Order.closeOrder();
  });
});


