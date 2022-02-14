let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')
let nomeOk = false
let emailOk = false
let assuntoOk = false
let mapa = document.querySelector('#mapa')

nome.style.width='100%'
email.style.width='100%'

function validaNome (){

    let txtNome = document.querySelector('#txtNome')
    if(nome.value.length <3){
        txtNome.innerHTML = 'Nome Invalido'
        txtNome.style.color = 'red'
        nomeOk = false
    }else{
        txtNome.innerHTML = 'Nome Valido'
        txtNome.style.color = 'green'
        nomeOk = true
    }
}

function validaEmail (){
    let txtEmail = document.querySelector('#txtEmail')
    if(email.value.indexOf('@') == -1||email.value.indexOf('.') == -1){
        txtEmail.innerHTML='Email Invalido'
        txtEmail.style.color='red'
        emailOk = false
    }else{
        txtEmail.innerHTML='Email Valido'
        txtEmail.style.color='green'
        emailOk = true
    }
}

function validaAssunto(){
    let txtAssunto = document.querySelector('#txtAssunto')
    if(assunto.value.length>=100){
        txtAssunto.innerHTML = 'Texto muito grande, digite no máximo 100 caracteres'
        txtAssunto.style.color='red'
        txtAssunto.style.display = 'block'
        assuntoOk = false
    }else{
        txtAssunto.style.display = 'none'
        assuntoOk = true
    }
}
function enviar(){
    if (nomeOk==true && emailOk==true && assuntoOk == true){
        alert ('Formulário enviado com sucesso!')
    }else{
        alert ('Formulário não enviado, preencha todos os campos corretamente!')
    }
}

function mapaZoom(){
    mapa.style.width = '800px'
    mapa.style.height = '600px'
}

function mapaNormal(){
    mapa.style.width = '400px'
    mapa.style.height = '250px'
}