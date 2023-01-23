import { elemento } from "./elementos";

class Login {

  clicarBotaoLogin() {
    cy.get(elemento.buttonLogin)
      .contains('Login')
      .should('be.visible')
      .click()
  }

  preencherCampoEmail(email) {
    cy.get(elemento.inputEmail).type(email, { log: false })
  }

  preencherCampoSenha(senha) {
    cy.get(elemento.inputSenha).type(senha, { log: false })
  }

  clicarBotaoEntrar() {
    cy.get(elemento.buttonEntrar)
      .contains('Entrar')
      .should('be.visible')
      .click()
  }

  clicarBotaoOKBanner() {
    cy.get(elemento.buttonOkBanner)
      .should('exist')
      .click()
  }

  validarAlerta() {
    cy.get(elemento.toast)
      .contains('Usuário não encontrado')
      .should('be.visible')
  }
}

export default new Login();
