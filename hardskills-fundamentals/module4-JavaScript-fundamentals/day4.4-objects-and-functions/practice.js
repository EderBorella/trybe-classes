let atleta = {
    name: 'Marta',
    lastName: 'Silva',
    age : 34,
    medals : {
        golden : 2,
        silver : 3
    },
    bestInTheWorld: [2006, 2007, 2008, 2009, 2010, 2018]
}

console.log('A jogadora ' + atleta.name + ' ' + atleta.lastName + ' tem ' + atleta.age + ' anos de idade.')
console.log('A jogadora ' + atleta.name + ' ' + atleta.lastName + ' foi considerada a melhor do mundo por ' + atleta.bestInTheWorld.length + ' vezes.')
console.log('A jogadore possui ' + atleta.medals.golden + ' medalhas de ouro e ' + atleta.medals.silver + ' medalhas de prata.')