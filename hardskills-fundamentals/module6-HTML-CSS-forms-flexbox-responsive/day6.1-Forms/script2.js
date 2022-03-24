const enviar = document.getElementById('enviar');
const limpar = document.getElementById('limpa')

enviar.addEventListener('click', (event) => {
    event.defaultPrevented()
    console.log(enviar)
})
limpar.addEventListener('click', () => {
    document.getElementById('form-trybe').reset()
})