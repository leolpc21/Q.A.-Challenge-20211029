/// <reference types="cypress" />
import login from "../pageObject/login";

Cypress.Commands.add("esperar", function (wait, status) {
  cy.wait(`@${wait}`, { timeout: 10000 })
    .its("response.statusCode")
    .should("eq", status);
});

Cypress.Commands.add("home", function () {
  cy.intercept('GET', Cypress.config().baseUrl).as('home')
  cy.visit('/').esperar('home', 200)
  login.clicarBotaoOKBanner()
});