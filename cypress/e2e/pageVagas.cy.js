/// <reference types="cypress" />
import vagas from "../pageObject/vagas";

describe('Busca por vagas', () => {

  beforeEach(function () {
    cy.apiCadastro()
  });

  it('Encontrar e abrir vaga, buscando por empresa', () => {

    var vaga = 'analista de testes'
    var empresa = 'The Original Beef of Chicagoland'

    cy.apiLogin(Cypress.env("cadastroApi"))

    vagas.clicarBotaoVagas()
    vagas.preencherCampoBuscar(empresa)
    vagas.clicarBotaoBuscar()
    vagas.contarResultado(5, vaga)
    vagas.clicarBotaoVerVaga(vaga)
  })
})