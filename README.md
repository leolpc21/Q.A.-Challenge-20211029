
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

1. A função ".request()" irá validar se o status da pagina terá o retorno 200.
2. A função ".visit()" irá visitar a página e a função ".url()" irá validar se o link está de acordo.
3. A função ".get()" identifica qual elemento será validado, a função ".contains()" valida se contém o texto dentro do elemento anterior e a função ".should()" faz a afirmação se o elemento está visivel na página através do "be.visible".

- Foi adicionado a "baseUrl" no arquivo "cypress.config" para que fique definido a URL padrão do projeto. Desta forma, quando for necessário visitar a home, não será necessário incluir o link completo, podendo passar apenas a "/" nas funções ".visit()" e ".request()".
- Com a funcionalidade de template strings do JavaScript, podemos obter o valor da configuração da baseUrl (através de Cypress.config().baseUrl). Com o retorno da chamada da função ".url()", podemos verificar se a mesma é igual a uma URL esperada.

2- Navegar pela página de login no menu superior;

  Adicionado 2 validações no login:

1. A função ".click()" na home page clica no botão Login e posteiormente terá uma validação da url.
2. A função ".intercept()" simula o atraso de uma requisão, fazendo com que o teste continue após a conclusão da requisição. A função ".esperar()" foi criada a partir do arquivo commands, onde ele recebe a requisição do intercept e o status de conclusão. Quando é atingido o status o teste passa para o próximo comando. A função ".clicarBotaoOKBanner()", clica no botão OK do banner. A função ".preencherCampoEmail()" recebe um valor e faz o preenchimento do campo de Email. A função ".preencherCampoSenha()" recebe um valor e faz o preenchimento do campo da Senha. A função ".clicarBotaoEntrar()" clica no botão Entrar. A função ".validarAlerta()" valida a mensagem de alerta. A função ".type()" "escreve" nos campos de input.

- Foi criado uma pasta pageObject e dois arquivos. O arquivo index foi criado a classe Login e onde importamos os elementos do arquivo elementos. Nele organizamos cada função feita pela automação, cliques, preenchimentos e validações. O arquivo elementos é para separar todos os elementos usados nas funções do index. Dessa forma, será mais facil fazer manutenção no código, caso seja necessário.
- Para identificar o elemento, clicamos com o botão F12 do teclado, que irá abrir as ferramentas de desenvolvimento do browser. Com ele aberto no menu Elements podemos consultar os elementos da página. Para abrir o campo de busca, clicamos dentro da pagina HTML e depois o botão CTRL + F. Quando fazemos essa busca, é importante que o resultado seja sempre 1, pois dessa forma o cypress saberá exatamente qual elemento buscar. Caso tenha mais de 1, o cyress dará um erro de duplicidade. Segue uma imagem de um exemplo de busca:

<div align="center">
<img src="https://user-images.githubusercontent.com/43275999/213593990-1bf1622c-9bf2-4d3c-aae6-18918fe7fe04.jpeg" width="750px" />
</div>

- Em alguns momentos podemos combinar dois ou mais elementos ou com a função ".contains()", para podermos garantir de que a ação será certeiro.
- Os elementos mais recomendado são: id e classe. O id dentro do arquivo elementos é idenficiado pelo simbolo hashtag (#) ex: "#email", já a classe pelo ponto (.) ex: ".banner-content". 


