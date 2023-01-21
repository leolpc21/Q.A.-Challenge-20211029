import { elemento } from "./elementos";

class Cadastro {

  clicarBotaoCriarConta() {
    cy.get(elemento.buttonCriarConta)
      .contains('Criar Conta')
      .should('be.visible')
      .click()
  }

  preencherCampoNome(nome) {
    cy.get(elemento.inputNome)
      .type(nome)
  }

  preencherCampoEmail(email) {
    cy.get(elemento.inputEmail)
      .type(email)
  }

  preencherCampoSenha(senha) {
    cy.get(elemento.inputSenha)
      .type(senha)
  }

  clicarBotaoAceiteTermo() {
    cy.get(elemento.buttonAceiteTermo)
      .check({ force: true })
  }

  clicarBotaoInscrevaSe() {
    cy.get(elemento.buttonSubmit)
      .contains('Inscreva-se')
      .should('be.visible')
      .click()
  }

  clicarCarreira(carreira) {
    cy.intercept('GET', 'https://api.beta.coodesh.com/fields/terms/skill?category[]=qa').as('qa')
    cy.get(elemento.inputCarreira)
      .contains(carreira)
      .click()
      .esperar('qa', 200)
  }

  selecionarHabilidade(habilidade) {
    cy.get(elemento.buttonHabilidade)
      .contains(habilidade)
      .click()
  }

  selecionarExperiencia(experiencia) {
    cy.get(elemento.selectExperiencia)
      .select(experiencia)
  }

  selecionarMomentoProfissional(momento) {
    cy.get(elemento.selectMomento)
      .select(momento)
  }

  preencherCampoTelefone(telefone) {
    cy.get(elemento.inputTelefone)
      .type(telefone)
  }

  preencherCampoCidade(cidade) {
    cy.get(elemento.inputCidade)
      .type(cidade)
  }

  selecionarPreferenciaVaga(vaga) {
    cy.get(elemento.inputPreferenciaVaga)
      .contains(vaga)
      .click()
  }

  clicarBotaoProximo() {
    cy.intercept('GET', 'https://api.beta.coodesh.com/scorecards/user/**').as('user')
    cy.get(elemento.buttonProximo)
      .contains('Próximo')
      .should('be.visible')
      .click()
      .esperar('user', 200)
  }

  clicarBotaoComunidade(comunidade) {
    cy.get(elemento.buttonComunidade)
      .contains(comunidade)
      .click()
  }

  selecionarRelacaoComunidade(comunidade, relacao) {
    cy.contains('tr', comunidade)
      .find(elemento.selectRelacao)
      .select(relacao)
  }

  selecionarCausasSociais(causa) {
    cy.contains(elemento.formCausaSociais, 'Quais causas sociais vocÊ se interessa?')
      .find(elemento.inputCausasSociais)
      .type(`${causa}{enter}`)
  }

  selecionarRaca(raca) {
    cy.get(elemento.selectRaca)
      .select(raca)
  }

  selecionarIdentidadeGenero(genero) {
    cy.get(elemento.selectGenero)
      .select(genero)
  }

  selecionarOrientacaoSexual(orientacao) {
    cy.get(elemento.selectOrientacaoSexual)
      .select(orientacao)
  }

  selecionarDeficiencia(deficiencia) {
    cy.get(elemento.selectDeficiencia)
      .select(deficiencia)
  }

  clicarBotaoResponderAgora() {
    cy.get('a')
      .contains('Responder agora')
      .should('be.visible')
      .click()
  }

  selecionarNivelConhecimento(habilidade, nivel) {
    cy.contains('tr', habilidade)
      .find(`span[style*='left: ${nivel}']`)
      .click()
  }

  clicarBotaoEnviar() {
    cy.get(elemento.buttonSubmit)
      .contains('Enviar')
      .should('be.visible')
      .click()
  }
}

export default new Cadastro();