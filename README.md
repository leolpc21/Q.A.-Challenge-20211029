
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

  Adicionado 3 testes na home page:

1. Foi usado a função ".request()" para validar se o status da pagina terá o retorno 200, usando a expectativa do response.
2. Foi usado a função ".visit()" para visitar a página e a função ".url()" em conjunto com a função ".should()" para validar se o link está de acordo.
3. Foi usado a função ".get()" para identificar o elemento em conjunto com a função ".contains()" para validar se contém o texto dentro do elemento e a função ".should()" faz a afirmação se o elemento está visivel na página através do "be.visible".

- Foi adicionado a "baseUrl" no arquivo "cypress.config" para que fique definido a URL padrão do projeto. Desta forma, quando for necessário visitar a home, não será necessário incluir o link completo, podendo passar apenas a "/" nas funções ".visit()" e ".request()".
- Com a funcionalidade de template strings do JavaScript, podemos obter o valor da configuração da baseUrl (através de Cypress.config().baseUrl). Com o retorno da chamada da função ".url()", podemos verificar se a mesma é igual a uma URL esperada.

2- Navegar pela página de login no menu superior;

  Adicionado 2 testes no login:

1. A função ".click()" na home page clica no botão "Login" e posteiormente terá uma validação se foi para a url correta.
2. A função ".intercept()" simula o atraso de uma requisão, fazendo com que o teste continue após a conclusão da requisição. A função ".esperar()" foi criada a partir do arquivo commands, onde ele recebe a requisição do intercept e o status de conclusão. Quando é atingido o status, o teste passa para o próximo comando. A função ".clicarBotaoOKBanner()", clica no botão "OK" do banner. A função ".preencherCampoEmail()" recebe um valor e faz o preenchimento do campo de Email. A função ".preencherCampoSenha()" recebe um valor e faz o preenchimento do campo da Senha. A função ".clicarBotaoEntrar()" clica no botão "Entrar". A função ".validarAlerta()" valida a mensagem de alerta. A função ".type()" "escreve" nos campos de input.

- Foi criado a pasta "pageObject" e dentro dela a pasta "login". Nele organizamos cada função feita pela automação, cliques, preenchimentos e validações. O arquivo "elementos" é para separar todos os elementos usados nas funções do "index". Dessa forma, será mais facil fazer manutenção no código, caso seja necessário.
- Para identificar o elemento, clicamos com o botão F12 do teclado, que irá abrir as ferramentas de desenvolvimento do browser. Com ele aberto no menu "Elements" podemos consultar os elementos da página. Para abrir o campo de busca, clicamos dentro da pagina HTML e depois o botão CTRL + F. Quando fazemos essa busca, é importante que o resultado seja sempre 1, pois dessa forma o cypress saberá exatamente qual elemento buscar. Caso tenha mais de 1, o cyress dará um erro de duplicidade. Segue uma imagem de um exemplo de busca:

<div align="center">
<img src="https://user-images.githubusercontent.com/43275999/213593990-1bf1622c-9bf2-4d3c-aae6-18918fe7fe04.jpeg" width="750px" />
</div>

