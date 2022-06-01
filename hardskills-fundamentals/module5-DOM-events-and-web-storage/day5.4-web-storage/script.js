
document.getElementById('aplicaCor').addEventListener('click', function(){
    let cor = document.getElementById('corTela').value;
    document.querySelector('.secTexto').style.background = cor;

    localStorage.setItem('corTela', cor);
});



document.getElementById('aplicaCor2').addEventListener('click', function(){
    let cor = document.getElementById('corTexto').value;
    document.querySelector('.secTexto').style.color = cor;

    localStorage.setItem('corText', cor);
});

document.getElementById('aplicaTam').addEventListener('click', function(){
    let tam = document.getElementById('tamanho').value;
    document.getElementById('texto').style.fontSize = tam + 'px';

    localStorage.setItem('fonteTam', tam + 'px');
});

document.getElementById('aplicaTam2').addEventListener('click', function(){
    let tam = document.getElementById('tamLinha').value;
    document.getElementById('texto').style.lineHeight = tam + 'px';

    localStorage.setItem('linhaTam', tam + 'px');
});

document.getElementById('apFonte').addEventListener('click', function(){
    let fonte = document.querySelector('input[name="fonteFav"]:checked').value;
    document.getElementById('texto').style.fontFamily = fonte;
    console.log(fonte)

    localStorage.setItem('fonteEst', fonte);
});

window.onload = recuperaTudo()

function recuperaTudo(){
    let corTela = localStorage.getItem('corTela')
    let corText = localStorage.getItem('corText')
    let fonteTam = localStorage.getItem('fonteTam')
    let linhaTam = localStorage.getItem('linhaTam')
    let fonteEst = localStorage.getItem('fonteEst')

    document.querySelector('.secTexto').style.background = corTela;
    document.querySelector('.secTexto').style.color = corText;
    document.getElementById('texto').style.fontSize = fonteTam;
    document.getElementById('texto').style.lineHeight = linhaTam;
    document.getElementById('texto').style.fontFamily = fonteEst;
}

document.getElementById('reset').addEventListener('click', function(){
    localStorage.clear()
    location.reload();
})