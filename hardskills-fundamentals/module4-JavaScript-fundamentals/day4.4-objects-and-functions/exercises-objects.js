let info = {
    personagem: 'Tio Patinhas',
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: 'O último MacPatinhas',
    recorente: 'Sim'
  };

  let info2 = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorente: 'Sim'
  };

function boasVindas (){
    console.log('Boa tarde, ' + info.personagem + '.')
};

function printInfo (){
    let conferidor = info.recorente === info2.recorente ? 'Ambos recorrentes': 'Um deles não é recorrente.';
    console.log(info.personagem + ' e ' + info2.personagem
                + '\n' + info.origem + ' e ' + info2.origem
                + '\n' + info.nota + ' e ' + info2.nota
                + '\n' + conferidor)
    
}

let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
      {
        titulo: 'Harry Potter e o Prisioneiro de Azkaban',
        autor: 'JK Rowling',
        editora: 'Rocco',
      }
    ],
  };

  function livroFav (l1){
    console.log('O livro favorito de ' + l1.nome + ' ' + l1.sobrenome + ' se chama ' + l1.livrosFavoritos[0].titulo + '.')
    console.log(l1.nome + ' tem ' + l1.livrosFavoritos.length + ' livros favoritos.')
    }

livroFav(leitor)