
### Desafio referente: https://lab.coodesh.com/leolpc21/q-a-challenge-20211029

## Parte 1

**Framework escolhido:** Cypress

A escolha do Cypress foi realizada pelo fato da solução dispor de uma documentação completa, rica em detalhes, por haver várias comunidades de discussão sobre o uso da ferramenta e haver uma oportunidade grande de resolução de problemas complexos e desafios. Ela dispõe de uma série de oportunidades de casos de testes.

- Documentação: https://docs.cypress.io/
- Tipos de testes: 
  - Testes de ponta a ponta (E2E)
  - Testes de componentes
  - testes de integração
  - testes de unidade

Sobre o Cucumber e Robot Framework, não tenho discernimento sobre. Não optei o Selenium, pois o mesmo possui uma configuração mais custosa e o uso dos elementos nos cenários tem uma alta complexidade (uso do xpath).

## Parte 2

1- Se a página está carregando corretamente a home page;

  Adicionado 3 validações na home page:

1. Utilizando a função .request(). Onde irá validar se o status da pagina terá o retorno 200.
2. Utilizando as funções .visit() e .url(). Onde a função .visit() irá visitar a página e a função .url() irá validar se o link está de acordo.
3. Utilizando as funções .get(), .contains() e .should(). Onde a função .get() identifica em qual elemento quero validar, a função .contains() valida se contém o texto dentro do elemento encontrado na função anterior e a função .should() faz a afirmação se o elemento está visivel na página através do "be.visible".

- Foi adicionado a "baseUrl" no arquivo "cypress.config" para que fique definido a URL padrão do projeto. Desta forma, quando for necessário visitar a home, não será necessário incluir o link completo, podendo passar apenas a "/" nas funções .visit() e .request().
- Com a funcionalidade de template strings do JavaScript, podemos obter o valor da configuração da baseUrl (através de Cypress.config().baseUrl). Com o retorno da chamada da função .url(), podemos verificar se a mesma é igual a uma URL esperada.