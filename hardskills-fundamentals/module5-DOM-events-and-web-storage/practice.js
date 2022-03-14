let ptext = document.getElementsByTagName('p')[0];
let box1 = document.getElementsByClassName('main-content')[0]
let box2 = document.getElementsByClassName('center-content')[0]

function textChange(posi, text){
    posi.innerText = text;
};
function changeCollor(posi2, color){
    posi2.style.background = color;
};
function changeCollor2(posi3, color2){
    posi3.style.background = color2
}

textChange(ptext, 'Me vejo trabalhando com programação, em uma empresa grande.')
changeCollor(box1, "rgb(76,164,109)")
changeCollor2(box2, 'white')