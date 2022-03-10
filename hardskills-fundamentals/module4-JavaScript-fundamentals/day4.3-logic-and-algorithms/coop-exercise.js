const questao1 = () => {
    let soma = 0;
  
    for (let i = 50; i <= 100; i += 1) {
      soma += i;
    }
  
    console.log(`A soma de 50 a 100 é: ${soma}`);
  };
  
  // Chamando questão 1
  // questao1();
  
  const questao2 = () => {
    let quantosDivisiveis = 0;
  
    for (let i = 1; i <= 125; i += 1) {
      if (i % 3 === 0) {
        quantosDivisiveis += 1;
      }
    }
  
    console.log(`Temos ${quantosDivisiveis} números divisiveis por 3;`);
    if (quantosDivisiveis === 50) {
      console.log('Valar Murghulis.');
    }
  };
  
  // Chamando questão 2
  // questao2();
  
  const questao3 = () => {
    let jogador1 = 'pedra';
    let jogador2 = 'pedra';
  
    if (jogador1 === jogador2) {
      return console.log('Empate');
    }
  
    if (jogador1 === 'papel' && jogador2 === 'pedra') {
      return console.log('Jogador 1 venceu');
    }
  
    if (jogador1 === 'tesoura' && jogador2 === 'papel') {
      return console.log('Jogador 1 venceu');
    }
  
    if (jogador1 === 'pedra' && jogador2 === 'tesoura') {
      return console.log('Jogador 1 venceu');
    }
  
    console.log('Jogador 2 venceu');
  };
  
  // Chamando questão 3
  // questao3();
  
  const questao4 = () => {
    let idade = 17;
    console.log(idade >= 18 ? 'Maior de idade.' : 'Menor de idade.');
  };
  
  // Chamando questão 4
  // questao4();
  
  const questao5 = () => {
    // 18 = Marcela; 28 = Carlos; 19 = Camila;
    const array = [18, 2, 17];
  
    let menorIdade = array[0];
    for (let i = 1; i < array.length; i += 1) {
      if (array[i] < menorIdade) {
        menorIdade = array[i];
      }
    }
  
    switch (menorIdade) {
      case array[0]:
        console.log('Marcela é a mais nova;');
        break;
      case array[1]:
        console.log('Carlos é o mais novo.');
        break;
      case array[2]:
        console.log('Camila é a mais nova');
        break;
      default:
        console.log('Ocorreu um erro');
    }
  };
  
  // Chamando questão 5
  // questao5();