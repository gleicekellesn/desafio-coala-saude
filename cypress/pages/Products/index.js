// acoes de interacao com a pagina

const el = require("./elements").ELEMENTS;
import "../../support/commands";

class Products {
  validPageProducts() {
    cy.get(el.title).should("be.visible");
    cy.get(el.listProducts).should("be.visible");
  }

  applyFilterAz() {
    cy.get("select").select("Name (A to Z)").should("have.value", "az");
  }

  applyFilterZa() {
    cy.get("select").select("Name (Z to A)");
  }

  applyFilterLowToHigh() {
    cy.get("select").select("Price (low to high)");
  }

  applyFilterHighToLow() {
    cy.get("select").select("Price (high to low)");
  }
}

export default new Products();
