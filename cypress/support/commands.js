/// <reference types="cypress" />
import login from "../pageObject/login";
import genericsUtils from "../support/utils";

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

Cypress.Commands.add("apiCadastro", function () {

  Cypress.env("cadastroApi", genericsUtils.functionDadosUser())

  const payload = {
    email: Cypress.env("cadastroApi").email,
    password: Cypress.env("cadastroApi").senha,
    displayName: Cypress.env("cadastroApi").nome,
  }

  cy.request({
    method: "POST",
    url: "https://api.beta.coodesh.com/auth/signup",
    body: payload,
    headers: { 'x-csh-key': 'coodesh-experts' }
  }).then(function (response) {

    expect(response.status).to.eq(201)

    cy.log("Usuário(a) " + payload.displayName + " cadastrado com sucesso")

  })
})

Cypress.Commands.add("apiLogin", function (usuario) {

  const payload = {
    email: usuario.email,
    password: usuario.senha,
    nome: usuario.nome,
  };

  cy.request({
    method: "POST",
    url: "https://api.beta.coodesh.com/auth/signin",
    body: payload,
    headers: {
      'x-csh-key': 'coodesh-experts'
    }
  }).then(function (response) {

    expect(response.status).to.eq(201);

    cy.clearCookies()
    cy.setCookie('csh_user_token', response.body.token)
    cy.setCookie('csh_user_roles', 'developer')

    cy.log("Usuário(a) " + payload.nome + " logado com sucesso")

  });

  cy.visit('/dashboard')
  login.clicarBotaoOKBanner()

});

Cypress.on("uncaught:exception", () => {
  return false;
});