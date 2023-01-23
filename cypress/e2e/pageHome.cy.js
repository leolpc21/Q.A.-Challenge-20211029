/// <reference types="cypress" />

describe('Validar Home Page', () => {

  it('Validar status 200 da home page', () => {
    cy.request({
      method: 'GET',
      url: '/',
    }).then((response) => {
      expect(response.status).to.eq(200)
    })
  })

  it('Validar URL', () => {
    cy.visit('/')

    cy.url()
      .should('be.equal', Cypress.config().baseUrl)
  });

  it('Validar h1 da home page', () => {

    var titulo = 'Valide seu potencial para alcançar as melhores oportunidades tech'

    cy.visit('/')

    cy.get('h1')
      .contains(titulo)
      .should("be.visible")
  });

})