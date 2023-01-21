
class GenericsUtils {
  functionDadosUser() {

    let request = new XMLHttpRequest()
    request.open("GET", 'https://randomuser.me/api/?nat=br', false)
    request.send()

    var dados = JSON.parse(request.responseText)

    var payload = {
      nome: dados.results[0].name.first + ' ' + dados.results[0].name.last,
      email: dados.results[0].email,
      senha: dados.results[0].login.password + 'Le0@',
      cidade: dados.results[0].location.city,
      telefone: '32999999999'
    }

    return payload
  }
}

export default new GenericsUtils();