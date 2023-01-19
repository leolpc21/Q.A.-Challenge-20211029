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

})