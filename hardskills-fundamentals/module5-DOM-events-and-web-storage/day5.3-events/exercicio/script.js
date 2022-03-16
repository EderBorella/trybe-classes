function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');

    for (let index = 0; index < weekDays.length; index += 1) {
        const days = weekDays[index];
        const dayListItem = document.createElement('li');
        dayListItem.innerHTML = days;

        weekDaysList.appendChild(dayListItem);
    };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.

const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

let calen = document.getElementById('days')

function divDay() {
    for (i = 0; i < dezDaysList.length; i += 1) {
        let dia = document.createElement('li');
        dia.innerText = dezDaysList[i];
        dia.className = 'day'
        calen.appendChild(dia)

        if (dezDaysList[i] === 25 || dezDaysList[i] === 24 || dezDaysList[i] === 31) {
            dia.classList.add('holiday');
        } else if (dezDaysList[i] === 4 || dezDaysList[i] === 11 || dezDaysList[i] === 18 || dezDaysList[i] === 25) {
            dia.classList.add('friday');
        }
    }
}
divDay();

let montibutao = document.getElementsByClassName('buttons-container')[0]

function feriaa(texto) {
    let butao = document.createElement('button');
    butao.innerText = texto;
    montibutao.appendChild(butao)
    butao.id = 'butferi'
}

feriaa('Feriado')

let montiDia = document.getElementsByClassName('holiday')

function feriaFun() {

    if (montiDia[0].style.background == 'yellow') {
        for (i3 = 0; i3 < montiDia.length; i3 += 1) {
            montiDia[i3].style.background = 'rgb(238,238,238)';
        }
    } else {
        for (i2 = 0; i2 < montiDia.length; i2 += 1) {
            montiDia[i2].style.background = 'yellow';
        }
    }
}

document.getElementById('butferi').addEventListener('click', feriaFun)