- Em alguns momentos podemos combinar dois ou mais elementos ou com a função ".contains()", para podermos garantir de que a ação será certeiro.
- Os elementos mais recomendado são: id e classe. O id dentro do arquivo elementos é idenficiado pelo simbolo hashtag (#) ex: "#email", já a classe pelo ponto (.) ex: ".banner-content". 

3- Agora o seu sistema de teste automatizado deverá criar uma conta para o perfil de pessoas candidatas;

Adicionado 1 teste de cadastro

1. A função ".functionDadosUser()" foi criada no arquivo "index" dentro da pasta "utils". Ela é responsável por consumir a API, pegando os dados de usuário para o cadastro e sendo armazenado na variável "dadosUser". A função ".clicarBotaoCriarConta()" clica no botão "Criar Conta". As funções ".preencherCampoNome()", ".preencherCampoEmail()" e ".preencherCampoSenha()" recebem um dado que está armazenado na variável "dadosUser" e preenchem os campos determinados a cada uma. A função ".clicarBotaoAceiteTermo()" marca como ativo o aceite dos termos através da função ".check()". A função ".clicarBotaoInscrevaSe()" clica no botão "Inscreva-se".

- A função ".home()" foi criada no arquivo "commands" para definir um padrão de acesso a home, pois assim não é necessário repetir os mesmos codigos em todos os testes.

4- Ao criar a conta você será direcionado ao sistema para o preenchimento do perfil. O seu teste automatizado deverá testar os formulários que estarão em cada etapa do preenchimento do perfil;

Continuação do teste de cadastro

1. A função ".clicarCarreira()" recebe um valor e clica na carreira, após o click espera que as habilidades sejam carregadas na página. A função .selecionarHabilidade()" recebe um valor e clica na habilidade carregada. A função ".selecionarExperiencia()" recebe um valor e seleciona a experiência. A função ".selecionarMomentoProfissional()" recebe um valor e seleciona o momento profissional. A funçã ".preencherCampoTelefone()" recebe um valor e preenche o campo Telefone. A função ".preencherCampoCidade()" recebe um valor e preenche o campo Cidade. A função ".selecionarPreferenciaVaga()" recebe um valor e clica na prefência da vaga. A função ".clicarBotaoProximo()" valida se o botão está visível e depois clica no botão "Próximo". A função ".clicarBotaoComunidade()" recebe um valor e clica na comunidade. A função ".selecionarRelacaoComunidade()" recebe dois valores, uma para validar a comunidade e a outra para selecionar a relação na comunidade. A função ".selecionarCausasSociais()" recebe um valor, escreve a causa social no imput e simula a tecla "enter". A função ".selecionarRaca()" recebe um valor e seleciona a raça. A função ".selecionarIdentidadeGenero()" recebe um valor e seleciona a identidade de gênero. A função ".selecionarOrientacaoSexual()" recebe um valor e seleciona a orientação sexual. A função ".selecionarDeficiencia()" recebe um valor e seleciona uma deficiência. A função ".clicarBotaoResponderAgora()" valida se está visível e clica no botão "Responder agora". A função ".selecionarNivelConhecimento()" recebe dois valores, um para identificar a habilidade a outra para marcar o nivel de conhecimento. A função ".clicarBotaoEnviar()" valida se está visível e clica no botão "Enviar".

- Foi criado o arquivo "massaDados" dentro da pasta "factories". No arquivo "massaDados" é para criar a massa de dados usados nos testes. Como por exemplo o mapeamento das opções de seleção das carreiras/experiência/momento profissional.

5- Um vez na tela de vagas, nosso sistema de teste automatizado terá que buscar por uma empresa onde terá um ou mais resultados de vagas;

Adicionado 1 teste de busca

1. A função ".apiCadastro()" faz o cadastro de usuário via API. A função ".apiLogin()" faz o login via API, pegando os dados de usuários salvos na variável "cadastroApi" através da função "Cypress.env()". A função ".clicarBotaoVagas()" clica no botão "Vagas". A função ".preencherCampoBuscar()" recebe um valor e preenche o campo "Buscar". A função ".clicarBotaoBuscar()" clica no botão "Buscar". A função ".contarResultado()" recebe dois valores, a primeira é a quantidade de vagas retornada da busca e a outra o nome de uma das vagas. Onde ele valida a quantidade de vagas retornada e se possui a vaga mencionada. A função ".clicarBotaoVerVaga()" recebe um valor e clica no botão "Ver Vagas" da vaga mencionada.

- O cadastro via API roda antes do teste através da função "beforeEach()". Desta forma, garantimos os dados do usuário e salvamos na variável para reutilização no login via API.

- A função ".apiCadastro()" pega os dados de usuário através da função ".functionDadosUser()" e salva na variável "cadastroApi". É criado a variável "payload" para distrinchar os dados de Email, Senha e Nome do usuário, para que seja utilizado na requisição. Na requisição temos o método, url, body e o headers para o cadastro. Na função ".then()" temos a validação do status e uma impressão no console de que o cadastro foi feito com sucesso.

- A função ".apiLogin()" recebe os dados do usuário através da função "Cypress.env()" que está armazenada na variável "cadastroApi". É criado a variável "payload" para distrinchar os dados de Email, Senha e Nome do usuário, para que seja utilizado na requisição. Na requisição temos o método, url, body e o headers para o login. Na função ".then()" temos a validação do status, a função ".clearCookies()" para limpar os cookies do navegador, a função ".setCookie()" para adicionar os cookies de token e user para que o usuário permaneça logado, uma impressão no console de que o login foi feito com sucesso, uma visita a página do dashboard e um clique no banner.

6- Diferenciais

- Foram definidos alguns padrãoes para os testes no arquivo "cypress.config", como tamanho da página, timeout, rodar todos os testes e gravação do vídeo como false.

- Adicionado scripts no arquivo package.json para que possamos rodar os testes via comando no terminal em modo headless. Para rodar os testes basta informar o comando "npm run cy:run" para rodar todos os testes ou "npm run cy:vagas" para rodar um dos testes específicos, como por exemplo o de vagas.

- Para que os dados de login e senha não apareçam no log do cypress, basta incluir o "{log: false}" junto aos dados na função ".type()", como por exemplo ".type(email, { log: false })".

- Cadastro e Login via API.

