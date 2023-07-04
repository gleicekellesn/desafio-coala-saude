import Login from "../pages/Login";
import { ELEMENTS } from "../pages/Order/elements";


Cypress.Commands.add("login", () => {
  Login.acessarPage();
  Login.loginSucesso();
});
