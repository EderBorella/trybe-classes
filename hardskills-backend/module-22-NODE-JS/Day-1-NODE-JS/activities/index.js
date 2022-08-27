const result = require('./bmi');
const table = require('./table');
const readline = require('readline-sync');

const weight = readline.questionFloat(`What's your weight? (In kilos ex: 109.4): `);
const height = readline.questionFloat(`What's your height? (In meters, ex: 1.78): `);

console.log(table(result(weight, height)));