import { elemento } from "./elementos";

class Cadastro {

  clicarBotaoCriarConta() {
    cy.get(elemento.buttonCriarConta)
      .contains('Criar Conta')
      .should('be.visible')
      .click()
  }

  preencherCampoNome(nome) {
    cy.get(elemento.inputNome).type(nome)
  }

  preencherCampoEmail(email) {
    cy.get(elemento.inputEmail).type(email)
  }

  preencherCampoSenha(senha) {
    cy.get(elemento.inputSenha).type(senha)
  }

  clicarBotaoAceiteTermo() {
    cy.get(elemento.buttonAceiteTermo)
      .check({ force: true })
  }

  clicarBotaoInscrevaSe() {
    cy.get(elemento.buttonInscrever)
      .contains('Inscreva-se')
      .should('be.visible')
      .click()
  }

}

export default new Cadastro();
