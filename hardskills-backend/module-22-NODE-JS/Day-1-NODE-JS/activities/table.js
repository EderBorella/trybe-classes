const table = (bmi) => {
  if (bmi < 18.5) {
    console.log(`Your BMI is ${bmi}, the table says that: Abaixo do peso (magreza)`)
  } else if (bmi > 18.5 & bmi < 25) {
    console.log(`Your BMI is ${bmi}, the table says that: Peso normal`)
  } else if (bmi >= 25 & bmi < 30) {
    console.log(`Your BMI is ${bmi}, the table says that: Acima do peso (sobrepeso)`)
  } else if (bmi >= 30 & bmi < 35) {
    console.log(`Your BMI is ${bmi}, the table says that: Obesidade grau I`)
  } else if (bmi >= 35 & bmi < 40) {
    console.log(`Your BMI is ${bmi}, the table says that: Obesidade grau II`)
  } else if (bmi >= 40) {
    console.log(`Your BMI is ${bmi}, the table says that: Obesidade graus III e IV`)
  }
};

module.exports = table;