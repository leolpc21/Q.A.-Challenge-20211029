/// <reference types="cypress" />
import cadastro from "../pageObject/cadastro";
import genericsUtils from "../support/utils";

describe('Criar cadastro de pessoa candidata', () => {

  it('Criar cadastro de novo candidato', () => {

    var dadosUser = genericsUtils.functionDadosUser()

    cy.home()

    cadastro.clicarBotaoCriarConta()
    cadastro.preencherCampoNome(dadosUser.nome)
    cadastro.preencherCampoEmail(dadosUser.email)
    cadastro.preencherCampoSenha(dadosUser.senha)
    cadastro.clicarBotaoAceiteTermo()
    cadastro.clicarBotaoInscrevaSe()
  });
})