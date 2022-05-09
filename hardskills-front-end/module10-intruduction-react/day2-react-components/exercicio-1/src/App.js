import './App.css';
import pokemons from './data.jsx';
import Pokemon from './Pokemon'; 

function App() {
  return (
    <div className="App">
      {pokemons.map((poke, index) => {
        return <Pokemon pokemon={poke} key={poke.name}/>
      })}
    </div>
  );
}

export default App;
