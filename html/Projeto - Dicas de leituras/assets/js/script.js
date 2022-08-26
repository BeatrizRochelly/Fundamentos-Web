/* 
Acessando o DOM

Case Sensitive = reconhece letras maisculas e minusculas para as palavras reservadas desse linguagem

por Tag: getElementByTagName()
por Id: getElementById()
por Nome: getElementsByName()
por Classe; getElementsByClassName()
por Seletor: querySelector() (MELHOR PRATICA PARA ACESSAR O DOM)
*/

var nome = window.document.getElementById('nome')
var email = document.querySelector('#email')
var livrosugerido = document.querySelector('#livrosugerido')
var nomeOk = false
var emailOk = false
var livrosugeridoOk = false
var mapa = document.querySelector('#mapa')

nome.style.width = '100%'
email.style.width = '100%'


function validaNome() {
    let txt = document.querySelector('#txtNome')
    if (nome.value.length < 3) {
        txt.innerHTML = 'Nome Inválido'
        txt.style.color = 'red'
    }
    else {
        txt.innerHTML = 'Nome Válido'
        txt.style.color = 'green'
        nomeOk = true
    }
}

function validaEmail() {
    let txtEmail = document.querySelector('#txtEmail')

    if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
        txtEmail.innerHTML = 'E-mail inválido'
        txtEmail.style.color = 'red'
        emailOk = true
    }
    else {
        txtEmail.innerHTML = 'E-mail Válido'
        txtEmail.style.color = 'green'
    }

}
function validaLivro() {
    let txtLivroSugerido = document.querySelector('#txtLivroSugerido')
    if (livrosugerido.value.length >= 100) {
        txtLivroSugerido.innerHTML = 'Texto é muito grande, digite no máximo 100 caracteres'
        txtLivroSugerido.style.color = 'red'
        txtLivroSugerido.style.display = 'block'
    }
    else {
        txtLivroSugerido.style.display = 'none'
        livrosugeridoOk = true

    }

}
function enviar() {
    if (nomeOk == true && emailOk == true && livrosugeridoOk == true) {
        alert('Formulário enviado com sucesso!')
    }
    else {
        alert('Preencha o formulário corretamente antes de enviar...')
    }
}
