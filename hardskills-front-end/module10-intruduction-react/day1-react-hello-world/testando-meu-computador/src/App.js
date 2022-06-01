import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}
const array = ['Jogar lixo', 'Passar aspirador', 'Fazer comida', 'Limpar sangue do porão', 'Colocar agua na geladeira']
function App() {
  return (
    <ol>
      {array.map((element) => {
        return Task(element)
      })}
    </ol>
  );
}

export default App;