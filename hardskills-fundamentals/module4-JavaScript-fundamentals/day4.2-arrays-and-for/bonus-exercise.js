let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numbers2 = [];
let number;

// Exercicio 1:

// for (let index = 1; index < numbers.length; index += 1) {
//     for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
//       if (numbers[index] < numbers[secondIndex]) {
//         let position = numbers[index];
//         numbers[index] = numbers[secondIndex];
//         numbers[secondIndex] = position;
//       }
//     }
//   }
//   console.log(numbers)

// Exercicio 2:

// for (let index = 1; index < numbers.length; index += 1) {
//     for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
//       if (numbers[index] > numbers[secondIndex]) {
//         let position = numbers[index];
//         numbers[index] = numbers[secondIndex];
//         numbers[secondIndex] = position;
//       }
//     }
//   }
//   console.log(numbers)

// Exercicio 3:

// for (let index = 0; index < numbers.length - 1; index += 1) {
//     numbers2.push(numbers[index] * numbers[index + 1])
//   }
//   numbers2.push(numbers[numbers.length - 1] * 2)
//   console.log(numbers2)