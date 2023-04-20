function validar() {

let campoA = parseInt(document.getElementById('first-number').value);
let campoB = parseInt(document.getElementById('second-number').value);
const mensagemSucesso = document.getElementById('success-message');
const mensagemDeErro = document.getElementById('error-message');

if(campoA < campoB) {
    mensagemSucesso.innerHTML = `Sucesso! O número <b>${campoB}</b> é maior do que o número <b>${campoA}</b>!`;
    mensagemSucesso.style.display = 'block';
    mensagemDeErro.style.display = 'none';
} else {
    mensagemDeErro.innerHTML = `O número ${campoA} é maior ou igual ao número ${campoB}.`;
    mensagemDeErro.style.display =  'block';
    mensagemSucesso.style.display= 'none';
}
}




