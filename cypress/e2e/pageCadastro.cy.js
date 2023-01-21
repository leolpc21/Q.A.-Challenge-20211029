/// <reference types="cypress" />
import cadastro from "../pageObject/cadastro";
import genericsUtils from "../support/utils";
import massaDados from "../factories/massaDados";

describe('Criar cadastro de pessoa candidata', () => {

  var dados = massaDados.massaDados();
  var dadosUser = genericsUtils.functionDadosUser()

  it('Criar cadastro de novo candidato', () => {

    const nivelConhecimentoParte1 = [
      {
        conhecimento: dados.habilidades.ageisScrum,
        nivel: dados.nivelConhecimento.praticante
      },
      {
        conhecimento: dados.habilidades.analiseModelagemDados,
        nivel: dados.nivelConhecimento.basico
      },
      {
        conhecimento: dados.habilidades.estruturaDados,
        nivel: dados.nivelConhecimento.basico
      },
      {
        conhecimento: dados.habilidades.UML,
        nivel: dados.nivelConhecimento.basico
      },
      {
        conhecimento: dados.habilidades.GIT,
        nivel: dados.nivelConhecimento.praticante
      },
      {
        conhecimento: dados.habilidades.comunicacaoTecnica,
        nivel: dados.nivelConhecimento.basico
      },
      {
        conhecimento: dados.habilidades.gestaoTempo,
        nivel: dados.nivelConhecimento.praticante
      },
      {
        conhecimento: dados.habilidades.logica,
        nivel: dados.nivelConhecimento.basico
      },
      {
        conhecimento: dados.habilidades.testesExploratorios,
        nivel: dados.nivelConhecimento.avancado
      },
      {
        conhecimento: dados.habilidades.casoUso,
        nivel: dados.nivelConhecimento.praticante
      }
    ]

    const nivelConhecimentoParte2 = [
      {
        conhecimento: dados.habilidades.BDD1,
        nivel: dados.nivelConhecimento.praticante
      },
      {
        conhecimento: dados.habilidades.TDD,
        nivel: dados.nivelConhecimento.basico
      },
      {
        conhecimento: dados.habilidades.testeUnitario,
        nivel: dados.nivelConhecimento.basico
      },
      {
        conhecimento: dados.habilidades.testCoverage,
        nivel: dados.nivelConhecimento.basico
      },
      {
        conhecimento: dados.habilidades.automacaoTeste,
        nivel: dados.nivelConhecimento.praticante
      },
      {
        conhecimento: dados.habilidades.planejamentoTeste,
        nivel: dados.nivelConhecimento.praticante
      },
      {
        conhecimento: dados.habilidades.analiseRequisitos,
        nivel: dados.nivelConhecimento.praticante
      },
      {
        conhecimento: dados.habilidades.BDD2,
        nivel: dados.nivelConhecimento.praticante
      }
    ]

    cy.home()

    cadastro.clicarBotaoCriarConta()
    cadastro.preencherCampoNome(dadosUser.nome)
    cadastro.preencherCampoEmail(dadosUser.email)
    cadastro.preencherCampoSenha(dadosUser.senha)
    cadastro.clicarBotaoAceiteTermo()
    cadastro.clicarBotaoInscrevaSe()

    cadastro.clicarCarreira(dados.carreiras.QATestes)
    cadastro.selecionarHabilidade("BDD")
    cadastro.selecionarExperiencia(dados.experiencia.doisTresAnos)
    cadastro.selecionarMomentoProfissional(dados.momentoProfissional.buscaOportunidades)
    cadastro.preencherCampoTelefone(dadosUser.telefone)
    cadastro.preencherCampoCidade(dadosUser.cidade)
    cadastro.selecionarPreferenciaVaga(dados.preferenciaVaga.remota)
    cadastro.selecionarPreferenciaVaga(dados.preferenciaVaga.hibrida)
    cadastro.clicarBotaoProximo()
    cadastro.clicarBotaoComunidade('Udemy')
    cadastro.selecionarRelacaoComunidade('Udemy', 'Entusiasta')
    cadastro.selecionarCausasSociais(dados.causasSociais.causaUmLGBT)
    cadastro.selecionarCausasSociais(dados.causasSociais.causaDoisLGBT)
    cadastro.selecionarRaca(dados.racaCor.branca)
    cadastro.selecionarIdentidadeGenero(dados.IdentidadeGenero.homem)
    cadastro.selecionarOrientacaoSexual(dados.orientacaoSexual.homossexual)
    cadastro.selecionarDeficiencia(dados.deficiencia.nenhuma)
    cadastro.clicarBotaoProximo()
    cadastro.clicarBotaoResponderAgora()
    nivelConhecimentoParte1.forEach(function (parte1) {
      cadastro.selecionarNivelConhecimento(parte1.conhecimento,
        parte1.nivel)
    });
    cadastro.clicarBotaoProximo()
    nivelConhecimentoParte2.forEach(function (parte2) {
      cadastro.selecionarNivelConhecimento(parte2.conhecimento,
        parte2.nivel)
    });
    cadastro.clicarBotaoEnviar()
  });
})