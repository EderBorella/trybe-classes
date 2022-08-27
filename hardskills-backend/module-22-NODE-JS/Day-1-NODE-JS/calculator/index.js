const operations = require('./operations');
const readline = require('readline-sync');

console.log('This a basic calculator, made for studies propouse.');
const n1 = readline.questionInt('Insert the first number: ');
const oper = readline.question('Insert the operation: (+, -, *, /) ');
const n2 = readline.questionInt('Insert the second number: ');

switch (oper) {
  case '+':
    console.log(operations.sum(n1, n2))
    break
  case '-':
    console.log(operations.sub(n1, n2))
    break
  case '*':
    console.log(operations.mul(n1, n2))
    break
  case '/':
    console.log(operations.div(n1, n2))
    break
  default:
    console.log('Wrong operation inputed.')
}