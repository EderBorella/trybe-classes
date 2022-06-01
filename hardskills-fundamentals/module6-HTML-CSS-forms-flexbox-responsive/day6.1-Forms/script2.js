const enviar = document.getElementById('enviar');
const limpar = document.getElementById('limpa');
const inputNome = document.getElementById('nome');
const inputEmail = document.getElementById('email');

enviar.addEventListener('click', (event) => {
    event.preventDefault()
    
    if(inputNome.value.length < 10 || inputNome.value > 40){
        alert('Dados Inválidos');
    }
    if(inputNome.value.length < 10 || inputNome.value > 50){
        alert('Dados Inválidos');
    }
})
limpar.addEventListener('click', () => {
    document.getElementById('form-trybe').reset()
})