const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};
const addPeriod = (lesson, period, value) => {
  lesson[period] = value;
}
addPeriod(lesson2, 'turno', 'noite')
const chaves = (lesson) => {
  const nomesKeys = Object.keys(lesson)
  console.log(nomesKeys)
}
const objLength = (obje) => {
  console.log(Object.keys(obje).length)
}
const objeValue = (obje) => {
  console.log(Object.values(obje))
}
const allLesson = {}
allLesson.lesson1 = Object.assign({}, lesson1);
allLesson.lesson2 = Object.assign({}, lesson2);
allLesson.lesson3 = Object.assign({}, lesson3);
const totalStu = () => {
  let total = 0;
  for (lesson in allLesson) {
    total += allLesson[lesson].numeroEstudantes
  }
  console.log(total)
}
const pegaNum = (lesson, posi) => {
  const array = Object.values(lesson)
  console.log(array[posi])
}
const veriPar = (lesson, chave, valor) => {
  console.log(lesson[chave] === valor ? true : false);
}
const gostaMat = () => {
  let total = 0;
  for (lesson in allLesson) {
    if (allLesson[lesson].materia == 'Matemática') {
      total += allLesson[lesson].numeroEstudantes
    }
  }
  console.log(total)
}
const relatorio = () => {
  let relat1 = {
    professor: 'Maria Clara',
    aulas: [],
    estudantes: 0
  }
  let relat2 = {
    professor: 'Carlos',
    aulas: [],
    estudantes: 0
  }
  for (lesson in allLesson) {
    if(allLesson[lesson].professor == 'Maria Clara'){
      relat1.aulas.push(allLesson[lesson].materia)
      relat1.estudantes += allLesson[lesson].numeroEstudantes
    }else if(allLesson[lesson].professor == 'Carlos'){
      relat2.aulas.push(allLesson[lesson].materia)
      relat2.estudantes += allLesson[lesson].numeroEstudantes
    }
  }
  console.log(relat1, relat2)
}
relatorio()