const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

function studentAverage() {

}

let averages = grades.map((element) => {
  return element.reduce((arr, number) => number + arr) / element.length;
})

let display = students.map((element, index) => {
  return {name: element, average: averages[index]}
})

console.log(display)