/// <reference types="cypress" />

Cypress.Commands.add("esperar", function (wait, status) {
  cy.wait(`@${wait}`)
    .its("response.statusCode")
    .should("eq", status);
});