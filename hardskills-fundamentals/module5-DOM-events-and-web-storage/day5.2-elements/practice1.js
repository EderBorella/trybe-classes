// parte 1

let res1 = document.getElementById('primeiroFilho').nextElementSibling.firstElementChild;

res1.innerText = 'Texto alterado, pae.';

let res2 = document.getElementById('pai').firstElementChild;

let res3 = document.getElementById('elementoOndeVoceEsta').previousElementSibling;

let res4 = document.getElementById('elementoOndeVoceEsta').nextSibling;

let res5 = document.getElementById('elementoOndeVoceEsta').nextElementSibling;

let res6 = document.getElementById('pai').children[2];

// parte 2
function insertPai(texto) {
    let mod1 = document.getElementById('elementoOndeVoceEsta').parentElement;

    let insertElement = texto;

    let elementType = document.createElement('p');

    elementType.innerText = insertElement;

    mod1.appendChild(elementType)
}
function insertVoce(texto) {
    let mod1 = document.getElementById('elementoOndeVoceEsta');

    let insertElement = texto;

    let elementType = document.createElement('p');

    elementType.innerText = insertElement;

    mod1.appendChild(elementType)
}
function insertFilho(texto) {
    let mod1 = document.getElementById('primeiroFilhoDoFilho');

    let insertElement = texto;

    let elementType = document.createElement('p');

    elementType.innerText = insertElement;

    mod1.appendChild(elementType)
}

insertFilho('Obrigatoriedade.')

let mod2 = document.querySelector('#primeiroFilhoDoFilho p').parentElement.parentElement.nextElementSibling;


// parte 3

let mod3 = document.querySelector('#pai')
let mod4 = document.querySelector('#pai').children
let mod5 = document.querySelector('#primeiroFilhoDoFilho').nextElementSibling
let mod6 = document.querySelector('#pai').lastElementChild

for (i = 0; i < mod4.length; i += 1) {
    if (mod4[i].id !== '#elementoOndeVoceEsta') {
        mod3.removeChild(mod4[i])
    }
}

mod5.remove()
mod6.remove()