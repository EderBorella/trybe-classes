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

        if (dezDaysList[i] === 25) {
            dia.classList.add('holiday');
            dia.classList.add('friday');
        } else if (dezDaysList[i] === 25 || dezDaysList[i] === 24 || dezDaysList[i] === 31) {
            dia.classList.add('holiday');
        } else if (dezDaysList[i] === 4 || dezDaysList[i] === 11 || dezDaysList[i] === 18) {
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
    butao.id = 'btn-holiday'
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
document.getElementById('btn-holiday').addEventListener('click', feriaFun)

function sexto(texto) {
    let butao2 = document.createElement('button');
    butao2.innerText = texto;
    montibutao.appendChild(butao2)
    butao2.id = 'btn-friday'
}

sexto('Sexta-feira')

let montiSexta = document.getElementsByClassName('friday')

function sextaFun() {

    let days = [4, 11, 18, 25]

    if (montiSexta[0].innerText == 'Sexta-feira') {
        for (i3 = 0; i3 <= montiSexta.length + 1; i3 += 1) {
            montiSexta[i3].innerText = days[i3];
        }
    } else {
        for (i2 = 0; i2 <= montiSexta.length; i2 += 1) {
            montiSexta[i2].innerText = 'Sexta-feira';
        }
    }
}
document.getElementById('btn-friday').addEventListener('click', sextaFun)

function zoomIn(loop) {
    loop.target.style.fontSize = '30px'
}

for (i4 = 0; i4 < document.getElementsByClassName('day').length; i4 += 1) {
    document.getElementsByClassName('day')[i4].addEventListener('mouseover', zoomIn, false)
}

function zoomOut(loop) {
    loop.target.style.fontSize = 'larger'
}

for (i4 = 0; i4 < document.getElementsByClassName('day').length; i4 += 1) {
    document.getElementsByClassName('day')[i4].addEventListener('mouseout', zoomOut, false)
}

let tarefas = document.getElementsByClassName('my-tasks')[0]

let texto = document.getElementById('task-input')

function tarefa() {
    let tare = document.createElement('spam', ('li'))
    tare.innerText = texto.value + '\n';
    tarefas.appendChild(tare)
}

document.querySelector('#btn-add').addEventListener('click', tarefa)