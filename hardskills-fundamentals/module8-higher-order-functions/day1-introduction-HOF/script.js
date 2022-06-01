const wakeUp = () => 'Acordando!!';
const brFast = () => 'Bota tomar café da manhã.';
const takeNap = () => 'Partiu dormir!!';
const doThings = (func) => console.log(func);

// Exercicio 1
const namEmail = (nome) => {
  const exclude = " "
  let nameMin = nome.toLowerCase()
  let email = nameMin.replace(/ /g, '');
  return {
    name: nome,
    email: `${email}@trybe.com`,
  }
}
const newEmployees = (callback) => {
  const employees = {
    id1: callback("Pedro Guerra"), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: callback("Luiza Drumond"), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: callback("Carla Paiva"), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};
// Exercicio 2
const checker = (a, b) => a === b ? true : false;
const lot = (aposta, verifi) => {
  let aleato = Math.ceil(Math.random() * 5)
  verifi(aposta, aleato) ? console.log(`Deu: ${aleato}. Parabéns você ganhou.`) : console.log(`Deu: ${aleato}. Tente novamente`)
}
// Exercicio 2
const checaResposta = (arrayGabarito, arrayRespostas, tester) => {
  const a = arrayGabarito;
  const b = arrayRespostas;
console.log(tester(a, b));
};
const checador = (correto, respostas) => {
  let pontuacao = 0;
  for (let index = 0; index < correto.length; index += 1) {
    if (respostas[index] === 'N.A') {

    } else if (respostas[index] !== correto[index]) {
      pontuacao -= 0.5;
    } else{
      pontuacao += 1;
    }
  }
  return pontuacao;
}
checaResposta(['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'], ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'], checador)