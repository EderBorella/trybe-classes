let ptext = document.getElementsByTagName('p')[0];
let box1 = document.getElementsByClassName('main-content')[0]

function textChange(posi, text){
    posi.innerText = text;
};
function changeCollor(posit, color){
    posit.style.background = color;
};

textChange(ptext, 'Me vejo trabalhando com programação, em uma empresa grande.')
changeCollor(box1, "rgb(76,164,109)")