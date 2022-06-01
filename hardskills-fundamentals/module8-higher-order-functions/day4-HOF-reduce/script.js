const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const compair = (acc, number) => acc + number;
const numbers2 = numbers.filter((number) => number % 2 === 0);
let display = numbers2.reduce(compair)

let display4 = [];

const compair2 = (acc, number) => (number % 2 === 0) ? acc + number : acc;
let display2 = numbers.reduce(compair2)

console.log(display, display2)

