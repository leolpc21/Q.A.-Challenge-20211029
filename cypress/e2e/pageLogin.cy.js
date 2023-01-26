/// <reference types="cypress" />
import login from "../pageObject/login";
import genericsUtils from "../support/utils";

describe('Validar navegação do Login', () => {

  it('Clicar no botão Login', () => {
    cy.visit('/')

    login.clicarBotaoLogin()

    cy.url()
      .should('be.equal', Cypress.config().baseUrl + 'auth/signin/candidates')

  });

  it('Validar login incorreto', () => {

    var dadosUser = genericsUtils.functionDadosUser()

    cy.intercept('GET', Cypress.config().baseUrl + 'auth/signin/candidates').as('candidates')

    cy.visit('/auth/signin/candidates')
      .esperar('candidates', 200)

    login.clicarBotaoOKBanner()

    login.preencherCampoEmail(dadosUser.email)
    login.preencherCampoSenha(dadosUser.senha)
    login.clicarBotaoEntrar()
    login.validarAlerta('Usuário não encontrado')

  });
})