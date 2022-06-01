//Exercicio 1
const testingScope = (escopo) => {
  const ifScope = 'Não devo ser utilizada fora do meu escopo (if)'
  const elseScope = 'Não devo ser utilizada fora meu escopo (else)'
  escopo === true ? console.log(`${ifScope} ótimo, fui utilizada no escopo !`) : console.log(elseScope)
}
//exercicio 2
const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const order = (array) => console.log(`Os números ${array.sort(function (a, b) { return a - b })} se encontram ordenados de forma crescente!`)

//exercicio 3
let test = (n) => {
  for (let i = n - 1; i > 1; i -= 1) {
    n = n *= i;
  }
  n > 1 ? console.log(n) : console.log('1')
}
//exercicio 4
const frase = 'Antônio foi no banheiro e não sabemos o que aconteceu'

const palavrao = (phrase) => {
  let fase1 = phrase.split(" ");
  let fase2 = fase1.sort((a, b) => (b.length - a.length));
  console.log(fase2[0]);
}
//exercicio 5
const btn = document.getElementById('trigger');
const btn2 = document.getElementById('zerador');
const msg = document.getElementById('message');
let counter = document.getElementById('counter');

let contador = 0;
btn.addEventListener('click', () => {
  contador += 1;
  counter.innerText = contador;
  contador > 10 & contador < 25 ? msg.innerText = "PARABÉNS, UPOU DE LEVEL!" : msg.innerText = ""
})
btn2.addEventListener('click', () => {
  contador = 0;
  counter.innerText = 0;
})
//exercicio 6
let frase2 = 'Tryber x aqui!';
let resultado1 = '';
const f1 = (string) => resultado1 = string.replace('x', 'Bebeto');

