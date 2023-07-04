///<reference types="Cypress"/>
import Products from "../pages/Products";

describe("Validar produtos", () => {
  beforeEach(() => {
    cy.login();
    Products.validPageProducts();
  });

  it("Aplicar filtros A a Z na página de produtos", () => {
    Products.applyFilterAz();
  });

  it("Aplicar filtros Z a A na página de produtos", () => {
    Products.applyFilterZa();
  });

  it("Aplicar filtros Low to High na página de produtos", () => {
    Products.applyFilterLowToHigh();
  });

  it("Aplicar filtros Low to High na página de produtos", () => {
    Products.applyFilterHighToLow();
  });
  
});
