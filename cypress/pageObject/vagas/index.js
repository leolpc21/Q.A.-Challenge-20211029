import { elemento } from "./elementos";

class Vagas {

  clicarBotaoVagas() {
    cy.get(elemento.buttonVagas)
      .contains('Vagas')
      .should('be.visible')
      .click()
  }

  preencherCampoBuscar(nome) {
    cy.get(elemento.inputBuscar)
      .type(nome);
  }

  clicarBotaoBuscar() {
    cy.intercept('GET', 'https://api.beta.coodesh.com/v2/jobs?search=**').as('search')
    cy.get(elemento.buttonSubmit)
      .contains('Buscar')
      .should('be.visible')
      .click()
      .esperar('search', 200)
  }

  contarResultado(quantidade, vaga) {
    cy.get(elemento.tableResultado)
      .then(function (resultado) {
        expect(resultado).to.have.length(quantidade)
      })
      .contains(vaga)
  }

  clicarBotaoVerVaga(vaga) {
    cy.get(elemento.tableResultado)
      .contains(vaga)
      .find(elemento.buttonVerVaga)
      .contains('Ver Vaga')
      .should('be.visible')
      .click()
  }
}

export default new Vagas();
