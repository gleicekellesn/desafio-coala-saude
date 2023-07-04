// acoes de interacao com o fluxo de compra

const el = require("./elements").ELEMENTS;
import "../../support/commands";

class Order {
  //Verificando se carrinho esta vazio
  checkEmptyCart() {
    cy.get(el.cart).click();
    cy.get(el.itemInCart).should("not.exist");
  }
  //Adicionando produto ao carrinho e checando se carrinho foi alimentado
  addProductsCart() {
    cy.get(el.addToCart).click();
    cy.get(el.cart).click();
    cy.get(el.itemInCart).should("be.visible");
  }
  //Removendo item do carrinho
  removeProductsCart() {
    cy.get(el.removeItemCart).click();
  }

  closeOrder() {
    //Checkout
    cy.get(el.titleCheckout)
      .contains("Checkout: Overview")
      .should("be.visible");
    cy.get(el.submitFinish).click();

    //Fechamento do Pedido com sucesso
    cy.get(el.finishSucess).should("be.visible");
    cy.get(el.mensageSucess)
      .contains("Thank you for your order!")
      .should("be.visible");
  }
}

export default new Order();
