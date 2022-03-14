let ptext = document.getElementsByTagName('p')[0];
let box1 = document.getElementsByClassName('main-content')[0];
let box2 = document.getElementsByClassName('center-content')[0];
let wrongTitle = document.getElementsByClassName('title')[0];
let testo = 'Me vejo trabalhando com programação, em uma empresa grande.'

function textChange(posi, text){
    posi.innerText = text;
};
function changeCollor(posi2, color){
    posi2.style.background = color;
};
function changeCollor2(posi3, color2){
    posi3.style.background = color2
};
function correctText(posi4, text2){
    posi4.innerText = text2;
};
function capitalize(teste){
    teste = teste.style.textTransform = 'uppercase';
}
textChange(ptext, testo)
changeCollor(box1, "rgb(76,164,109)")
changeCollor2(box2, 'white')
correctText(wrongTitle, 'Exercício 5.1 - JavaScript')
capitalize(ptext)