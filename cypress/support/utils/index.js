
class GenericsUtils {
  functionDadosUser() {

    let request = new XMLHttpRequest()
    request.open("GET", 'https://randomuser.me/api', false)
    request.send()

    var dados = JSON.parse(request.responseText)

    var payload = {
      nome: dados.results[0].name.first + ' ' + dados.results[0].name.last,
      email: dados.results[0].email,
      senha: dados.results[0].login.password + 'L30@',
      cidade: dados.results[0].location.city,
      telefone: dados.results[0].cell
    }

    return payload
  }
}

export default new GenericsUtils();