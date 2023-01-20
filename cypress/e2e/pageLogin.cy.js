/// <reference types="cypress" />
import login from "../pageObject/login";

describe('Validar navegação do Login', () => {

  it('Clicar no botão Login', () => {
    cy.visit('/')

    login.clicarBotaoLogin()

    cy.url()
      .should('be.equal', Cypress.config().baseUrl + 'auth/signin/candidates')

  });

  it('Validar login incorreto', () => {

    var email = 'invalido@gmail.com'
    var senha = 'invalido1234'

    cy.intercept('GET', Cypress.config().baseUrl + 'auth/signin/candidates').as('candidates')

    cy.visit('/auth/signin/candidates')
      .esperar('candidates', 200)

    login.clicarBotaoOKBanner()

    login.preencherCampoEmail(email)
    login.preencherCampoSenha(senha)
    login.clicarBotaoEntrar()
    login.validarAlerta()

  });
})