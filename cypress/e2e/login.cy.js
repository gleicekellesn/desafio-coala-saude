///<reference types="Cypress"/>
import Login from "../pages/Login";

describe("Login", () => {
  beforeEach(() => {
    Login.acessarPage();
  });

  it("Login com sucesso", () => {
    Login.loginSucesso();
  }),
    it("Login com usuário bloqueado", () => {
      Login.loginBlocked();
    }),
    it("Login com usuário e/ou senha incorretos", () => {
      Login.loginIncorrect();
    }),
    it("Obrigatoriedade do campo Usuário", () => {
      Login.loginUserMandatory();
    }),
    it("Obrigatoriedade do campo Senha", () => {
      Login.loginPasswordMandatory();
    });
});
